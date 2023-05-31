const express=require("express");
const singleUserRouter =express.Router();
const auth=require("../middleware/authenticationMiddleware");
const {verifyChef}=require("../middleware/verifyChefMiddleware");
const {removeUser, updateUser} =require("../controllers/user");


singleUserRouter.route("/:id").put(auth,verifyChef, updateUser).delete(auth,verifyChef, removeUser);

module.exports= singleUserRouter;
