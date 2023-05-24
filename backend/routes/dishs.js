const express=require("express");
const dishRouter=express.Router();

const auth=require("../middleware/authenticationMiddleware");
const {verifyChef}=require("../middleware/verifyChefMiddleware");
const {upload}=require("../utils/upload")


const {getAllDishes,getDish,createDish,updateDish,deleteDish} =require("../controllers/dish");

dishRouter.route("/").get(getAllDishes).post(auth,verifyChef,upload.single("img"),createDish);

dishRouter.route("/:dishId").get(getDish).put(auth,verifyChef,upload.single("img"),updateDish).delete(auth,verifyChef,deleteDish);




module.exports=dishRouter;