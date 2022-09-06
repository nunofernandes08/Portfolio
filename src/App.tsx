import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Lottie from "react-lottie";

import {
  Box,
  Typography,
  Button
} from "@mui/material";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";

import Home from "./containers/home";
import Spotify from "./containers/spotify";
import {
  setupThemeLight,
  setupThemeDark,
  setupThemeLightRed,
  setupI18n,
} from "./core/general-setup";
import {
  themeColorsLight,
  themeColorsDark,
  themeColorsLightRed,
} from "./style/common";

import { selectTheme } from "./services/utils";
import { ThemeInterface, Themes, Paths } from "./types";

import * as robot from "./assets/robot.json";

import "./App.css";

setupI18n();
const themeLight = setupThemeLight();
const themeDark = setupThemeDark();
const themeLightRed = setupThemeLightRed();

const themes = [
  {
    id: Themes.LIGHT,
    name: "Light",
  },
  {
    id: Themes.DARK,
    name: "Dark",
  },
  {
    id: Themes.LIGHTRED,
    name: "Red",
  },
];

export default function App() {
  const [showBot, setShowBot] = useState(true);
  const [selectedTheme, setSelectedTheme] = useState(Themes.LIGHT);
  const currentPath = window.location.pathname

  const availableThemes: ThemeInterface = {
    themeLight: themeLight,
    themeDark: themeDark,
    themeLightRed: themeLightRed,
  };

  const availableBackgrounds: ThemeInterface = {
    themeLight: themeColorsLight.background,
    themeDark: themeColorsDark.background,
    themeLightRed: themeColorsLightRed.background,
  };

  const availableButtonsBackground: ThemeInterface = {
    themeLight: themeColorsLight.primary,
    themeDark: themeColorsLight.generalContrastText,
    themeLightRed: themeColorsLightRed.primary,
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: robot,
    name: "robot",
  };

  const saveTheme = (theme: any) => {
    switch (theme) {
      case "dark":
        return setSelectedTheme(Themes.DARK);
      case "light":
        return setSelectedTheme(Themes.LIGHT);
      case "lightRed":
        return setSelectedTheme(Themes.LIGHTRED);
      default:
        return;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setShowBot(false);
    }, 5000);
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={selectTheme(selectedTheme, availableThemes)}>
        <Router>
          <Box
            style={{
              background: currentPath === Paths.SPOTIFY ? '#121212' : selectTheme(selectedTheme, availableBackgrounds),
            }}
          >
            <Routes>
              <Route path="/home" element={<Home theme={selectedTheme} />} />
              <Route path="/spotify" element={<Spotify theme={selectedTheme} />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
          </Box>
          {showBot && currentPath !== Paths.SPOTIFY && (
            <Box style={{ position: "fixed", bottom: 20, right: 0 }}>
              <Lottie options={defaultOptions} height={200} width={200} />
            </Box>
          )}
          {currentPath !== Paths.SPOTIFY && (
            <Box style={{ position: "fixed", top: 20, left: 20, backgroundColor: "#0000004f", padding: 20, borderRadius: 10 }}>
              <Typography variant="h5">Themes</Typography>
              {themes.map((t, index) => (
                <Button
                  key={index}
                  variant="contained"
                  onClick={() => saveTheme(t.id)}
                  style={{
                    backgroundColor: selectTheme(t.id, availableButtonsBackground),
                    marginRight: index === themes.length - 1 ? 0 : 10
                  }}
                >

                </Button>
              ))}
            </Box>
          )}

        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}