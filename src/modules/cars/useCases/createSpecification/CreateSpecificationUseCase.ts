import { inject, injectable } from "tsyringe";

import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationsRepository: ISpecificationRepository
  ) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadExist = this.specificationsRepository.findByName(
      name
    );

    if (specificationAlreadExist) {
      throw new Error("Specification already exist");
    }

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
