import { Router } from "express";
import { CreateProductController } from "./controllers/CreateProductsController";

const router = Router();

const createProduct = new CreateProductController();

router.post('/product', createProduct.handle)

export { router };