import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required: true
        },
        city:{
            type:String,
            required: true
        },
        address:{
            type:String,
            required: true
        },
        mapLocation:{
            type:String,
            required:true
        },
        cuisine:[String],
        restaurantTiming:Number,
        contactNumber: Number,
        website:String,
        popularDishes:[String],
        avrageCost:Number,
        amenties:String,
        menuImages:{
            type: mongoose.Types.ObjectId,
            ref:"images"
        },
        menu:{
            type:mongoose.Types.ObjectId,
            ref:"menus"
        },
        reviews:[
            {
                type:mongoose.Types.ObjectId,
                ref:"reviews"
            }
        ],
        photos:{
            type:mongoose.Types.ObjectId,
            ref:"images"
        }
    },
    {
        timestamps: true
    })

export const restaurantModel = mongoose.model("restaurants", restaurantSchema);