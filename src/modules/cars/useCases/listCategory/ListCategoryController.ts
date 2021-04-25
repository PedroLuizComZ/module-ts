import { Request, Response } from "express";

import { ListCategoryUseCase } from "./ListCategoryUseCase";

class ListCategoryController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) {}

  async handle(_request: Request, response: Response): Promise<Response> {
    const categoriesList = this.listCategoryUseCase.execute();

    return response.status(200).json(categoriesList);
  }
}

export { ListCategoryController };
