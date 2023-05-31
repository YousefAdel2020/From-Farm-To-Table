const express=require("express");
const orderRouter=express.Router();

const auth=require("../middleware/authenticationMiddleware");



const {getMySingleOrder,createCheckoutSession,createOrder,getAllMyOrders} =require("../controllers/order");

orderRouter.route("/").get(auth,getAllMyOrders).post(auth,createOrder);


orderRouter.route("/checkout").post(auth,createCheckoutSession);

orderRouter.route("/:orderId").get(auth,getMySingleOrder);



// orderRouter.route("/:dishId").post(auth,addToCart).delete(auth,removeFromCart);






module.exports=orderRouter;