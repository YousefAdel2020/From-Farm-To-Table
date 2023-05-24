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
    rating: {
      type: Number,
      minlength: 0,
      maxlength: 5,
    },
    chef: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },{timestamps:true});



module.exports=mongoose.model('Dish', dishSchema);