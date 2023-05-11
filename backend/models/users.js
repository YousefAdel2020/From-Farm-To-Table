const mongoose = require("mongoose");
const bycrpt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_secret, JWT_expiration } = require("../config/config");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "please provide first name"],
    maxlength: 50,
    minlength: 3,
  },
  lastName: {
    type: String,
    required: [true, "please provide first name"],
    maxlength: 50,
    minlength: 3,
  },
  email: {
    type: String,
    required: [true, "please provide email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "please provide valid email",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "please provide password"],
    minlength: 6,
  },
  role: {
    type: String,
    enum: ["admin", "chef", "customer"],
    required: true,
  },
  img: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
    required: true,
  },
  summary: {
    type: String,
    maxlength: 300,
    minlength: 15,
  },
  address: {
    type: String,
    maxlength: 150,
    required: [true, "please provide address"],
    minlength: 10,
  },
  phoneNumber: {
    type: String,
    minlength: 11,
  },
  rating: {
    type: Number,
    minlength: 0,
    maxlength: 5,
  },
});




//* middleware for hashing the password
userSchema.pre("save", async function () {
  const salt = await bycrpt.genSalt(10);
  this.password= await bycrpt.hash(this.password, salt);
});


//* instance method for creating JWT token
userSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, firstName: this.firstName },
    JWT_secret,
    { expiresIn: JWT_expiration }
  );
};



//* instance method for comparing the hashed password
userSchema.methods.comparePassword=async function(canditatePassword){
  const isMatch=await bycrpt.compare(canditatePassword,this.password);
  return isMatch;
}

module.exports = mongoose.model("User", userSchema);
