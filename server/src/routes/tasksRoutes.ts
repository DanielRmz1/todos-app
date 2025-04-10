import express from 'express';
import * as tasksController from '@controllers/tasksController';

const router = express.Router();

router.get("/list", tasksController.getTasks);

router.post('/create', tasksController.createTask);

export default router;