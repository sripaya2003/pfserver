const projects=require('../modals/projectSchema')

const addProjects=async(req,res)=>{
    console.log("inside addprojects function!!")
    console.log(req.file.filename)
    const {title,overview,languages,github,demo,userId}=req.body
    console.log(`${title},${overview},${languages},${github},${demo},${userId}`)
    const project_image=req.file.filename
   // res.send("add projects request is hit!!")

   try{
    const existingProject=await projects.findOne({github})
   if(existingProject){
            res.status(406).json("Existing project!!")
   }
   else{
    const newProject=new projects({title,overview,languages,github,demo,project_image,userId})
    await newProject.save()
    res.status(200).json(newProject)
   }
   }
   catch(err){
    res.status(401).json("something wrong :"+err)
   }
   
}

module.exports={
    addProjects
}