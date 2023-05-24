const express=require("express");
const authRouter=express.Router();

const {login,register} =require("../controllers/auth");
const {upload}=require("../utils/upload");

authRouter.post("/register",upload.single("img"),register);

authRouter.post("/login",login);


module.exports=authRouter;

