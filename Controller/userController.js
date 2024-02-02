
// import usrer model
const jwt=require ('jsonwebtoken')
const users=require ('../modals/userSchema')
const project=require('../modals/projectSchema')



exports.register= async (req,res)=>{

    console.log("Inside Register function")
    const {username,password,email}=req.body
    console.log(`Unsername:${username},Password:${password},Email:${email}`)
    try{
        const existingUser=await users.findOne({email})
    console.log(existingUser)
    if(existingUser ){
           res.status(401).json("Existing User !! please try again")
    }
    else{
        // console.log("In");
        const newUser=new users({username,password,email,image:"",github:"",linkdin:""})
        await newUser.save()
        res.status(200).json(newUser)
    }
    
    }
    catch(err){ 
           res.status(401).json(" somthing went is wrong," + err)
 }
 
 }
 exports.login=async (req,res)=>{
    console.log("inside login function");
    const{email,password}=req.body
    try{
        const existingUser =await users.findOne({email,password})
        if(existingUser){
            const token=jwt.sign({userId:existingUser._id},"superSecretKey")
            res.status(200).json({
                existingUser,
                role:'user',
                token
            })
        }
        else{
            res.status(406).json("Invalid Email/Password")
        }
    }
    catch(err){
        res.status(500).json("Somthing went Wrong" + err)
    }
}


exports.userProjects=async(req,res)=>{
    console.log("inside user projects")
    console.log(req.payload);
    try{
        const data=await addprojects.find({userId:req.payload})
        console.log(data)
        res.status(200).json(data)
    }
    catch(err){
        res.status(401).json(err)
    }

}