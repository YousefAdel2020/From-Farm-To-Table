const express=require("express");
const userRouter=express.Router();
const { edit, remove } = require("../controllers/user");



userRouter.delete("/:id", remove)
userRouter.post("/:id", edit)

module.exports=userRouter;

