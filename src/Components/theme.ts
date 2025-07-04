import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#4CAF50",
        },
        secondary: {
            main: "#FFC107",
        },
        background: {
            default: "#F9F9F9",
        },
        text: {
            primary: "#333333"
        },
    },
    typography: {
        fontFamily: "'Roboto', sans-serif",
    },
});

export default theme;