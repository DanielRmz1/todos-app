import { Request, Response, NextFunction } from "express";
import * as tasksService from "@services/tasksService";
import { Error } from "mongoose";

export const getTasks = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const tasks = await tasksService.getAllTasks();
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

export const createTask = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const task = await tasksService.createTask(req.body);
        res.status(201).json(task);
    } catch (error) {
        console.error(error instanceof Error.ValidationError);
        next(error);
    }
}
