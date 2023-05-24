const Dish = require("../models/dishs");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError,NotFoundError } = require("../errors");

const getAllDishes = async (req, res) => {
  const dishes = await Dish.find({});

  res.status(StatusCodes.OK).json({ dishes });
};

const createDish = async (req, res) => {
  const dish = await Dish.create(req.body);
  res.status(StatusCodes.CREATED).json({ dish });
};


const getDish=async (req, res) => {
  const {dishId}=req.params

  const dish = await Dish.findOne({
    _id:dishId
  });

  if(!dish)
  {
    throw new NotFoundError(`there is no Dish with this Id : ${dishId}`);
  }

  res.status(StatusCodes.OK).json({dish});
};

const updateDish=async (req, res) => {


  res.status(StatusCodes.OK).json("update dish");
};

const deleteDish=async (req, res) => {


  res.status(StatusCodes.OK).json("delete dish");
};

module.exports = {
  getAllDishes,
  createDish,
  getDish,
  updateDish,
  deleteDish
};
