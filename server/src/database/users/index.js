import mongoose from "mongoose";
import Jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
const UserSchema = new mongoose.Schema(
  {
    fullName: { 
      type: String, 
      required: true 
    },
    email: { type: String, required: true },
    password: { type: String},
    address: [{ details: { type: String }, for: { type: String } }],
    phoneNumber: { type: Number },
  },
  { timestamps: true }
);
UserSchema.methods.genrateJwtToken = function () {
  return Jwt.sign({ user: this._id.toString() }, "zomatoApp");
};

UserSchema.statics.findByEmailAndPhone = async ({ email }) => {
  const checkUserByEmail = await UserModel.findOne({ email });

  if (checkUserByEmail ) {
    throw new Error("User Already Exists !!");
  }

  return false;
};
UserSchema.statics.findByEmailAndPassword = async ({email, password}) => {
  const user = await UserModel.findOne({ email });
 
  if (!user) throw new Error("User dose not exist");

  //compare password
  const checkPasswordMatch = await bcrypt.compare(password, user.password);
  if (!checkPasswordMatch) {
    throw new Error("invalid credentials");
  }
  return user;
};
UserSchema.pre("save", function (next) {
  const user = this;
  // password is modify or not
  if (!user.isModified("password")) return next();

  //genrate bcrypt salt

  bcrypt.genSalt(8, (error, salt) => {
    if (error) return next(error);

    bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) return next(error);

      user.password = hash;
      return next();
    });
  });
});

export const UserModel = mongoose.model("users", UserSchema);
