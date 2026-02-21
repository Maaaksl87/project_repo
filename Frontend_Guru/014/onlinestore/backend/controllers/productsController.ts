import { Product } from "../models/Product.js";
import type { Request, Response, NextFunction } from "express";

export async function listProducts(_req: Request, res: Response, next: NextFunction) {
  try {
    const items = await Product.find({}).lean();
    res.json(items);
  } catch (error) {
    return next(error);
  }
}

export async function getProduct(req: Request, res: Response, next: NextFunction) {
  try {
    const item = await Product.findById(req.params.id).lean();
    if (!item) return res.status(404).json({ message: "Not found" });
    res.json(item);
  } catch (error) {
    return next(error);
  }
}

export async function createProduct(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, image, price, description } = req.body;
    const created = await Product.create({ name, image, price, description });
    res.status(201).json(created);
  } catch (error) {
    return next(error);
  }
}

export async function updateProduct(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, image, price, description } = req.body;
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      { name, image, price, description },
      { new: true, runValidators: true },
    ).lean();
    if (!updated) return res.status(404).json({ message: "Not found" });
    res.json(updated);
  } catch (error) {
    return next(error);
  }
}

export async function deleteProduct(req: Request, res: Response, next: NextFunction) {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id).lean();
    if (!deleted) return res.status(404).json({ message: "Not found" });
    res.status(204).end();
  } catch (error) {
    return next(error);
  }
}
