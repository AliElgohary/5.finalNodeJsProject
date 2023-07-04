import { Router } from "express";
import { createUser } from "../controllers/registerController.js";
import { login } from "../controllers/loginController.js";
import { ValidateUser, ValidateLogin } from "../services/validateUsers.js";




export const router = Router();
router.post('/register', ValidateUser ,createUser)
router.post('/login' , ValidateLogin ,login)
