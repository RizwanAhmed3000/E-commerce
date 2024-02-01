import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connect = async () => {
    // ========== METHOD 1 ===================//
    try {
        const con = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${con.connection.host}`);
    } catch (error) {
        console.log(error);
    }

    // ========== METHOD 2 ===================//
    // mongoose
    //     .connect(process.env.MONGO_URI)
    //     .then(() => {
    //         console.log(`connected to DB`);
    //     })
    //     .catch((err) => {
    //         throw err;
    //     });
}