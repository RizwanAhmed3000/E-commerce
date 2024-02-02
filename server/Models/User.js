import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 8,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true })

export const User = mongoose.model('User', UserSchema)