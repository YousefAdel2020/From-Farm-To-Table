const express=require("express");
const cartRouter=express.Router();

const auth=require("../middleware/authenticationMiddleware");



const {getCart,addToCart,removeFromCart,clearCart} =require("../controllers/cart");

cartRouter.route("/").get(auth,getCart).delete(auth,clearCart);

cartRouter.route("/:dishId").post(auth,addToCart).delete(auth,removeFromCart);

// cartRouter.route("/:dishId").get(getDish).put(auth,verifyChef,upload.single("img"),updateDish).delete(auth,verifyChef,deleteDish);




module.exports=cartRouter;