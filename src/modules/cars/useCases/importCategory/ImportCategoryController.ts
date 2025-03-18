import { Response, Request } from "express";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
  constructor(private importCategoryUSeCase: ImportCategoryUseCase) { }

  handle(request: Request, response: Response): Response {
    const { file } = request;

    this.importCategoryUSeCase.execute(file);

    return response.send();
  }
}

export { ImportCategoryController };
