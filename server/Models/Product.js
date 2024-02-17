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
        type: Array,
        required: true,
    },
    size: {
        type: Array,
        required: true,
    },
    color: {
        type: Array,
    },
    price: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Boolean,
        default: true,
    }

}, { timestamps: true })

export const Product = mongoose.model('Product', ProductSchema)