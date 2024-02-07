import { Order } from '../Models/Order.js'

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

export const getOrders = async (req, res, next) => {
    try {
        const orders = await Order.find({ userId: req.params.userId });
        !orders && res.status(404).send({
            status: "Failed",
            message: "Orders not found",
        });
        res.status(200).send({
            status: "Successfull",
            message: "Orders Found",
            data: orders
        });
    } catch (error) {
        next(error)
    }
}

//GET USER
// /user/find
export const getAllOrders = async (req, res, next) => {
    try {
        const orders = await Order.find();
        res.status(200).send({
            status: "Successfull",
            message: "Orders Found",
            data: orders
        });
    } catch (error) {
        next(error)
    }
}