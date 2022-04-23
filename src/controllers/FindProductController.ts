import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class FindProductController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const product = await prismaClient.product.findFirst({
      where: {
        id: Number(id),
      },
      include: {
        ProductCategory: {
          include: {
            category: true,
          }
        },
      },
    });

    return res.status(200).json(product);
  };
};