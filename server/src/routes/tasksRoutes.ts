import express from 'express';
import * as tasksController from "@controllers/tasksController";

const router = express.Router();

router.get("/", tasksController.getTasks);

router.post("/", tasksController.createTask);

router.put("/:taskId", tasksController.updateTask);

router.put("/:taskId", tasksController.completeTask);

export default router;