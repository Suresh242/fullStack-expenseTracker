import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import morgan from 'morgan'

import mongoConn from './src/dbConnection/dbConfig.js'
import userRouter from './src/routers/userRouter.js'
import transRoute from './src/routers/transRouter.js'


const app = express()
const PORT = 8000

// middlewares
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
mongoConn()
app.use((error,req,res,next)=>{
    res.json({
        status:"error",
        error:error.message
    })
})

app.use("/api/v1/users", userRouter)
app.use("/api/v1/transaction", transRoute)

// when router is not found
app.use("*",(req,res,next)=>{
  res.json({
    message:"system is healthy",
  })
    })


// global error handler


// connecting mongodb


// adding router path


app.listen(PORT,(error)=>{
    error
    ?console.log(error)
    :console.log(`your server is running at http://localhost:${PORT}`)
})