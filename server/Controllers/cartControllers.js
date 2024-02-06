import { Cart } from "../Models/Cart.js";
import { Product } from "../Models/Product.js";

//====================  NEW PRODUCT =========================//
export const createCart = async (req, res, next) => {
    const newCart = new Cart(req.body);
    try {
        const saveCart = await newCart.save();
        res.status(200).send({
            status: "Successfull",
            message: "Cart Added Successfully",
            data: saveCart,
        });
    } catch (error) {
        next(error)
    }

}

//UPDATE USER
// /user/:userId
export const updateCart = async (req, res, next) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.cartId, {
            $set: req.body
        }, { new: true });
        res.status(200).send({
            status: "Successfull",
            message: "Cart Updated Successfully",
            data: updatedCart,
        });
    } catch (error) {
        next(error)
    }
}

//DELETE USER
// /user/:userId

export const deleteCart = async (req, res, next) => {
    try {
        await Cart.findByIdAndDelete(req.params.cartId);
        res.status(200).send({
            status: "Successfull",
            message: "Cart deleted Successfully",
        });
    } catch (error) {
        next(error)
    }
}

// //GET USER
// // /user/find/:userId

// export const getProduct = async (req, res, next) => {
//     try {
//         const product = await Product.findById(req.params.productId);
//         !product && res.status(404).send({
//             status: "Failed",
//             message: "Product not found",
//         });
//         res.status(200).send({
//             status: "Successfull",
//             message: "Product Found",
//             data: product
//         });
//     } catch (error) {
//         next(error)
//     }
// }

//GET USER
// /user/find
// export const getAllProducts = async (req, res, next) => {
//     const queryNew = req.query.new;
//     const queryCategory = req.query.category;
//     try {

//         let products;
//         if (queryNew) {
//             products = await Product.find().sort({ createdAt: -1 }).limit(5)
//         } else if (queryCategory) {
//             products = await Product.find({ categories: { $in: [queryCategory] } })
//         } else {
//             products = await Product.find();
//         }

//         res.status(200).send({
//             status: "Successfull",
//             message: "Products Found",
//             data: products
//         });
//     } catch (error) {
//         next(error)
//     }
// }