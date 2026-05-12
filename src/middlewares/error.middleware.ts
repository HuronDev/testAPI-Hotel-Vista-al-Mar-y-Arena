import { Request, Response, NextFunction } from "express";
import { logger } from "../utils/logger";
import { Sentry } from "../config/sentry";
import { sendSlackAlert } from "../utils/slack";
import { HttpError } from "../errors/app.error";

export function errorMiddleware(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const statusCode =
    err instanceof HttpError ? err.status : 500;

  // LOG
  logger.error(
    {
      err,
      path: req.path,
      method: req.method,
    },
    "Unhandled error"
  );

  // SENTRY
  Sentry.captureException(err);

  // SLACK SOLO 500+
  if (statusCode >= 500) {
    sendSlackAlert({
      message: err.message,
      path: req.path,
      method: req.method,
      statusCode,
    });
  }

  return res.status(statusCode).json({
    message: err.message || "Internal server error",
  });
}