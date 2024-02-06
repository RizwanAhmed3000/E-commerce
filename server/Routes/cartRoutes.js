import express from 'express';
import { verifyAdmin, verifyToken, verifyUser } from '../Utils/verifyToken.js';
import { createCart, deleteCart, updateCart } from '../Controllers/cartControllers.js';

const cartRoutes = express.Router();

//======================= CREATE PRODUCT ======================//
cartRoutes.post('/', verifyToken, createCart)

//======================= UPDATE PRODUCT ======================//
cartRoutes.put('/:cartId', verifyUser, updateCart)

//======================= DELETE PRODUCT ======================//
cartRoutes.delete('/:cartId', verifyUser, deleteCart)

//======================= GET A PRODUCT ======================//
// cartRoutes.get('/find/:productId', getProduct)

//======================= GET ALL PRODUCTS ======================//
// cartRoutes.get('/find', getAllProducts)


export default cartRoutes