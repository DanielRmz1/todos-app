import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const rootEnvDir = path.resolve(__dirname, "..");
	const env = loadEnv(mode, rootEnvDir, "");
	return {
		plugins: [tsconfigPaths(), react()],
		base: "/",
		envDir: "../.",
		server: {
			port: parseInt(env.VITE_PORT) || 3000,
			https: {
				key: fs.readFileSync(path.resolve(__dirname, "../certs/localhost-key.pem")),
				cert: fs.readFileSync(path.resolve(__dirname, "../certs/localhost.pem")),
			},
		},
	};
});