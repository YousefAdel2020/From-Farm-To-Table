const express=require("express");
const dishRouter=express.Router();


const {getAllDishes,createDish, getTopRated} =require("../controllers/dish");

dishRouter.route("/").get(getAllDishes).post(createDish);
dishRouter.get("/topRated", getTopRated);




module.exports=dishRouter;