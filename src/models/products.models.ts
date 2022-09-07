import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String
},{ timestamps: true })

export const Product = mongoose.model("Product", ProductSchema);