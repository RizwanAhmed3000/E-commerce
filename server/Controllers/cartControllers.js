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

//GET USER
// /user/find/:userId

export const getCart = async (req, res, next) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        !cart && res.status(404).send({
            status: "Failed",
            message: "Cart not found",
        });
        res.status(200).send({
            status: "Successfull",
            message: "Cart Found",
            data: cart
        });
    } catch (error) {
        next(error)
    }
}

//GET USER
// /user/find
export const getAllCarts = async (req, res, next) => {
    try {
        const carts = await Cart.find();
        res.status(200).send({
            status: "Successfull",
            message: "Carts Found",
            data: carts
        });
    } catch (error) {
        next(error)
    }
}