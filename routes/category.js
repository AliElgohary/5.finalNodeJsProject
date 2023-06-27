import { Router } from "express";
import {getCategories, createCategory, getCategoriesById, updateCategory} from '../controllers/categoryController.js';
import { ValidateCategory } from "../services/validateCategory.js";


export const router = Router();
router.get('/', ValidateCategory , getCategories);
router.post('/', ValidateCategory , createCategory);
router.get('/:id', getCategoriesById);
router.put('/:id',updateCategory);