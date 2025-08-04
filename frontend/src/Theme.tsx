import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: { main: "#B71C1C" },
        secondary: { main: "#FDD835" },
        background: {
            default: "#FAFAFA",
            paper: "#FFFFFF",
        },
        text: {
            primary: "#212121",
            secondary: "#757575",
        },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: { main: "#EF5350" },
        secondary: { main: "#FFEE58" },
        background: {
            default: "#121212",
            paper: "#1E1E1E",
        },
        text: {
            primary: "#FFFFFF",
            secondary: "#BDBDBD",
        },
    },
});

export { lightTheme, darkTheme };