import express from "express";
import { FoodModel, UserModel } from "../../database/allModels";

const Router = express.Router();

//get food by id

Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const foods = await FoodModel.findById(_id);
    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ status: "faild", error: error.message });
  }
});

// get foods from restaurant

Router.get("/r/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const foods = await FoodModel.find({
      restaurant: _id,
    });
    return res.json({ foods: foods.name });
  } catch (error) {
    return res.status(500).json({ status: "failed", error: error.message });
  }
});

// get food by different category  (veg /nonveg)

Router.get("/c/:category", async (req, res) => {
    try {
        const { category } = req.params;
  const foods = await FoodModel.find({  category: {$eq: category }  });
  if(foods.length === 0){
   return res.json({message:"this category is not available"})
  }
  return res.json({ foods: foods });
    } catch (error) {
        return res.status(500).json({status:"faild", error:error.message});
    }
  
});

export default Router;