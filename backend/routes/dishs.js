const express=require("express");
const dishRouter=express.Router();


const {getAllDishes,createDish} =require("../controllers/dish");

dishRouter.route("/").get(getAllDishes).post(createDish);




module.exports=dishRouter;