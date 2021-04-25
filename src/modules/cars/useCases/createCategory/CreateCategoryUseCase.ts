import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadExist = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadExist) {
      throw new Error("Category already exist");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
