import { Router } from "express";
import { CreateProductController } from "./controllers/CreateProductsController";
import { CreateCategoryController } from "./controllers/CreateCategoryController";

const router = Router();

const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController()

router.post('/product', createProduct.handle)
router.post('/category', createCategory.handle)


export { router };