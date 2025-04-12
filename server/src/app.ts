import express from "express";
import cors from "cors";
import morgan from "morgan";
import homeRoutes from "@routes/homeRoutes";
import taskRoutes from "@routes/tasksRoutes";
import { validationErrorHandler, appErrorHandler } from "@/middlewares/errors";

const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Register routes
app.use("/api/", homeRoutes);
app.use("/api/tasks/", taskRoutes);

// Error handler
app.use(validationErrorHandler);
app.use(appErrorHandler);

export default app;
