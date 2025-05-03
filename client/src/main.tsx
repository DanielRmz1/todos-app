import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import "./index.css";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<StrictMode>
			<Routes>
				<Route path="/" element={<App />} />
			</Routes>
		</StrictMode>
	</BrowserRouter>
);