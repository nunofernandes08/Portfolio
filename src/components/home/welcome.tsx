import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { Box, MenuItem, Select, Typography } from "@mui/material";

import profileImage from "../../assets/welcome/nuno-square.jpg";
import backgroundAnimatedBlue from "../../assets/welcome/splashBlue.svg";

import { availableLanguages, socialImages } from "../../api/home/service";

import { themeColors, welcomeComponent } from "../../style/common";
import { findLanguageValue } from "../../services/utils";

import { SocialImage, LanguageItem } from "../../types";

const Bounce = require("react-reveal/Bounce")

export default function Welcome() {
  const welcomeComponentClass = welcomeComponent();

  const { i18n } = useTranslation()

  const [language, setLanguage] = useState('en')

  const changeLanguage = (value: string) => {
    setLanguage(value)
    i18n.changeLanguage(value)
  }

  return (
    <Box
      className={welcomeComponentClass.backgroundImage}
      style={{
        backgroundImage: `url(${backgroundAnimatedBlue})`,
      }}
    >
      <Box display="flex" justifyContent="flex-end" sx={{ mr: 2, mt: 2 }}>
        <Select
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
          displayEmpty
          style={{ backgroundColor: themeColors.secondary, borderRadius: 8 }}
        >
          {availableLanguages.map((language: LanguageItem, index: number) => (
            <MenuItem value={findLanguageValue(language.text)} style={{ color: themeColors.primary }} key={index}>
              <img
                loading="lazy"
                width="20"
                src={language.image}
                srcSet={language.imageSet}
                alt=""
                style={{ marginRight: 8 }}
              />
              {language.text}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Bounce top>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <img
            className={welcomeComponentClass.profileImage}
            src={profileImage}
            alt=""
            style={{ borderColor: themeColors.background }}
          />
          <Typography variant="h4">Nuno Fernandes</Typography>
          <Box className={welcomeComponentClass.social}>
            {socialImages.map((sI: SocialImage, index: number) => {
              return (
                <a href={sI.link} key={index}>
                  <img
                    className={welcomeComponentClass.socialImage}
                    src={sI.image}
                    alt=""
                  />
                </a>
              );
            })}
          </Box>
        </Box>
      </Bounce>
    </Box>
  );
}
