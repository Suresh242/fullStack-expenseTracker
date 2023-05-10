import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    fname:{
        type: String,
        required: true

    },
    lname:{
        type:String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        index:1,
    },
    password:{
        type: String,
        required: true,
    },
    
},
{
    timestamp:"true"
})
export default mongoose.model("user",userSchema)