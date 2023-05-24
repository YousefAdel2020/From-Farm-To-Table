const User = require("../models/users");
const multer=require("multer");
const path = require("path");
const { StatusCodes } = require("http-status-codes");

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


const remove = async (req, res) => {
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

  module.exports = {
    edit,
    remove,
    upload
  };
  

  