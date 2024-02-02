import { User } from "../Models/User.js"
import bcryptjs from "bcryptjs"


const { genSalt, hash } = bcryptjs

//=========================== USER REGISTERATON ====================//
export const register = async (req, res, next) => {
    try {

        //==========HASHING PASSWORD===================//
        const salt = await genSalt(12);
        const hashPassword = await hash(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPassword,
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
    console.log("login")
    res.status(200).send({
        message: "Login working"
    })
}