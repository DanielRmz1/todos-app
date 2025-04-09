import express from "express";
import cors from "cors";
import morgan from "morgan";
import homeRoutes from "@routes/homeRoutes";

const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Register routes
app.use('/api/', homeRoutes);

export default app;
