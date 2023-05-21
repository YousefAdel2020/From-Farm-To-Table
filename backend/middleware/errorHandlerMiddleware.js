const {CustomAPIError}=require('../errors');

const errorHandler=(err,req,res,next)=>{


    let customError = {
        //set default
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || `something went wrong try again later`,
      };

    // if(err instanceof CustomAPIError)
    // {
    //     console.log('custom error middlware2');
    //     return res.status(err.statusCode).json({msg:err.message});
       
    // }


      //if you register without write email or password
  if(err.name==='ValidationError')
  {
    
    customError.msg=Object.values(err.errors).map((item)=>item.message).join(', ');
    
    customError.statusCode=StatusCodes.BAD_REQUEST;
    //console.log(customError);
    
  }

    console.log('in error middlware3');
    return res.json({msg:err.message});
}

module.exports=errorHandler;