import { Specification } from "../../../../database/entities/Specification";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

class ListSpecificationUseCase {
  constructor(private categoriesRepository: ISpecificationRepository) {}

  execute(): Specification[] {
    const specificationList = this.categoriesRepository.list();

    return specificationList;
  }
}

export { ListSpecificationUseCase };
