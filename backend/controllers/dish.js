const Dish = require("../models/dishs");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");


const getAllDishes = async (req, res) => {
    const dishes = await Dish.find({});
  
    res.status(StatusCodes.OK).json({ dishes});
  };
  const createDish = async (req, res) => {
    
    const dish = await Dish.create(req.body);
  
    res.status(StatusCodes.CREATED).json({ dish });
  };

const getTopRated = async(req,res)=> {
  try {
    const dishes = await Dish.find({
      rating: {
        $gt: 3
      }
    }).sort({
      rating: -1
    }).limit(3);
   res.status(StatusCodes.OK).json(dishes);
  }catch(err){
    res.status(404).json({"message" : "Couldn't find dishes"})
  }

}
  
  module.exports = {
    getAllDishes,
    createDish,
    getTopRated
  };