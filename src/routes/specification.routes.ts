import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { listSpecificationController } from "../modules/cars/useCases/listSpecification";

const specificationRoutes = Router();

const createSpecificationsController = new CreateSpecificationController();
specificationRoutes.post("/", createSpecificationsController.handle);

specificationRoutes.get("/", (request, response) => {
  return listSpecificationController.handle(request, response);
});

export { specificationRoutes };
