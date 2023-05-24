const User = require("../models/users");
const { StatusCodes } = require("http-status-codes");
const {
  BadRequestError,
  UnauthenticatedError,
  NotFoundError,
  ForbidenError,
} = require("../errors");

const getAllUsers = async (req, res) => {
  const users = await User.find({}).select('-password');

  res.status(StatusCodes.OK).json({ users });
};


module.exports={getAllUsers}
