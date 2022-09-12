import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation
} from "react-router-dom";
import Lottie from "react-lottie";

import {
  Box,
} from "@mui/material";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";

import Home from "./containers/home";
import Spotify from "./containers/projects/spotify";
import Photography from "./containers/photography";
import {
  setupTheme,
  setupI18n,
} from "./core/general-setup";
import {
  themeColors
} from "./style/common";

import { Paths } from "./types";

import * as robot from "./assets/robot.json";

import "./App.css";

setupI18n();
const theme = setupTheme();

export default function App() {
  const [showBot, setShowBot] = useState(true);
  const location = useLocation();
  const currentPath = location.pathname

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: robot,
    name: "robot",
  };

  useEffect(() => {
    setTimeout(() => {
      setShowBot(false);
    }, 5000);
  }, []);


  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          style={{
            background: currentPath === Paths.SPOTIFY ? '#121212' : themeColors.background,
          }}
        >
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/spotify" element={<Spotify />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </Box>
        {showBot && currentPath !== Paths.SPOTIFY && (
          <Box style={{ position: "fixed", bottom: 20, right: 0 }}>
            <Lottie options={defaultOptions} height={200} width={200} />
          </Box>
        )}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}