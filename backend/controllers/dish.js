const Dish = require("../models/dishs");
const { StatusCodes } = require("http-status-codes");
const {
  BadRequestError,
  UnauthenticatedError,
  NotFoundError,
  ForbidenError,
} = require("../errors");

const getAllDishes = async (req, res) => {
  const dishes = await Dish.find({}).populate(
    "chef",
    "firstName lastName email img role gender summary address phoneNumber rating"
  );

  res.status(StatusCodes.OK).json({ dishes });
};

const createDish = async (req, res) => {
  if (req.User.role != "chef") {
    throw new ForbidenError("You can create dish");
  }
  if (req.file) {
    req.body.img = req.file.filename;
  }
  req.body.chef = req.user.userId;
  const dish = await Dish.create(req.body);

  res.status(StatusCodes.CREATED).json({ dish });
};

const getDish = async (req, res) => {
  const { dishId } = req.params;

  const dish = await Dish.findOne({
    _id: dishId,
  });

  if (!dish) {
    throw new NotFoundError(`there is no Dish with this Id : ${dishId}`);
  }

  res.status(StatusCodes.OK).json({ dish });
};

const updateDish = async (req, res) => {
  res.status(StatusCodes.OK).json("update dish");
};

const deleteDish = async (req, res) => {
  res.status(StatusCodes.OK).json("delete dish");
};

module.exports = {
  getAllDishes,
  createDish,
  getDish,
  updateDish,
  deleteDish,
};
