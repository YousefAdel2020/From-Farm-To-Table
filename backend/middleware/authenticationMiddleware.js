const jwt =require('jsonwebtoken');
const {JWT_secret}=require("../config/config")

const {UnauthenticatedError}=require('../errors');

const auth=async(req,res,next)=>{
    //check header
    const authHeader=req.headers.authorization;
    if(!authHeader||!authHeader.startsWith('Bearer'))
    {
        throw new UnauthenticatedError('Authentication Invalid');
    }
    
    const token=authHeader.split(' ')[1];

    try {
        const payload=jwt.verify(token,JWT_secret);
        req.user={userId:payload.userId,firstName:payload.firstName,role:payload.role};
        next();
    } catch (error) {
        throw new UnauthenticatedError('Authentication Invalid');
    }
}

module.exports=auth;