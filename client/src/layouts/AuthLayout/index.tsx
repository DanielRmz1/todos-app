import { Avatar, Grid, IconButton } from "@mui/material";
import { Outlet } from "react-router";
import classes from "./index.module.css";

const AuthLayout = () => {
	return (
		<Grid container>
			<Grid size={12} className={classes.menu}>
				<IconButton size="small">
					<Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
				</IconButton>
			</Grid>
			<Grid size={12}>
				<Outlet />
			</Grid>
		</Grid>
	);
};

export default AuthLayout;
