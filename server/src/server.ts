import app from "@/app";
import dotenv from "dotenv";
import path  from "path";

dotenv.config({
    path: path.resolve(__dirname, '../../.env.local')
});

console.log(process.env.SERVER_PORT);

const PORT = process.env.SERVER_PORT || 4999;

app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`); });
