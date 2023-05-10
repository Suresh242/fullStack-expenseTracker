import express from "express"
import { addTrans, deleteMultipleTrans, getTrans, updateTransaction} from "../model/transaction/transModel.js"
const transRoute = express.Router()

transRoute.post("/", async (req,res,next)=>{
    try {

        const {authorization}= req.headers
        const data = await addTrans({...req.body, userId: authorization})
        if(data?._id){
            return res.json({
                status:"success",
                message:"transaction successfully added"
            })
        }else{
            res.json({
                status:"error",
                message:"unable to add, please retry"
            })

        }    
    } catch (error) {
        next(error)
        
    }

})
transRoute.get("/",async (req,res,next)=>{
   try {
    const {authorization} = req.headers
    const data = await getTrans({userId:authorization})
    return res.json({
     data,
    })
    
   } catch (error) {
    next(error)
    
   }

})
transRoute.delete("/",async(req,res,next)=>{
    try {
        console.log(req.body)
        const {authorization} = req.headers
    const data = await deleteMultipleTrans(req.body,authorization)
   console.log(data)
   if(data.deletedCount){
    res.json({
        status:"success",
        message:data.deletedCount + "items deleted"
    })
   }else{
    res.json({
        status:"error",
        message:"nop action done"
    })
   }
    } catch (error) {
        next(error)
        
    }
})
transRoute.patch("/",async(req,res,next)=>{
    try {
        const {obj} = req.body
    const data = await updateTransaction(obj?._id, obj)
    if(data?._id){
        return res.json({
            status:"success",
            message:'transaction has been uodatad'
        })
    }else{
        res.json({
            status:"error",
            message:"unable to update transaction"
        })
    }
    } catch (error) {
        next(error)
        
    }
    

   
    
    
    
})
export default transRoute;

