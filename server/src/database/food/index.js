import { boolean, string } from "joi";
import mongoose from "mongoose";
const FoodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isVeg: {
        type: Boolean,
        required: true
    },
    isContainEgg: {
        type: Boolean,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    images: {
        type: String,
       required:true
    },
    price: {
        type: Number,
        required: true
    },
    addOns: [{
        type: mongoose.Types.ObjectId,
        ref: "Foods"
    }],
    restaurant: {
        type: mongoose.Types.ObjectId,
        ref: "restaurant",
        required: true
    },
}, {
    timestamps: true
})
export const FoodModel = mongoose.model("Foods", FoodSchema); 