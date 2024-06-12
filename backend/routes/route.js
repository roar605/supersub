import express from 'express';
import auth from '../middlewares/Auth.js';

const router = express.Router();

//import controller
import UserController from "../controllers/User.js"
import getItems from "../controllers/Items.js";
// import {} from "../controllers/Cart"


//create mapping
router.post("/users",UserController.signUp)
router.post("/users/login",UserController.logIn)
router.post("/users/logout",auth,UserController.logOut)
router.post("/users/logoutall",auth,UserController.logOutAll)                             
router.get("/items",getItems);


//export 
export default router