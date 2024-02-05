import express from 'express';
import { deleteUser, getAllUser, getUser, updateUser, userStats } from '../Controllers/userControllers.js';
import { verifyAdmin, verifyUser } from '../Utils/verifyToken.js';

const userRoutes = express.Router();

//======================= UPDATE USER ======================//
userRoutes.put('/:userId', verifyUser, updateUser)

//======================= DELETE USER ======================//
userRoutes.delete('/:userId', verifyUser, deleteUser)

//======================= GET A USER ======================//
userRoutes.get('/find/:userId', verifyAdmin, getUser)

//======================= GET ALL USERS ======================//
userRoutes.get('/find', verifyAdmin, getAllUser)

//======================= USERS STATS ======================//
userRoutes.get('/stats', verifyAdmin, userStats)

//======================= LOGIN USER ======================//
// userRoutes.post('/login', login)

export default userRoutes