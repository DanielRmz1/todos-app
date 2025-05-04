import { Route, Routes } from "react-router";
import AuthLayout from "./layouts/AuthLayout";
import Tasks from "./views/Tasks";

const App = () => {
	return (
		<Routes>
			<Route element={<AuthLayout />}>
				<Route path="/tasks" element={<Tasks id="123" />} />
			</Route>
		</Routes>
	);
};

export default App;
