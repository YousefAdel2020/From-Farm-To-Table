const {ForbidenError}=require("../errors");

const verifyAdmin=async(req,res,next)=>{
    if (req.user.role != "admin") {
        throw new ForbidenError('You are not authorized to perform this operation!');
    }
    next();
}


module.exports={verifyAdmin}