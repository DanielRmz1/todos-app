import { Schema, model, Document } from "mongoose";
import Task, { SubTask, Status, Priority } from "@shared/tasks";

type TaskSchema = Task & Document;

const SubTaskSchema = new Schema<SubTask>({
	title: String,
	completed: Boolean,
});

const taskSchema = new Schema<TaskSchema>({
	userId: { type: String, required: true },
	title: { type: String, required: true },
	description: String,
	status: {
		type: String,
		enum: Object.values(Status),
		default: Status.TO_DO,
		required: true,
	},
	priority: {
		type: String,
		enum: Object.values(Priority),
		default: Priority.MEDIUM,
		required: true,
	},
	dueDate: Date,
	createdAt: { type: Date, required: true },
	updatedAt: Date,
	tags: [String],
	subtasks: [SubTaskSchema],
});

const TaskModel = model<TaskSchema>("Task", taskSchema, "tasks");

export default TaskModel;

