const express=require("express");
const dishRouter=express.Router();

const auth=require("../middleware/authenticationMiddleware");


const {getAllDishes,getDish,createDish,updateDish,deleteDish} =require("../controllers/dish");

dishRouter.route("/").get(getAllDishes).post(auth,createDish);

dishRouter.route("/:dishId").get(getDish).put(auth,updateDish).delete(auth,deleteDish);




module.exports=dishRouter;