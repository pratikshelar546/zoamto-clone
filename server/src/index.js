import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./database/connection";
import Auth from "./api/auth";
import passport from "passport";
import privateRouteConfig from "./config/route.config";
import googleConfig from "./config/google.config";
import session from "express-session";
import User from "./api/users"

import Food from "./api/foods"
import Order from "./api/order"
import Review from "./api/review"
import Restraurant from "./api/restaurant"

dotenv.config();

const zomato = express();
privateRouteConfig(passport);
googleConfig(passport)
zomato.use(express.json());
zomato.use(session({secret :"zomatoApp"}))

zomato.use(passport.initialize());
zomato.use(passport.session())
zomato.get("/", (req, res) => {
  res.json({
    message: "server is running..",
  });
});

// auth/signup

zomato.use("/user",User);
zomato.use("/auth",Auth);
zomato.use("/restaurant",Restraurant);
zomato.use("/food",Food);
zomato.use("/order",Order);
zomato.use("/review",Review);
const PORT = 8081;
zomato.listen(PORT, () => {
  ConnectDB()
      .then(() => {
        console.log("Server is running !!!");
      })
      .catch((error) => {
        console.log("Server is running, but database connection failed...");
        console.log(error);
      });
  });
