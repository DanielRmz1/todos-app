import { NextFunction, Request, Response } from "express";
import Task from "@shared/tasks";
import * as tasksService from "@services/tasksService";
import StandardResponse from "@/types/StandardResponse";

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

export const updateTask = async (
	req: Request,
	res: Response<StandardResponse<void>>,
	next: NextFunction
): Promise<void> => {
	try {
		const taskId = req.params.taskId;
		await tasksService.updateTask(taskId, req.body);
		res.status(200).end();
	} catch (error) {
		next(error);
	}
};

export const completeTask = async (
	req: Request,
	res: Response<StandardResponse<void>>,
	next: NextFunction
): Promise<void> => {
	try {
		const taskId = req.params.taskId;
		await tasksService.completeTask(taskId);
		res.status(200).end();
	} catch (error) {
		next(error);
	}
};
