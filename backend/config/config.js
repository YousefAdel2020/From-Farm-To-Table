require('dotenv').config();

const MONGO_URI=process.env.MONGO_URI;
const PORT=process.env.PORT;
const JWT_secret=process.env.JWT_SECRET;
const JWT_expiration=process.env.JWT_EXPIRATION;

module.exports={MONGO_URI,PORT,JWT_secret,JWT_expiration}