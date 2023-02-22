import express from "express";
import passport from "passport";
import { UserModel } from "../../database/allModels";
import {
  validationSignin,
  validationSignup,
} from "../../validation/auth.validation";
const Router = express.Router();

Router.post("/signup", async (req, res) => {
  try {
    console.log("helo");
    // await validationSignup(req.body.data);
    await UserModel.findByEmailAndPhone(req.body.data);
    const newUser = await UserModel.create(req.body.data);
    const token = newUser.genrateJwtToken();
    return res.status(200).json({ token, status: "success" });
  } catch (error) {
    return res.status(500).json({ status: "failed", error: error.message });
  }
});

Router.post("/signin", async (req, res) => {
  try {
    await validationSignin(req.body.data);
    const user = await UserModel.findByEmailAndPassword(req.body.data);
    const token = await user.genrateJwtToken();
    return res.status(200).json({ user, token, status: "success" });
  } catch (error) {
    return res.status(500).json({ status: "faild", error: error.message });
  }
});

// google auth here

Router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);

Router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    return res.status(200).json({ token: req.session.passport.user.token });
  }
);

export default Router;
