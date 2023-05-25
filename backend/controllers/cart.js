const User = require("../models/users");
const Dish = require("../models/dishs");
const { StatusCodes } = require("http-status-codes");
const {
  NotFoundError,
} = require("../errors");

const getCart = async (req, res) => {
  const user = await User.findById(req.user.userId);
  const cart = user.cart;
  res.status(StatusCodes.OK).json({ cart });
};

const addToCart = async (req, res) => {
  const { dishId } = req.params;
  const dish = await Dish.findById(dishId);
  if (!dish) {
    throw new NotFoundError(`there is no Dish with this Id : ${dishId}`);
  }
  const user = await User.findById(req.user.userId);
  if (!user) {
    throw new NotFoundError(
      `there is no user with this Id : ${req.user.userId}`
    );
  }
  console.log(user.firstName);
  user.cart.push(dish);
  await user.save();

  res.status(StatusCodes.OK).json("the item is added successfully");
};



const removeFromCart = async (req, res) => {
  const { dishId } = req.params;

  const dish = await Dish.findById(dishId);
  if (!dish) {
    throw new NotFoundError(`there is no Dish with this Id : ${dishId}`);
  }
  const user = await User.findById(req.user.userId);
  if (!user) {
    throw new NotFoundError(
      `there is no user with this Id : ${req.user.userId}`
    );
  }
  user.cart=user.cart.filter(obj => obj._id != dishId);

  await user.save();

  res.status(StatusCodes.OK).json("the item is removed successfully");
};


const clearCart = async (req, res) => {
    const user = await User.findById(req.user.userId);
    if (!user) {
      throw new NotFoundError(
        `there is no user with this Id : ${req.user.userId}`
      );
    }
    user.cart=[];
  
    await user.save();
  
    res.status(StatusCodes.OK).json("the cart is cleared successfully");
  };



module.exports = {
  getCart,
  addToCart,
  removeFromCart,
  clearCart

};
