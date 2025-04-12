import AppError from "@/utils/appError";
import { ErrorRequestHandler } from "express";
import { Error as MongoError } from "mongoose";

export const validationErrorHandler: ErrorRequestHandler = (
  err: MongoError.ValidationError,
  req,
  res,
  next
) => {
  if (err instanceof MongoError.ValidationError) {
    res.status(400).json({
      message: err.message,
      type: err.name,
      cause: err.cause
    });
    return;
  }
  next(err);
};

export const appErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next
) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      message: err.message,
      stack: err.stack
    });
    return;
  }

  console.error(`UNHANDLED ERROR: ${err.message}`);
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
}
