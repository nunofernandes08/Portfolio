import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { createTheme } from "@mui/material/styles";

import translationPT from '../translations/pt.json';
import { themeColorsLight, themeColorsDark, themeColorsLightRed } from "../style/common";

export const setupI18n = () => {
    i18n
        .use(initReactI18next)
        .init({
            resources: {
                pt: {
                    translation: translationPT
                }
            },
            lng: "pt",
            fallbackLng: "pt",
            interpolation: {
                escapeValue: false
            }
        });
}

export const setupThemeLight = () => {
    return createTheme({
        palette: {
            primary: {
                main: themeColorsLight.primary,
                contrastText: themeColorsLight.generalContrastText,
            },
            secondary: {
                main: themeColorsLight.secondary,
            },
            divider: themeColorsLight.background,
            background: {
                default: themeColorsLight.background
            },
        },
        typography: {
            fontFamily: "var(--font-family,CircularSpTitle,CircularSpTitle-Tall,CircularSp-Arab,CircularSp-Hebr,CircularSp-Cyrl,CircularSp-Grek,CircularSp-Deva,var(--fallback-fonts,sans-serif))",
            h1: {
                fontWeight: 'bold',
                color: themeColorsLight.primary
            },
            h2: {
                fontWeight: 'bold',
                color: themeColorsLight.primary
            },
            h3: {
                fontWeight: 'bold',
                color: themeColorsLight.primary
            },
            h4: {
                fontWeight: 'bold',
                color: themeColorsLight.primary
            },
            h5: {
                fontWeight: 'bold',
                color: themeColorsLight.primary
            },
            h6: {
                fontWeight: 'bold',
                color: themeColorsLight.primary
            },
            subtitle1: {
                color: themeColorsLight.generalContrastText
            }
        },
    });
}

export const setupThemeDark = () => {
    return createTheme({
        palette: {
            primary: {
                main: themeColorsDark.primary,
                contrastText: themeColorsDark.generalContrastText,
            },
            secondary: {
                main: themeColorsDark.secondary,
            },
            divider: themeColorsDark.background,
            background: {
                default: themeColorsDark.background
            },
        },
        typography: {
            fontFamily: "var(--font-family,CircularSpTitle,CircularSpTitle-Tall,CircularSp-Arab,CircularSp-Hebr,CircularSp-Cyrl,CircularSp-Grek,CircularSp-Deva,var(--fallback-fonts,sans-serif))",
            h1: {
                fontWeight: 'bold',
                color: themeColorsDark.primary
            },
            h2: {
                fontWeight: 'bold',
                color: themeColorsDark.primary
            },
            h3: {
                fontWeight: 'bold',
                color: themeColorsDark.primary
            },
            h4: {
                fontWeight: 'bold',
                color: themeColorsDark.primary
            },
            h5: {
                fontWeight: 'bold',
                color: themeColorsDark.primary
            },
            h6: {
                fontWeight: 'bold',
                color: themeColorsDark.primary
            },
            subtitle1: {
                color: themeColorsDark.generalContrastText
            }
        },
    });
}

export const setupThemeLightRed = () => {
    return createTheme({
        palette: {
            primary: {
                main: themeColorsLightRed.primary,
                contrastText: themeColorsLightRed.generalContrastText,
            },
            secondary: {
                main: themeColorsLightRed.secondary,
            },
            divider: themeColorsLightRed.background,
            background: {
                default: themeColorsLightRed.background
            },
        },
        typography: {
            fontFamily: "var(--font-family,CircularSpTitle,CircularSpTitle-Tall,CircularSp-Arab,CircularSp-Hebr,CircularSp-Cyrl,CircularSp-Grek,CircularSp-Deva,var(--fallback-fonts,sans-serif))",
            h1: {
                fontWeight: 'bold',
                color: themeColorsLightRed.primary
            },
            h2: {
                fontWeight: 'bold',
                color: themeColorsLightRed.primary
            },
            h3: {
                fontWeight: 'bold',
                color: themeColorsLightRed.primary
            },
            h4: {
                fontWeight: 'bold',
                color: themeColorsLightRed.primary
            },
            h5: {
                fontWeight: 'bold',
                color: themeColorsLightRed.primary
            },
            h6: {
                fontWeight: 'bold',
                color: themeColorsLightRed.primary
            },
            subtitle1: {
                color: themeColorsLightRed.generalContrastText
            }
        },
    });
}