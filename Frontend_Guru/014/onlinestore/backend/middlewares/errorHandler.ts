import type { Request, Response, NextFunction } from "express";

export function notFoundHandler(_req: Request, res: Response) {
  res.status(404).json({ message: "Not found" });
}

export function errorHandler(err: Error, _req: Request, res: Response, _next: NextFunction) {
  if (err.name === "CastError") return res.status(400).json({ message: "Invalid id" });
  if (err.name === "ValidationError")
    return res.status(400).json({ message: err.message });
  return res.status(500).json({ message: "Server error" });
}