import mongoose from 'mongoose'

const mongoConn = ()=>{

    try {
        if(!process.env.MONGO_CLIENT){
            console.log("no URL has benn sent")
        }
        const connStr = mongoose.connect(process.env.MONGO_CLIENT)
        connStr
        ?console.log("db connected")
        :console.log(error)
    } catch (error) {
        console.log(error.message)
    }
  
}
export default mongoConn