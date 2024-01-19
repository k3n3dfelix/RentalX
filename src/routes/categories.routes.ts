import { Router } from "express";
// import { v4 as uuidV4 } from "uuid";

// import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
// import { PostgresCategoriesRepository } from "../modules/cars/repositories/PostgresCategoryRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

// const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  // const all = categoriesRepository.list();

  return listCategoriesController.handle(request, response);
});

export { categoriesRoutes };
