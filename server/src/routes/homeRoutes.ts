import express from 'express';
import { getHelloWorld } from '../controllers/homeController';

const router = express.Router();

router.get('/', getHelloWorld);

export default router;