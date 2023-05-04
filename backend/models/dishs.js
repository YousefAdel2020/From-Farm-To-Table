const mongoose = require("mongoose");


const dishSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: [true,"please provide the description"]
    },
    ingredients:{
        type:[[String]],
        required: [true,"please provide the ingredients"]
    },
    category:{
        type: String,
        enum: ['Dessert',"Savory"],
        required: true
    },
    img:{
        type: String,
        required: true
    },
    price: {
      type: Number,
      required: true
    },
    chef: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  });



module.exports=mongoose.model('Dish', dishSchema);