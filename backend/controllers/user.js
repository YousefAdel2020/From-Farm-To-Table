const User = require("../models/users");
const { StatusCodes } = require("http-status-codes");
const { StatusCodes } = require("http-status-codes");
const {
  BadRequestError,
  UnauthenticatedError,
  NotFoundError,
  ForbidenError,
} = require("../errors")



const removeUser = async (req, res) => {
    const { id } = req.params;
    try {
      await  User.findByIdAndDelete(id) 
      res
      .status(StatusCodes.OK)
      .json({message: "Deleted Successfully"});
    }
    catch(err){
      console.log(err);
      res.status(404).json({ message: "User not found" });
    }

  };

const updateUser  = async (req, res) => {

    const { id } = req.params;
    const user = await User.findById(id);

    if(req.file)
    {
      req.body.img=req.file.filename
    }

    let fname = req.body.firstName;
    let lname = req.body.lastName;
    let email = req.body.email;
    let password = req.body.password;
    let role = req.body.role;
    let img = req.body.img;
    let gender = req.body.gender;
    let summary = req.body.summary;
    let address = req.body.address;
    let phoneNumber = req.body.phoneNumber;
    let rating = req.body.rating;
    

    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      user.firstName = fname ? fname : user.firstName;
      user.lastName = lname ?  lname  : user.lastName;
      user.email = email?  email : user.email;
      user.password = password ? password: user.password;
      user.role = role ? role : user.role;
      user.img = img? img: user.img;
      user.gender = gender? gender: user.gender;
      user.summary = summary ? summary : user.summary;
      user.address = address ? address : user.address ;
      user.phoneNumber = phoneNumber ? phoneNumber : user.phoneNumber;
      user.rating = rating ? rating : user.rating ;
      await user.save();
      res
      .status(StatusCodes.OK)
      .json(user);
    }
  }

 
  


const getAllUsers = async (req, res) => {
  const users = await User.find({}).select('-password');

  res.status(StatusCodes.OK).json({ users });
};


module.exports = {
  updateUser,
  removeUser,
  getAllUsers
};