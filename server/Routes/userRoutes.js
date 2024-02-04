import express from 'express';
import { deleteUser, getAllUser, getUser, updateUser } from '../Controllers/userControllers.js';
import { verifyAdimn, verifyUser } from '../Utils/verifyToken.js';

const userRoutes = express.Router();

//======================= UPDATE USER ======================//
userRoutes.put('/:userId', verifyUser, updateUser)

//======================= DELETE USER ======================//
userRoutes.delete('/:userId', verifyUser, deleteUser)

//======================= GET A USER ======================//
userRoutes.get('/find/:userId', verifyAdimn, getUser)

//======================= GET ALL USERS ======================//
userRoutes.get('/find', verifyAdimn, getAllUser)

//======================= LOGIN USER ======================//
// userRoutes.post('/login', login)

export default userRoutes