// to .env variables while server is running importing dotenv
require('dotenv').config()

// importing express.js
const express=require('express')

// import cors
const cors=require('cors')



//import mongoconnection
require ('./dbConnection/Connection')

//create express server
const pfServer=express() 

//implementing cors to server
pfServer.use(cors())

//parsing json data using server app
pfServer.use(express.json())

//import router
const router=require('./Routes/routes')

//import middleware
const middleware=require('./Middleware/userMiddleware') 
pfServer.use(middleware)

//use router to server
pfServer.use(router)

//port number configaration 
const PORT=4000 || process.env.PORT

//to run server
pfServer.listen(PORT,()=>{
    console.log(`server is stared at ${PORT}`)
})

//resolve request to loccalhost:4000
pfServer.get('/',(req,res)=>{
    res.send("<h1> Server is Successfully Running!!!</h1>")
})

