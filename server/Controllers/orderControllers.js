import {Order} from '../Models/Order.js'

//====================  NEW ORDER =========================//
export const createOrder = async (req, res, next) => {
    const newOrder = new Order(req.body);
    try {
        const saveOrder = await newOrder.save();
        res.status(200).send({
            status: "Successfull",
            message: "Order Added Successfully",
            data: saveOrder,
        });
    } catch (error) {
        next(error)
    }

}

//UPDATE USER
// /user/:userId
export const updateOrder = async (req, res, next) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.cartId, {
            $set: req.body
        }, { new: true });
        res.status(200).send({
            status: "Successfull",
            message: "Order Updated Successfully",
            data: updatedOrder,
        });
    } catch (error) {
        next(error)
    }
}

//DELETE USER
// /user/:userId

export const deleteOrder = async (req, res, next) => {
    try {
        await Order.findByIdAndDelete(req.params.cartId);
        res.status(200).send({
            status: "Successfull",
            message: "Order deleted Successfully",
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