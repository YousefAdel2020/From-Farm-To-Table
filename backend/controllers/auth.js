const User = require("../models/users");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");






const register = async (req, res) => {
  
  if(req.file)
  {
    req.body.img=req.file.filename
  }

  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  res
    .status(StatusCodes.CREATED)
    .json({ user: { firstName: user.firstName }, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("please provide email and password");
  }

  const user =await User.findOne({ email });

  if (!user) {
    throw new UnauthenticatedError("invalid credential");
  }

  const isCorrectPassword=await user.comparePassword(password);
  if(!isCorrectPassword)
  {
    throw new UnauthenticatedError("invalid credentail");
  }
  
  
  const token = user.createJWT();

  res
    .status(StatusCodes.OK)
    .json({ user: { firstName: user.firstName }, token });
};

module.exports = {
  register,
  login,
};
