const express=require("express");
const userRouter=express.Router();



const auth=require("../middleware/authenticationMiddleware");
const {verifyAdmin}=require("../middleware/verifyAdminMiddleware");


const {} =require("../controllers/user");
const { getAllUsers, removeUser,updateUser} = require("../controllers/user");




userRouter.route("/").get(auth,verifyAdmin,getAllUsers);


userRouter.delete("/:id",removeUser)
userRouter.post("/:id" ,updateUser)


module.exports=userRouter;