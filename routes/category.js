import { Router } from "express";
import {getCategories, createCategory, getCategoriesById, updateCategory} from '../controllers/categoryController.js';
import { ValidateCategory } from "../services/validateCategory.js";
import { verifyToken } from "../middleware/auth.js";


export const router = Router();
router.get('/', verifyToken  , getCategories);
router.post('/', verifyToken ,ValidateCategory , createCategory);
router.get('/:id',verifyToken , getCategoriesById);
router.put('/:id',verifyToken ,updateCategory);