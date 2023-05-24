const express=require("express");
const authRouter=express.Router();

const {login,register,upload} =require("../controllers/auth");

authRouter.post("/register",upload.single("img"),register);

authRouter.post("/login",login);


module.exports=authRouter;

