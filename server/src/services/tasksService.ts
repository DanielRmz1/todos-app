import TaskModel, { TaskDoc } from "@/models/taskModel";
import AppError from "@/utils/appError";
import Task, { Status } from "@shared/tasks";

const getTaskById = async (id: string): Promise<TaskDoc | null> => {
	return await TaskModel.findById(id).exec();
};

export const getAllTasks = async (): Promise<TaskDoc[]> => {
	return TaskModel.find().exec();
};

export const createTask = async (data: Task): Promise<TaskDoc> => {
	const task = new TaskModel(data);
	return task.save();
};

export const updateTask = async (taskId: string, data: Task): Promise<void> => {
	const task = await getTaskById(taskId);

	if (!task) throw new AppError(`Task with id ${taskId} not found.`, 404);

	task.title ??= data.title;
	task.description ??= data.description;
	task.priority ??= data.priority;
	task.status ??= data.status;
	task.tags ??= data.tags;
	task.subtasks ??= data.subtasks;
	task.updatedAt = new Date();

	await task.save();
};

export const completeTask = async (taskId: string): Promise<void> => {
	const task = await getTaskById(taskId);

	if (!task) throw new AppError(`Task with id ${taskId} not found`, 404);

	task.status = Status.DONE;

	await task.save();
};
