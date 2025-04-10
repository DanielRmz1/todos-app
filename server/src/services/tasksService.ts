import TaskModel from "@/models/taskModel";
import Task from "@shared/task";

export const getAllTasks = async (): Promise<Task[]> => {
    return TaskModel.find().exec();
}

export const createTask = async (data: Task): Promise<Task> => {
  const task = new TaskModel(data);
  return task.save();
};
