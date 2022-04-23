import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateProductWithExistCategory {
  async handle(req: Request, res: Response) {
    const { name, bar_code, price, idCategory: id_category} = req.body;
    
    const product = await prismaClient.productCategory.create({
      data: {
        product: {
          create: {
            name,
            bar_code,
            price,
          },
        },
        category: {
          connect: {
            id: id_category,
          }
        }
      }
    })
    
    return res.status(201).json(product);
  };
};