const Dish = require("../models/dishs");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const getAllDishes = async (req, res) => {
  const dishes = await Dish.find({});

  res.status(StatusCodes.OK).json({ dishes });
};
const createDish = async (req, res) => {
  const dish = await Dish.create(req.body);

  res.status(StatusCodes.CREATED).json({ dish });
};


const getDish=async (req, res) => {


  res.status(StatusCodes.OK).json("get dish");
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
