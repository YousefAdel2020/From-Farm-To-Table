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
    .json({ user, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password)

  if (!email || !password) {
    throw new BadRequestError("please provide email and password");
  }

  const user =await User.findOne({ email });
  console.log(user)
  
  if (!user) {
    throw new UnauthenticatedError("invalid credential");
  }

  const isCorrectPassword=await user.comparePassword(password);
  console.log(isCorrectPassword);
  if(!isCorrectPassword)
  {
    throw new UnauthenticatedError("invalid credentail");
  }
  
  
  const token = user.createJWT();

  res
    .status(StatusCodes.OK)
    .json({user, token });
};

module.exports = {
  register,
  login,
};
