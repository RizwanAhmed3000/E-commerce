import express from 'express';
import { verifyAdmin, verifyUser } from '../Utils/verifyToken.js';
import { createProduct } from '../Controllers/productControllers.js';

const productRoutes = express.Router();

//======================= CREATE PRODUCT ======================//
productRoutes.post('/', verifyAdmin, createProduct)

//======================= UPDATE USER ======================//
// productRoutes.put('/:userId', verifyUser, updateUser)

//======================= DELETE USER ======================//
// productRoutes.delete('/:userId', verifyUser, deleteUser)

//======================= GET A USER ======================//
// productRoutes.get('/find/:userId', verifyAdmin, getUser)

//======================= GET ALL USERS ======================//
// productRoutes.get('/find', verifyAdmin, getAllUser)

//======================= USERS STATS ======================//
// productRoutes.get('/stats', verifyAdmin, userStats)

//======================= LOGIN USER ======================//
// userRoutes.post('/login', login)

export default productRoutes