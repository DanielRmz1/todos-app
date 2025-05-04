import { createTheme } from "@mui/material";

const theme = createTheme({
    colorSchemes: {
        dark: true,
        light: true
    },
    cssVariables: true,
    palette: {
        contrastThreshold: 4.5
    }
});

export default theme;