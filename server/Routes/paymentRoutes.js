import express from 'express';
import { verifyAdmin, verifyToken, verifyUser } from '../Utils/verifyToken.js';
import { paymentHandler } from '../Controllers/paymentController.js';

const paymentRoutes = express.Router();

//======================= CREATE ORDERS ======================//
paymentRoutes.post('/payment', verifyToken, paymentHandler)


export default paymentRoutes