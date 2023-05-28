const express=require("express");
const userRouter=express.Router();



const auth=require("../middleware/authenticationMiddleware");
const {verifyAdmin}=require("../middleware/verifyAdminMiddleware");
//  const {verifyChef}=require("../middleware/verifyChefMiddleware");

const {getAllUsers} =require("../controllers/user");

userRouter.route("/").get(auth,verifyAdmin,getAllUsers);
// userRouter.route("/:id").put(auth,verifyChef, updateUser).delete(auth,verifyChef, removeUser);

module.exports=userRouter;