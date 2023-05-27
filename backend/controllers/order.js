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
const {STRIPE_SECRET_KEY}=require("../config/config")

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

const getMyOrders = async (req, res) => {
    const {userId}=req.user
    const orders = await Order.findOne({customer:userId});

  res.status(StatusCodes.OK).json({ orders });
};

// const calculateTotalPrice = (cart) => {
//   let totalPrice = 0;
  
//   cart.forEach((item) => {
//     totalPrice += item.dish.price * item.quantity;
//   });

//   return totalPrice;
// };


const createCheckoutSession= async (req, res) => {
  const { userId } = req.user;
  const user = await User.findById(userId);
  if (!user) {
    throw new NotFoundError(`there is no user with this Id : ${userId}`);
  }
  var total_price=0;
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: await Promise.all(user.cart.map(async (item) => {
        const dish = await Dish.findById(item.dishId);
        if (!dish) {
          throw new NotFoundError(`There is no dish with this ID: ${item.dishId}`);
        }
        console.log(dish);
        total_price+=dish.price*item.quantity;
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: dish.name,
            },
            unit_amount: dish.price * 100, // Convert price to cents
          },
          quantity: item.quantity,
        };
      })),
      success_url: `http://localhost:5500/sucess.html`,
      cancel_url: `http://localhost:5500/cancel.html`,
    })

    // const order = new Order({
    //   customer: userId,
    //   dishes: user.cart.map((item) => ({
    //     dish: item.dishId,
    //     quantity: item.quantity,
    //   })),
    //   totalPrice: total_price,
    //   status: 'in_progress',
    // });
    // await order.save();
  
    // // Clear the user's cart
    // user.cart = [];
    // await user.save();

    res.json({ url: session.url })
 
}


const success= async (req, res) => {
  const { userId } = req.user;
  const user = await User.findById(userId).populate('cart.dish');
  if (!user) {
    throw new NotFoundError(`There is no user with this ID: ${userId}`);
  }

  // Create an order document
  const order = new Order({
    customer: userId,
    dishes: user.cart.map((item) => ({
      dish: item.dishId,
      quantity: item.quantity,
    })),
    totalPrice: total_price,
    status: 'pending',
  });
  await order.save();

  // Clear the user's cart
  user.cart = [];
  await user.save();

  res.json({ success: true });
}


const createOrder = async (req, res) => {

  const order = await Order.create(req.body);

  res.status(StatusCodes.CREATED).json({ dish });
};



module.exports = {
    getMyOrders,
    createCheckoutSession,
    success
};

