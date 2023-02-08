import mongoose from "mongoose";
import Jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"
const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: [
      {
        details: {
          type: String,
        },
        for: {
          type: String,
        },
      },
    ],
    phoneNumber: [
      {
        type: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);
UserSchema.method.genrateJwtToken = function () {
    return Jwt.sign({user: this._id.toString()}, "zomatoApp");
};

UserSchema.statics.findByEmailAndPhone = async () => {};
UserSchema.statics.findByEmailAndPassword = async () => {};
export const userModel = mongoose.model("users", UserSchema);
