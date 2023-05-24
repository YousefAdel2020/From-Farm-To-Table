const express=require("express");
const dishRouter=express.Router();

const auth=require("../middleware/authenticationMiddleware");
const {verifyCheif}=require("../middleware/verifyCheifMiddleware");
const {upload}=require("../utils/upload")


const {getAllDishes,getDish,createDish,updateDish,deleteDish} =require("../controllers/dish");

dishRouter.route("/").get(getAllDishes).post(auth,verifyCheif,upload.single("img"),createDish);

dishRouter.route("/:dishId").get(getDish).put(auth,verifyCheif,upload.single("img"),updateDish).delete(auth,verifyCheif,deleteDish);




module.exports=dishRouter;