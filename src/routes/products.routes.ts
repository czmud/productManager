import * as ProductsController from "../controllers/products.controllers";
import express from "express";

export const AllProductRoutes = (app: express.Application) => {
    app.get("/api/products/", ProductsController.findAllProducts);
    app.get("/api/products/:id", ProductsController.findOneProduct);
    app.post("/api/products/new", ProductsController.createNewProduct);
    app.put("/api/products/update/:id", ProductsController.updateProduct);
    app.delete("/api/products/delete/:id", ProductsController.deleteProduct);
};
