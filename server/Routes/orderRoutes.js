import express from 'express';
import { verifyAdmin, verifyToken, verifyUser } from '../Utils/verifyToken.js';
import { createOrder, updateOrder } from '../Controllers/orderControllers.js';

const orderRoutes = express.Router();

//======================= CREATE PRODUCT ======================//
orderRoutes.post('/', verifyToken, createOrder)

//======================= UPDATE PRODUCT ======================//
orderRoutes.put('/:cartId', verifyAdmin, updateOrder)

//======================= DELETE PRODUCT ======================//
orderRoutes.delete('/:cartId', verifyAdmin, deleteOrder)

//======================= GET A PRODUCT ======================//
// orderRoutes.get('/find/:userId', verifyUser, getCart)

//======================= GET ALL PRODUCTS ======================//
// orderRoutes.get('/find', verifyAdmin, getAllCarts)


export default orderRoutes