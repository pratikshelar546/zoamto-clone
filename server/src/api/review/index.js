import express from "express";

import passport from "passport";
import { ReviewModel } from "../../database/reviews";
const Router = express.Router();

Router.get("/:resId", async (req, res) => {
  try {
    const { resId } = req.params;
    const reviews = await ReviewModel.find({ restaurants: resId }).sort({
      createdAt: -1,
    });

    return res.json({ Review: reviews });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// add new review

Router.post(
  "/new",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { _id } = req.user;
      const { reviewData } = req.body;
      const addReview = await ReviewModel.create({ ...reviewData, user: _id });
      return res.status(202).json({ review: addReview });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

// delete the review

Router.delete(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { user } = req;
      const { _id } = req.params;
      const data = await ReviewModel.findOneAndDelete({
        id: _id,
        user: user._id,
      });
      if (!data) return res.json({ message: "review not found for this user" });
      return res.json({ message: "successfully review deleted", data });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

export default Router;
