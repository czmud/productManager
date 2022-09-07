import { Product } from "../models/products.models";
import { Request, Response } from "express";

export const findAllProducts = (req: Request, res: Response) => {
    Product.find()
        .then(allProducts => res.json({ products: allProducts }))
        .catch(err => res.json({message: "Something went wrong", error: err }));
}

export const findOneProduct = (req: Request, res: Response) => {
    Product.findOne({ _id: req.params.id})
        .then(oneProduct => res.json({ product: oneProduct }))
        .catch(err => res.json({message: "Something went wrong", error: err }));
}

export const createNewProduct = (req: Request, res: Response) => {
    console.log(req.body);
    Product.create(req.body)
        .then(newlyCreatedProduct => res.json({ product: newlyCreatedProduct }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

export const updateProduct = (req: Request, res: Response) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
        .then( updatedProduct => res.json({ product: updatedProduct }))
        .catch( err => res.json({ message: "Something went wrong", error: err }));

};

export const deleteProduct = (req: Request, res: Response) => {
    Product.deleteOne({_id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "something went wrong", error: err}));

};