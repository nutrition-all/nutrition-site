import { createTheme } from "@mui/material/styles";

export const theme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#00796b", // Cor principal (verde escuro)
        contrastText: "#ffffff",
      },
      background: {
        default: mode === "light" ? "#f4f6f8" : "#121212",
        paper: mode === "light" ? "#ffffff" : "#1e1e1e",
      },
      text: {
        primary: mode === "light" ? "#000000" : "#ffffff",
        secondary: mode === "light" ? "#555555" : "#aaaaaa",
      },
    },
  });