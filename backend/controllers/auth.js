const User = require("../models/users");
const multer=require("multer");
const path = require("path");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Specify the directory where you want to store the images
    cb(null, 'uploads/images');
  },
  filename: function (req, file, cb) {
    // Generate a unique filename for the uploaded image
    const uniqueSuffix = Date.now()  + path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  }
});

const upload = multer({ storage: storage });


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
  upload,
};
