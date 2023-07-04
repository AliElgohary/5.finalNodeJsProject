import { Router } from "express";
import {getProducts ,createProduct, updateProductById, getProductById, deleteProductById } from '../controllers/productsController.js'
import { ValidateProduct } from "../services/validateProducts.js";
import { verifyToken } from "../middleware/auth.js";


export const router = Router();
router.get('/', verifyToken ,getProducts)
router.post('/', verifyToken ,ValidateProduct, createProduct)
router.get('/:id',verifyToken ,getProductById)
router.put('/:id', verifyToken ,ValidateProduct, updateProductById)
router.delete('/:id', verifyToken ,deleteProductById)

