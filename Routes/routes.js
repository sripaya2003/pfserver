//imporrt express
const express=require('express')

//import controller function to resolve requests
const userController=require('../Controller/userController')
const projectController=require('../Controller/projectController')

//multer import
const multerConfig=require('../Middleware/projectMiddleware')
const jwtMiddleware=require('../Middleware/jwtMiddleware')

//create object for router class in a express
const router=new express.Router()

//defines various paths 
router.post('/user/Register',userController.register)
router.post('/user/login',userController.login)
router.post('/project/addproject',jwtMiddleware,multerConfig.single('project_image'),projectController.addProjects)
router.get('/user/projectlist',jwtMiddleware,userController.userProjects)

module.exports=router