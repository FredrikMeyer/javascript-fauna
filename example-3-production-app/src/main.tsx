import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const mdTheme = createTheme();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={mdTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
