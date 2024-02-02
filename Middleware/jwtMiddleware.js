const jwt =require ('jsonwebtoken')

const jwtMiddleware =(req, res, next)=>{
    console.log("Inside jwt Middleware");
    console.log(req.headers)
    try{
        const token = req.headers.authorization.split(" ")[1]
        console.log(token)
        const result =jwt.verify(token,"superSecretKey")
        console.log(result)
        req.payload=result.userId
        next()
    }
    catch{
        res.status(401).json("Authentication Failed Login First")
    }
}
module.exports = jwtMiddleware