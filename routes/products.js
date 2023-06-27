import { Router } from "express";
import {getProducts ,createProduct, updateProductById, getProductById, deleteProductById } from '../controllers/productsController.js'
import { ValidateProduct } from "../services/validateProducts.js";


export const router = Router();
router.get('/', getProducts)
router.post('/', ValidateProduct, createProduct)
router.get('/:id', getProductById)
router.put('/:id', ValidateProduct, updateProductById)
router.delete('/:id', deleteProductById)

