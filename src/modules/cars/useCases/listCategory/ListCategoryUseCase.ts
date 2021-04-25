import { Category } from "../../../../database/entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute(): Promise<Category[]> {
    const categoriesList = await this.categoriesRepository.list();
    return categoriesList;
  }
}

export { ListCategoryUseCase };
