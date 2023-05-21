const { CustomAPIError } = require("../errors");
const {StatusCodes} = require('http-status-codes');



const errorHandler = (err, req, res, next) => {
  let customError = {
    //*set default
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || `something went wrong try again later`,
  };



  //& if you register without write email or password
  if (err.name === "ValidationError") {
    customError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(", ");

    customError.statusCode = StatusCodes.BAD_REQUEST;
    //console.log(customError);
  }


    //& handle cast error
    if(err.name==='CastError')
    {
      customError.msg=`No item with Id : ${err.value}`
      customError.statusCode=StatusCodes.NOT_FOUND
    }
    
    //& if you register with the same email
    if(err.code&&err.code===11000)
    {
      customError.statusCode=StatusCodes.BAD_REQUEST;
      //object.keys(); return array of object keys 
      customError.msg=`Dublicate valued entered for ${Object.keys(err.keyValue)} field, please choose another value`
  
    }


    return res.status(customError.statusCode).json({msg: customError.msg });
};

module.exports = errorHandler;
