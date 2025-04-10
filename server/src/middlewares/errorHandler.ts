// backend/src/middlewares/errorHandler.ts

import { NextFunction, Request, Response } from "express";
import { Error as MongoError, MongooseError } from "mongoose";

// Custom Error Types (optional)
class AppError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(
    message: string,
    statusCode: number,
    isOperational = true
  ) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    Error.captureStackTrace(this, this.constructor);
  }
}

// The generic error handler
export const errorHandler = (
  err: AppError | MongooseError | Error | MongoError.ValidationError,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  req: Request,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  console.log("ERROR WAS HANDLED CORRECTLY", err);
  // if (err instanceof MongooseError) {
  //   return res.status(400).json({
  //     status: "error",
  //     type: "ValidationError",
  //     message: err.message
  //   });
  // }

  // if (err instanceof AppError) {
  //   console.error(err.message);
  //   return res.status(err.statusCode).json({
  //     status: "error",
  //     message: err.message,
  //     stack: err.isOperational ? undefined : err.stack, // Hide stack for operational errors
  //   });
  // }

  // // Handle unexpected errors
  // console.error("[UNHANDLED ERROR]", err);
  // return res.status(500).json({
  //   status: "error",
  //   message: "Internal Server Error",
  //   stack: process.env.NODE_ENV === "development" ? err : undefined,
  // });
};

export const throwError = (message: string, statusCode: number) => {
  throw new AppError(message, statusCode);
};
