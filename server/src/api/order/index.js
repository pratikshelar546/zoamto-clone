import passport, { session } from "passport";
import { OrderModel } from "../../database/allModels";
import express from "express";

const Router = express.Router();

// get orders of users
Router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { user } = req;
      const ordersByUser = await OrderModel.findById({ user: user._id });
      if (!ordersByUser) {
        return res.status(404).json({ error: "No order for this user found" });
      }
      return res.status(200).json({ orders: ordersByUser });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

// add new order (.put)

Router.put("/new", passport.authenticate("jwt", { session: false }), async (req, res) => {
  try {
    const { user } = req;
    const { orderDetails } = req.body;
    const addNewOrder = await OrderModel.findOneAndUpdate(
      {
        user: user._id,
      },
      {
        $push: {
          orderDetails: orderDetails,
        },
      },
      {
        new: true,
      }
    );
    return res.status(200).json({ order: addNewOrder });
  } catch (error) {
   return res.status(500).json({ error: error.message });
  }
});
export default Router;
