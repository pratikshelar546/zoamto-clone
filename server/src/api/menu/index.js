import express from "express";
import { MenuModel } from "../../database/menu";

const Router = express.Router();

// get menu of perticular restaurant by its id
Router.get("/lists/:_id", async(req,res)=>{
    try {
        const {_id} = req.params;
        const menus =await MenuModel.findById(_id);
        if(!menus){
          return  res.status(404).json({error:"menu for this restaurant not available"})
        }
      return  res.json({menu : menus})
    } catch (error) {
      return  res.status(400).json({ error:error.message })
    }
})

// get images of menus 
Router.get("/image/:_id" , async(req,res)=>{
    try {
        const {_id} = req.params;
        const imagesOfMenu = await MenuModel.findById(_id);
        if(!imagesOfMenu){
        return    res.status(404).json({error:"images of menu card not found"})
        }
      return  res.json({iamges:imagesOfMenu});
    } catch (error) {
       return res.status(500).json({error:error.message})
    }
})

export default Router;