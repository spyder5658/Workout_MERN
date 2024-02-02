const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const creatToken =(_id)=>{
   return jwt.sign({_id},process.env.SECRET_KEY,{expiresIn:'3d'})

}



//login user
const loginUser = async(req,res)=>{
    // res.json({mssg:'login user'})
    const {email,password} = req.body 
    try{
        const user = await User.login(email,password)

        //create token
        const token = creatToken(user._id)

        res.status(200).json({email,token})

    }catch(error){
        res.status(400).json({error:error.message})

    }


}


//signin user
const signupUser = async(req,res)=>{
    // res.json({mssg:'signup user'})
    const {email,password} = req.body 
    try{
        const user = await User.signup(email,password)

        //create token
        const token = creatToken(user._id)

        res.status(200).json({email,token})

    }catch(error){
        res.status(400).json({error:error.message})

    }

}

module.exports = {
    loginUser,
    signupUser
}