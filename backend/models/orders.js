const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    chef: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    dishes: [{
        dish: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Dish'
        },
        quantity: {
          type: Number,
          required: true,
          default: 1
        }
    }],
    totalPrice: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      enum: ['pending', 'in progress', 'shipped','delivered'],
      default: 'pending'
    },
  },{timestamps:true});


module.exports= mongoose.model('Order', orderSchema);