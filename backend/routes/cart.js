const express=require("express");
const cartRouter=express.Router();

const auth=require("../middleware/authenticationMiddleware");



const {getCart,addToCart,removeFromCart,clearCart,updateQuantity} =require("../controllers/cart");

cartRouter.route("/").get(auth,getCart).post(auth,addToCart).put(auth,updateQuantity).delete(auth,removeFromCart);

cartRouter.route("/clear").delete(auth,clearCart);






module.exports=cartRouter;