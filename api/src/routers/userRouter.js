import express from 'express'


import { insertUser, signInUser } from '../model/User/userModel.js'
import { comparePassword, hasssPassword } from '../utils/bcrypt.js'
const userRouter = express.Router()

userRouter.post("/",async(req,res,next)=>{
    try {
        const hash = hasssPassword(req.body.password)
        if(hash){
            req.body.password = hash
            const data = await insertUser(req.body)
        console.log(data);
        if(data?._id){
        return res.json({
            status:"success",
            message:"succesfully registered user",
        })}

        }
        res.json({
            status:"error",
            message:"unable to add user"
        })
        console.log(req.body)
    } catch (error) {
        const message = error.message

        if(message.includes("E11000 duplicate key error collection:")){
            return res.json({
                status:"error",
                message:"Email has already register!! please login"
            })
        }
        console.log(error)
        
    }
   

})
userRouter.post("/login",async (req,res,next)=>{
    try {
        const {email}= req.body

        const data = await signInUser(email)
             if(data?._id){
                const isPsswordCheck = comparePassword( req.body.password,data.password)
                console.log(isPsswordCheck);
                
                if(isPsswordCheck){
                   return res.json({
                        status:"success",
                        message:"login successfully",
                        fname:data.fname,
                        lname:data.lname,
                        email:data.email,
                        _id:data._id,
                    })
                }else{
                    return res.json({
                        status:"error",
                        message:"login error ",
                    })
                }
                    
                }

               
             
                
       
        res.json({
            status:"error",
            message:"error!invalid login details"
        })
    }catch (error) {
        next(error);
        
    }
   
})

export default userRouter