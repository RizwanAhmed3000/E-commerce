import { User } from "../Models/User.js"
import bcryptjs from "bcryptjs"
import CryptoJS from "crypto-js"
import Jwt from "jsonwebtoken"
import { createError } from "../Utils/error.js"


const { genSalt, hash } = bcryptjs

//=========================== USER REGISTERATON ====================//
export const register = async (req, res, next) => {
    try {

        //==========HASHING PASSWORD USING BCRYPTJS===================//
        // const salt = await genSalt(12);
        // const hashPassword = await hash(req.body.password, salt);

        //==========HASHING PASSWORD USING CRYPTOJS===================//
        const encryptedPassword = CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTOJS_KEY).toString();

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            // password: hashPassword,// bcryptJS
            password: encryptedPassword, // CryptoJS
            profileImage: req.body?.profileImage,
            isAdmin: req.body.isAdmin,
        });

        //REMOVING CRITICAL INFO FROM THE DATA TO SEND THE RESPONSE

        const { password, isAdmin, ...other } = newUser._doc;

        //SAVING THE USER
        await newUser.save()

        res.status(200).send({
            status: "Successfull",
            message: "Registeration Successfull",
            data: other,
        });

    } catch (error) {
        next(error)
    }
}

//=========================== USER LOGIN ====================//
export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email }); //FIND USER IN DB

        if (!user) {
            next(createError(401, "Wrong Credentials!")); //if user not found
            return;
        }

        const decryptedPassword = CryptoJS.AES.decrypt(user.password, process.env.CRYPTOJS_KEY).toString(CryptoJS.enc.Utf8);
        console.log(decryptedPassword);

        if (decryptedPassword !== req.body.password) {
            next(createError(401, "Wrong Credentials!")); //if user's password is wrong
            return;
        }

        const token = Jwt.sign({ user: user }, process.env.JWT_SECRET_KEY, { expiresIn: '24h' }); //JWT creating token for verification, passing the user


        const { password, isAdmin, ...other } = user._doc; //REMOVING CRITICAL INFO FROM THE DATA TO SEND THE RESPONSE

        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).send({
            status: "Successfull",
            message: "Login Successfull",
            data: other,
            access_token: token
        })
    } catch (error) {
        next(error)
    }
}