import { Router } from "express";
import multer from "multer";

// import { v4 as uuidV4 } from "uuid";

// import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
// import { PostgresCategoriesRepository } from "../modules/cars/repositories/PostgresCategoryRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});
// const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  // const all = categoriesRepository.list();

  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categoriesRoutes };
