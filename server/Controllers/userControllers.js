import CryptoJS from "crypto-js"
import { User } from "../Models/User.js";


//UPDATE USER
export const updateUser = async (req, res, next) => {
    // console.log(req.user)
    if (req.user._id === req.params.userId) {
        if (req.body.password) {
            try {
                const encryptedPassword = CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTOJS_KEY).toString();
                req.body.password = encryptedPassword;
            } catch (error) {
                next(error)
            }
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.userId, {
                $set: req.body
            }, { new: true });
            const { password, ...other } = updatedUser._doc;
            res.status(200).send({
                status: "Successfull",
                message: "User Updated Successfully",
                data: other,
            });
        } catch (error) {
            next(error)
        }
    } else {
        return res.status(401).send({
            status: "Failed",
            message: "Failed to Update this user",
        })
    }
}