import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateProductCategoryController{
  async handle(req: Request, res: Response) {
    const {idProduct: id_product, idCategory: id_category} = req.body
    const productCategory = await prismaClient.productCategory.create({
      data: {
        id_product,
        id_category,
      },
    });

    return res.status(201).json(productCategory);
  }
}