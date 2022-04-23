import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class FindCategoryController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const category = await prismaClient.category.findFirst({
      where: {
        id: Number(id),
      },
      include: {
        ProductCategory: {
          include: {
            product: true,
          }
        }
      }
    });

    return res.status(200).json(category);
  };
};