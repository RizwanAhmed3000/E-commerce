import express from 'express';
import { updateUser } from '../Controllers/userControllers.js';
import { verifyToken, verifyUser } from '../Utils/verifyToken.js';

const userRoutes = express.Router();

//======================= UPDATE USER ======================//
userRoutes.put('/:userId', verifyUser, updateUser)

//======================= LOGIN USER ======================//
// userRoutes.post('/login', login)

export default userRoutes