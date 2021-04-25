import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = SpecificationRepository.getInstance();

const createSpecificationsUseCase = new CreateSpecificationUseCase(
  specificationsRepository
);

const createSpecificationsController = new CreateSpecificationController(
  createSpecificationsUseCase
);

export { createSpecificationsController };
