import express from "express";
import { MenuModel } from "../../database/menu";

const Router = express.Router();
// add new menu
Router.post("/add", async (req, res) => {
  try {
    // const {_id}
    const menu = req.body;
    console.log(menu);
    const newMenu = await MenuModel.create({ ...menu });
    return res.status(200).json({ status: "succes", newMenu });
  } catch (error) {
    return res.status(400).json({ status: "Faild", error: error.message });
  }
});
// update menu
Router.put("/update/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const menu = req.body;
    console.log(menu);
    const newMenu = await MenuModel.findByIdAndUpdate(
      { _id: _id },
      { ...menu }
    );
    return res.status(200).json({ status: "succes", newMenu });
  } catch (error) {
    return res.status(400).json({ status: "Faild", error: error.message });
  }
});
// get menu of perticular restaurant by its id
Router.get("/lists/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const menus = await MenuModel.findOne({ _id }).populate([{
       path: "menu",
        populate: "items" },
    ]);
    // menus.populated("items");
    if (!menus) {
      return res
        .status(404)
        .json({ error: "menu for this restaurant not available" });
    }
    return res.json({ menu: menus });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

// get images of menus
Router.get("/image/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const imagesOfMenu = await MenuModel.findById(_id);
    if (!imagesOfMenu) {
      return res.status(404).json({ error: "images of menu card not found" });
    }
    return res.json({ iamges: imagesOfMenu });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
