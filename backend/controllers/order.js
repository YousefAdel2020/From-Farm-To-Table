const Order = require("../models/orders");
const { StatusCodes } = require("http-status-codes");
const {
  BadRequestError,
  UnauthenticatedError,
  NotFoundError,
  ForbidenError,
} = require("../errors");

const getMyOrders = async (req, res) => {
    const {userId}=req.user
    const orders = await Order.findOne({customer:userId});

  res.status(StatusCodes.OK).json({ orders });
};



const createOrder = async (req, res) => {

  const order = await Order.create(req.body);

  res.status(StatusCodes.CREATED).json({ dish });
};

// const getDish = async (req, res) => {
//   const { dishId } = req.params;

//   const dish = await Dish.findOne({
//     _id: dishId,
//   });

//   if (!dish) {
//     throw new NotFoundError(`there is no Dish with this Id : ${dishId}`);
//   }

//   res.status(StatusCodes.OK).json({ dish });
// };

// const updateDish = async (req, res) => {

//   const dishId = req.params.dishId;
//   const userId = req.user.userId;


//   const dish = await Dish.findOneAndUpdate(
//     { _id: dishId, chef: userId },
//     req.body,
//     { new: true, runValidators: true }
//   );

//   if (!dish) {
//     throw new NotFoundError(`No dish with Id ${dishId}`);
//   }

//   res.status(StatusCodes.OK).json({ dish });
// };

// const deleteDish = async (req, res) => {

//   const {dishId}=req.params
  
//   const dish = await Dish.findOneAndDelete({
//     _id: dishId,
//     chef: req.user.userId,
//   });

//   if (!dish) {
//     throw new NotFoundError(`No dish with Id ${dishId}`);
//   }

//   res.status(StatusCodes.OK).send();
// };

module.exports = {
    getMyOrders
};

