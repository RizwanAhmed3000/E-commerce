import CryptoJS from "crypto-js"
import { Product } from "../Models/Product.js";

//====================  NEW PRODUCT =========================//
export const createProduct = async (req, res, next) => {
    const newProduct = new Product(req.body);
    try {
        const saveProduct = await newProduct.save();
        res.status(200).send({
            status: "Successfull",
            message: "Product Added Successfully",
            data: saveProduct,
        });
    } catch (error) {
        next(error)
    }

}

// //UPDATE USER
// // /user/:userId
// export const updateUser = async (req, res, next) => {
//     // console.log(req.user)
//     if (req.user._id === req.params.userId) {
//         if (req.body.password) {
//             try {
//                 const encryptedPassword = CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTOJS_KEY).toString();
//                 req.body.password = encryptedPassword;
//             } catch (error) {
//                 next(error)
//             }
//         }
//         try {
//             const updatedUser = await User.findByIdAndUpdate(req.params.userId, {
//                 $set: req.body
//             }, { new: true });
//             const { password, ...other } = updatedUser._doc;
//             res.status(200).send({
//                 status: "Successfull",
//                 message: "User Updated Successfully",
//                 data: other,
//             });
//         } catch (error) {
//             next(error)
//         }
//     } else {
//         return res.status(401).send({
//             status: "Failed",
//             message: "Failed to Update this user",
//         })
//     }
// }

// //DELETE USER
// // /user/:userId

// export const deleteUser = async (req, res, next) => {
//     try {
//         await User.findByIdAndDelete(req.params.userId);
//         res.status(200).send({
//             status: "Successfull",
//             message: "User deleted Successfully",
//         });
//     } catch (error) {
//         next(error)
//     }
// }

// //GET USER
// // /user/find/:userId

// export const getUser = async (req, res, next) => {
//     try {
//         const user = await User.findById(req.params.userId);
//         !user && res.status(404).send({
//             status: "Failed",
//             message: "User not found",
//         });
//         const { password, ...other } = user._doc;
//         res.status(200).send({
//             status: "Successfull",
//             message: "User Found",
//             data: other
//         });
//     } catch (error) {
//         next(error)
//     }
// }

// //GET USER
// // /user/find
// export const getAllUser = async (req, res, next) => {
//     const query = req.query.new;
//     try {
//         const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find();
//         let fillteredUsers = [];
//         users.forEach((user) => {
//             const { password, ...others } = user._doc;
//             fillteredUsers.push(others)
//         })
//         res.status(200).send({
//             status: "Successfull",
//             message: "Users Found",
//             data: fillteredUsers
//         });
//     } catch (error) {
//         next(error)
//     }
// }

// //GET USERS STATS (NO. OF USERS PER MONTHS)
// // //user/stats
// export const userStats = async (req, res, next) => {
//     const date = new Date();
//     const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))

//     try {
//         const data = await User.aggregate([
//             {
//                 $match: { createdAt: { $gte: lastYear } },
//             },
//             {
//                 $project: { month: { $month: "$createdAt" } }
//             },
//             {
//                 $group: {
//                     _id: "$month",
//                     total: { $sum: 1 }
//                 }
//             }
//         ])
//         res.status(200).send({
//             status: "Successfull",
//             message: "Users Stats",
//             data: data
//         });
//     } catch (error) {
//         next(error)
//     }
// }