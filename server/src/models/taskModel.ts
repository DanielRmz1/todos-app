import { Schema, model, Document } from "mongoose";
import Task, { SubTask } from "@shared/task";

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
    enum: ["todo", "in-progress", "done"],
    required: true,
  },
  priority: { type: String, enum: ["low", "medium", "high"], required: true },
  dueDate: Date,
  createdAt: { type: Date, required: true },
  updatedAt: Date,
  tags: [{ type: String }],
  subtasks: [SubTaskSchema],
});

const TaskModel = model<TaskSchema>("Task", taskSchema, "tasks");

export default TaskModel;
