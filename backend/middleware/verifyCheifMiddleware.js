const {ForbidenError}=require("../errors");

const verifyCheif=async(req,res,next)=>{
    if (req.user.role != "cheif") {
        throw new ForbidenError('You are not authorized to perform this operation!');
    }
    next();
}


module.exports={verifyCheif}