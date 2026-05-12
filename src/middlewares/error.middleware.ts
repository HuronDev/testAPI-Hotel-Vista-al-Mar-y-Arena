import { Request, Response, NextFunction } from "express";
import { logger } from "../utils/logger";

export function errorMiddleware(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  logger.error(
    {
      err,
      path: req.path,
      method: req.method,
    },
    "Unhandled error"
  );

  res.status(err.status || 500).json({
    message: err.message || "Internal server error",
  });
}