const express=require("express");
const orderRouter=express.Router();

const auth=require("../middleware/authenticationMiddleware");



const {getMyOrders} =require("../controllers/order");

orderRouter.route("/").get(auth,getMyOrders);

// orderRouter.route("/:dishId").post(auth,addToCart).delete(auth,removeFromCart);






module.exports=orderRouter;