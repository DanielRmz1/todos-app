import express from "express";
import cors from "cors";
import morgan from "morgan";
import homeRoutes from "@routes/homeRoutes";
import taskRoutes from "@routes/tasksRoutes";

const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// app.use(errorHandler);

// Register routes
app.use("/api/", homeRoutes);
app.use("/api/tasks/", taskRoutes);

export default app;
