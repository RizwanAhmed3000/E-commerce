import express from 'express';
import { verifyAdmin, verifyToken, verifyUser } from '../Utils/verifyToken.js';
import { createOrder, deleteOrder, getAllOrders, getIncome, getOrders, updateOrder } from '../Controllers/orderControllers.js';

const orderRoutes = express.Router();

//======================= CREATE PRODUCT ======================//
orderRoutes.post('/', verifyToken, createOrder)

//======================= UPDATE PRODUCT ======================//
orderRoutes.put('/:cartId', verifyAdmin, updateOrder)

//======================= DELETE PRODUCT ======================//
orderRoutes.delete('/:cartId', verifyAdmin, deleteOrder)

//======================= GET A PRODUCT ======================//
orderRoutes.get('/find/:userId', verifyUser, getOrders)

//======================= GET ALL PRODUCTS ======================//
orderRoutes.get('/find', verifyAdmin, getAllOrders)

//======================= GET MONTHLY INCOME ======================//
orderRoutes.get('/income', verifyAdmin, getIncome)

export default orderRoutes