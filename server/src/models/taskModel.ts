import { Schema, model, Document } from "mongoose";
import Task, { SubTask, Status, Priority } from "@shared/tasks";

export type TaskDoc = Task & Document<string>;

const SubTaskSchema = new Schema<SubTask>();

const taskSchema = new Schema<TaskDoc>({
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
	createdAt: { type: Date, default: Date.now(), required: true },
	updatedAt: Date,
	tags: [String],
	subtasks: [SubTaskSchema],
});

const TaskModel = model<TaskDoc>("Task", taskSchema, "tasks");

export default TaskModel;