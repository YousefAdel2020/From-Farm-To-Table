
const register =async(req,res)=>{
    res.send("registration");
}

const login=async(req,res)=>{
    res.send("login");
}



module.exports={
    register,
    login
}