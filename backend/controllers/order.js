const Order = require("../models/orders");
const User = require("../models/users");
const Dish = require("../models/dishs");
const { StatusCodes } = require("http-status-codes");
const {
  BadRequestError,
  UnauthenticatedError,
  NotFoundError,
  ForbidenError,
} = require("../errors");
const { STRIPE_SECRET_KEY } = require("../config/config");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const getAllMyOrders = async (req, res) => {
  const { userId } = req.user;
  const orders = await Order.find({ customer: userId });
  console.log(orders);

  res.status(StatusCodes.OK).json({ orders });
};

const getMySingleOrder=async (req, res) => {
  // const { userId } = req.user;
  const {orderId}=req.params;
  const order = await Order.findById(orderId);


  res.status(StatusCodes.OK).json({ order });
};

const createCheckoutSession = async (req, res) => {
  const { userId } = req.user;
  const user = await User.findById(userId);
  if (!user) {
    throw new NotFoundError(`there is no user with this Id : ${userId}`);
  }

  const lineItems = user.cart.map((item) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.dish.name,
        },
        unit_amount: item.dish.price * 100, // Convert price to cents
      },
      quantity: item.quantity,
    };
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: lineItems,
    success_url: `http://localhost:5500/success.html`,
    cancel_url: `http://localhost:5500/cancel.html`,
  });

  res.json({ url: session.url });
};

const createOrder = async (req, res) => {
  const { userId } = req.user;
  const user = await User.findById(userId);
  if (!user) {
    throw new NotFoundError(`there is no user with this Id : ${userId}`);
  }
  let total_price = 0;
  let dishesArray = [];
  const dishes = user.cart.forEach((item) => {
    total_price += item.dish.price * item.quantity;
    let dishItem = { dish: item.dish._id, quantity: item.quantity };
    dishesArray.push(dishItem);
  });
  const order = await Order.create({
    customer: userId,
    dishes: dishesArray,
    totalPrice: total_price,
    status: "in_progress",
  });

  // Clear the user's cart
  user.cart = [];
  await user.save();

  res.status(StatusCodes.CREATED).json({ order });
};

module.exports = {
  getAllMyOrders,
  getMySingleOrder,
  createCheckoutSession,
  createOrder,
};
