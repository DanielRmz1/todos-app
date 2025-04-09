import { Request, Response, NextFunction } from "express";
import * as homeService from "services/homeService";

export const getHelloWorld = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const message = homeService.helloWorld();
    res.status(200).json(message);
  } catch (error) {
    next(error);
  }
};
