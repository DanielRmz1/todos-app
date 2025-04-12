import { Request, Response, NextFunction } from "express";
import * as tasksService from "@services/tasksService";
import StandardResponse from "@/types/StandardResponse";
import Task from "@shared/tasks";

export const getTasks = async (
	req: Request,
	res: Response<StandardResponse<Task[]>>,
	next: NextFunction
): Promise<void> => {
	try {
		const tasks = await tasksService.getAllTasks();
		res.status(200).json({ data: tasks });
	} catch (error) {
		next(error);
	}
};

export const createTask = async (
	req: Request,
	res: Response<StandardResponse<Task>>,
	next: NextFunction
): Promise<void> => {
	try {
		const task = await tasksService.createTask(req.body);
		res.status(201).json({
			data: task,
		});
	} catch (error) {
		next(error);
	}
};
