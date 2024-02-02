// -------------------IMPORTING PACKAGES---------------------------//
import express from 'express'
import dotenv from 'dotenv';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { connect } from './Config/connectDB.js';
import authRoutes from './Routes/authRoutes.js';
import { customError } from './Utils/customErrorMiddleware.js';

// ======================CONFIGURING ENV AND EXPRESS==================//
dotenv.config();
const app = express();
const PORT = process.env.PORT;

// ========================MIDDLEWARES===========================//
app.use(cookieParser())
app.use(express.json())
app.use(morgan('common'))
app.use(cors())

// =======================ROUTES=======================//

app.use('/api/auth', authRoutes)

//=======================ERROR MIDDLEWARE=======================//

app.use(customError)

// =======================LISTENING TO THE SERVER=======================//
app.listen(PORT, () => {
    console.log("listening to port", PORT);
    connect()
})