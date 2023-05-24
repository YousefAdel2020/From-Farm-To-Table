const {ForbidenError}=require("../errors");

const verifyChef=async(req,res,next)=>{
    if (req.user.role != "chef") {
        throw new ForbidenError('You are not authorized to perform this operation!');
    }
    next();
}


module.exports={verifyChef}