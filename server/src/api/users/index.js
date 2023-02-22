import express from "express";
import { UserModel } from "../../database/allModels";
import passport, { session } from "passport";

const Router = express.Router();

// get authorized user data

Router.get("/", passport.authenticate("jwt",{session:false}), async (req, res) => {
  try {
    const { fullName, phoneNumber, email, address } = req.user;
    return res.json({ user: { fullName, phoneNumber, email, address } });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// get user data by id
Router.get("/:id", async (req, res) => {
  try {
    const { _id } = req.params;
    const getUser = await UserModel.findById(_id);
    const { fullName } = getUser;
    if (!getUser) {
     return res.status(404).json({ error: "User not found" });
    }
   return res.status(200).json({ user: { fullName } });
  } catch (error) {
   return res.status(500).json({ error: error.message });
  }
});

// update users data
Router.put("/update/:id",passport.authenticate("jwt",{session:false}), async(req,res)=>{
   try {
      const {_id} = req.body;
      const {usersData} = req.body;
      const updateUSersData = await UserModel.findById(_id,{
         $set :usersData,
      },{
         new:true
      });

     return res.status(200).json({user:  updateUSersData})
   } catch (error) {
     return res.status(500).json({ error: error.message }); 
   }
})
export default Router;
