import express from 'express';
import { login, register } from '../Controllers/authControllers.js';

const authRoutes = express.Router();

//======================= REGISTER USER ======================//
authRoutes.post('/register', register)

//======================= LOGIN USER ======================//
authRoutes.post('/login', login)

export default authRoutes