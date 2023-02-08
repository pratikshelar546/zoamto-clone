import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
    {
        food:{type:mongoose.Types.ObjectId, ref:"foods"},
        restraurant:{type:mongoose.Types.ObjectId , ref:"restraurants"},
        user:{type:mongoose.Types.ObjectId, ref:"users"},
        rating:{type:Number, required:true},
        reviewText:{type:String, required:true},
        isRestraurantReview:Boolean,
        isFoodReview:Boolean,
        photos:{
            type: mongoose.Types.ObjectId,
            ref:"images"
        }
    }
)

export const reviewModel = mongoose.model("reviews" , reviewSchema)