import Priority from "./Priority.enum";
import Status from "./Status.enum";

interface Task {
	userId: string;
	title: string;
	description: string;
	status: Status;
	priority: Priority;
	dueDate: Date;
	createdAt: Date;
	updatedAt: Date;
	tags: string[];
	subtasks: SubTask[];
}

export interface SubTask {
	title: string;
	completed: boolean;
}

export default Task;
