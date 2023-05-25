const express=require("express");
const userRouter=express.Router();
const { edit, remove, upload} = require("../controllers/user");



userRouter.delete("/:id", remove)
userRouter.post("/:id",upload.single("img") ,edit)

module.exports=userRouter;

