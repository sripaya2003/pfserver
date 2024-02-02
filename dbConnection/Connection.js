//import mongoose
const mongoose=require('mongoose')

//connection string
const connectString= process.env.DATABASE

//connecting
mongoose.connect(connectString).then(()=>{
    console.log("mongoDB server is connected!!")
}).catch(rej=>{
    console.log("mongoDb connection failled : ",rej)
})