import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
	name: string;
	description: string;
}

class CreateSpecificationUseCase {
	constructor(private specificationsRepository: ISpecificationRepository) {}

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
