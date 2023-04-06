import express from "express";
import path from "path";
import { RestaurantModel } from "../../database/allModels";
const multer = require("multer");

const Router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,"uploads/");
  //   if (file.fieldname === "images") {
  //     cb(null, './uploads/images/')
  // }
  // else {
  //     cb(null, './uploads/menu/');
  // }
  },
  filename: function (req, file, cb) {  
      cb(null, file.fieldname+Date.now()+path.extname(file.originalname))
   
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
Router.post("/add", upload.single('images'), async (req, res) => {
  try {
  //   const files =req.files
const files= req.files
  //  return res.json({content :req.files.file});
  if(req.files){
    files.forEach(pic => {
      data.append('images', {
        name: pic.fileName,
        file: pic.image,
        type: pic.type,
    });
    });
    // console.log(`files ${req.files}...`);
    // console.log(files);
    // console.log("file uploades");
    // return res.json({data:req.files})
  }
    // console.log(req.files.length);
    const { name,address,city,mapLocation,cuisine,restaurantTiming,contactNumber,website,popularDishes,avrageCost,menuImages,menu,} = req.body;
    const newRestaurant = await RestaurantModel.create({name: name,address: address,city: city,mapLocation: mapLocation,cuisine: cuisine,restaurantTiming: restaurantTiming,contactNumber: contactNumber,website: website,popularDishes: popularDishes,avrageCost: avrageCost,menuImages: menuImages,images:req.file.path,menu:req.files});

    return res.json({ retaurant: newRestaurant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// to get all restaurant

Router.get("/:city", async (req, res) => {
  try {
    const { city } = req.params;

    const restaurants = await RestaurantModel.find({ city });

    if (restaurants.length === 0) {
      return res.json({ error: "Restaurant not found in this city" });
    }
    return res.status(200).json({ status: "success", restaurants });
  } catch (error) {
    return res.status(500).json({ status: "faild", error: error.message });
  }
});

// get restaurant by id

Router.get("/specific/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    // console.log(_id);
    const restaurants = await RestaurantModel.findById(_id);

    if (!restaurants) {
      return res.json({ error: "restaurant not found" });
    }
    return res.status(200).json({
      status: "success",
      restaurants,
    });
  } catch (error) {
    return res.status(500).json({ status: "faild", error: error.message });
  }
});

//get restaurnat by search

Router.get("/search/:searchString", async (req, res) => {
  try {
    const { searchString } = req.params;
    const restaurants = await RestaurantModel.find({
      name: new RegExp(searchString, "i"),
    });

    if (restaurants.length === 0) {
      return res.json({ error: "restaurnat not found" });
    }
    return res.status(200).json({ restaurants });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
export default Router;
