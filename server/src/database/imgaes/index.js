import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
images:[
    {
        name:{
            type:String,
            required:true
        },
        image:{
            data:Buffer,
            ContentType:String
        }
    }
]
},{
    timestamps:true
});

export const ImageModel = mongoose.model("Images", ImageSchema);
