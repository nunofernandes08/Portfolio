import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { createTheme } from "@mui/material/styles";

import translationPT from '../translations/pt.json';
import { themeColors } from "../style/common";

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

export const setupTheme = () => {
    return createTheme({
        palette: {
            primary: {
                main: themeColors.primary,
                contrastText: themeColors.generalContrastText
            },
            secondary: {
                main: themeColors.secondary,
            },
            divider: themeColors.background,
            background: {
                default: themeColors.background
            },
        },
        typography: {
            fontFamily: [
                '"Opens Sans"',
                'sans-serif',
            ].join(','),
        },
    });
}
