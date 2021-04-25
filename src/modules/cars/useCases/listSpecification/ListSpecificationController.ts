import { Request, Response } from "express";

import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

class ListSpecificationController {
	constructor(private listSpecificationUseCase: ListSpecificationUseCase) {}

	handle(_request: Request, response: Response): Response {
		const specificationList = this.listSpecificationUseCase.execute();

		return response.status(200).json(specificationList);
	}
}

export { ListSpecificationController };
