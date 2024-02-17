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
    images: {
        type: [String],
        required: true,
    },
    categories: {
        type: [String],
        required: true,
    },
    size: {
        type: [Number],
        required: true,
    },
    color: {
        type: [String],
    },
    price: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Boolean,
        default: true,
    },
    tags:{
        type: Array,
    }

}, { timestamps: true })

export const Product = mongoose.model('Product', ProductSchema)