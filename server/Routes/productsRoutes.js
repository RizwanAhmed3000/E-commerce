import express from 'express';
import { verifyAdmin, verifyUser } from '../Utils/verifyToken.js';
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from '../Controllers/productControllers.js';

const productRoutes = express.Router();

//======================= CREATE PRODUCT ======================//
productRoutes.post('/', verifyAdmin, createProduct)

//======================= UPDATE PRODUCT ======================//
productRoutes.put('/:productId', verifyAdmin, updateProduct)

//======================= DELETE PRODUCT ======================//
productRoutes.delete('/:productId', verifyAdmin, deleteProduct)

//======================= GET A PRODUCT ======================//
productRoutes.get('/find/:productId', getProduct)

//======================= GET ALL PRODUCTS ======================//
productRoutes.get('/find', getAllProducts)


export default productRoutes