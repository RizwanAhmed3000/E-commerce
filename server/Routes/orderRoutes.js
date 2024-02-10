import express from 'express';
import { verifyAdmin, verifyToken, verifyUser } from '../Utils/verifyToken.js';
import { createOrder, deleteOrder, getAllOrders, getIncome, getOrders, updateOrder } from '../Controllers/orderControllers.js';

const orderRoutes = express.Router();

//======================= CREATE ORDERS ======================//
orderRoutes.post('/', verifyToken, createOrder)

//======================= UPDATE ORDERS ======================//
orderRoutes.put('/:cartId', verifyAdmin, updateOrder)

//======================= DELETE ORDERS ======================//
orderRoutes.delete('/:cartId', verifyAdmin, deleteOrder)

//======================= GET A ORDERS ======================//
orderRoutes.get('/find/:userId', verifyUser, getOrders)

//======================= GET ALL ORDERS ======================//
orderRoutes.get('/find', verifyAdmin, getAllOrders)

//======================= GET MONTHLY INCOME ======================//
orderRoutes.get('/income', verifyAdmin, getIncome)

export default orderRoutes