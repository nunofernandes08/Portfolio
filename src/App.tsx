import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Box } from "@mui/material";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";

import Home from "./containers/home";
import { setupTheme, setupI18n } from "./core/general-setup";

import "./App.css";

setupI18n();
const theme = setupTheme();

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Router>
          <Box>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
          </Box>
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
