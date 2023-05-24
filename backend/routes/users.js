const express=require("express");
const userRouter=express.Router();



const auth=require("../middleware/authenticationMiddleware");
const {verifyAdmin}=require("../middleware/verifyAdminMiddleware");


const {getAllUsers} =require("../controllers/user");

userRouter.route("/").get(auth,verifyAdmin,getAllUsers);


module.exports=userRouter;