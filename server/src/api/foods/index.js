import express from "express";
import { FoodModel, UserModel } from "../../database/allModels";

import multer from "multer";
import path from "path";

const Router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images/");
    //   if (file.fieldname === "images") {
    //     cb(null, './uploads/images/')
    // }
    // else {
    //     cb(null, './uploads/menu/');
    // }
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + Date.now() + path.extname(file.originalname));

    // const ext =file.originalname.substring(file.originalname.lastIndexOf("."));
    // cb(null, file.fieldname + '-'+ Date.now() +ext);
  },
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  }
  cb(null, false);
};
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});
// add new food
Router.post("/add/:_id", upload.single("images"), async (req, res) => {
  try {
    const { _id } = req.params;
   
    const  newFoods  = req.body;
   
  
    const foods = await FoodModel.create({ ...newFoods, images:req.file.path, restaurant: _id });
    return res.json({ staus: "success", foods });
  } catch (error) {
    return res.status(500).json({ status: "faild", error: error.message });
  }
});

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
    const foods = await FoodModel.find({ category: { $eq: category } });
    if (foods.length === 0) {
      return res.json({ message: "this category is not available" });
    }
    return res.json({ foods: foods });
  } catch (error) {
    return res.status(500).json({ status: "faild", error: error.message });
  }
});

export default Router;
