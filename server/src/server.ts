import app from "@/app";
import dotenv from "dotenv";
import fs from "fs";
import https from "https";
import mongoose from "mongoose";
import path from "path";


dotenv.config({
	path: path.resolve(__dirname, "../../.env.local"),
});

const sslKey = fs.readFileSync(path.resolve(__dirname, "../../certs/localhost-key.pem"));
const sslCert = fs.readFileSync(path.resolve(__dirname, "../../certs/localhost.pem"));

const httpsOptions = {
	key: sslKey,
	cert: sslCert,
};

const PORT = process.env.SERVER_PORT || 4999;

const mongoDbConnString: string = process.env.MONGO_CONNECTION_STRING || "";

mongoose
	.connect(`${mongoDbConnString}/todos-app`)
	.then(() => console.info(`🟢 MongoDB connected to ${mongoDbConnString}`))
	.catch((err) => console.error("🔴 MongoDB error:", err));

https
	.createServer(httpsOptions, app)
	.listen(PORT, () => console.info(`Server is running on https://localhost:${PORT}`));