const User = require("../models/users");
const { StatusCodes } = require("http-status-codes");


const remove = async (req, res) => {
  console.log("IN REMOVEEEEEEEEEE")
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

const edit  = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.email = req.body.email;
      user.password = req.body.password;
      user.role = req.body.role;
      user.img = req.body.img;
      user.gender = req.body.gender;
      user.summary = req.body.summary;
      user.address = req.body.address;
      user.phoneNumber = req.body.phoneNumber;
      user.rating = req.body.rating;
      await user.save();
      res
      .status(StatusCodes.OK)
      .json(user);
    }
  }

  module.exports = {
    edit,
    remove
  };
  

  