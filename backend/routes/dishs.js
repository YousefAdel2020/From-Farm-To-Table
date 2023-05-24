const express=require("express");
const dishRouter=express.Router();


const {getAllDishes,getDish,createDish,updateDish,deleteDish} =require("../controllers/dish");

dishRouter.route("/").get(getAllDishes).post(createDish);

dishRouter.route("/:id").get(getDish).put(updateDish).delete(deleteDish);




module.exports=dishRouter;