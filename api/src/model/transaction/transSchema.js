import mongoose from 'mongoose'
const transSchema = new mongoose.Schema({
   name:{
    type:String,

   },
   type:{
    type:String,

   },
   amount:{
    type:Number,
    min:1,
   },
   userId:{
    type:mongoose.Types.ObjectId,
   }
   
}, {
    timestamps:true
})
export default mongoose.model("transaction",transSchema)