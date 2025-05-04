import { Grid, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
    id: string;
}

const Tasks: FC<Props> = () => {
    return (
        <Grid container>
            <Typography variant="h1">Tasks List</Typography>
        </Grid>
    );
};


export default Tasks;