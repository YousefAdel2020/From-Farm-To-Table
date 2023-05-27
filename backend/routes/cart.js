const express=require("express");
const cartRouter=express.Router();

const auth=require("../middleware/authenticationMiddleware");



const {getCart,addToCart,removeFromCart,clearCart,updateQuantity} =require("../controllers/cart");

cartRouter.route("/").get(auth,getCart).post(auth,addToCart);
cartRouter.route("/clear").delete(auth,clearCart);
cartRouter.route("/:dishId").put(auth,updateQuantity).delete(auth,removeFromCart);








module.exports=cartRouter;