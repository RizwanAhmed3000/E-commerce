import mongoose from 'mongoose';
const { Schema } = mongoose;

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    categories: {
        type: Array,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    color: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },

}, { timestamps: true })

export const Product = mongoose.model('Product', ProductSchema)