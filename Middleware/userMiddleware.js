const sampleMiddleware=(req,res,next)=>{
     console.log("middleware is on act!!")
     next()
}
module.exports=sampleMiddleware