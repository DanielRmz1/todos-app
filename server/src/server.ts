import app from "@/app";
import dotenv from "dotenv";
import path  from "path";
import mongoose from "mongoose";

dotenv.config({
  path: path.resolve(__dirname, "../../.env.local"),
});

const PORT = process.env.SERVER_PORT || 4999;

const mongoDbConnString: string = process.env.MONGO_CONNECTION_STRING || "";

mongoose
  .connect(`${mongoDbConnString}/todos-app`)
  .then(() => console.log(`🟢 MongoDB connected to ${mongoDbConnString}`))
  .catch((err) => console.error("🔴 MongoDB error:", err));

app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`); });
