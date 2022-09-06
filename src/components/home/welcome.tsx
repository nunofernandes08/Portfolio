import React from "react";

import { Box } from "@mui/material";

import profileImage from "../../assets/nuno-square.jpg";
import email from "../../assets/social/email.png";
import twitter from "../../assets/social/twitter.png";
import github from "../../assets/social/github.png";
import linkedin from "../../assets/social/linkedin.png";

import { themeColorsDark, themeColorsLight, themeColorsLightRed, welcomeComponent } from "../../style/common";
import { ThemeInterface } from "../../types";
import { selectTheme } from "../../services/utils";

import backgroundAnimatedBlue from "../../assets/splashBlue.svg";
import backgroundAnimatedRed from "../../assets/splashRed.svg";

const socialImages = [
  { image: email, link: "https://www.hotmail.com/" },
  { image: twitter, link: "https://www.twitter.com/" },
  { image: github, link: "https://www.github.com/" },
  { image: linkedin, link: "https://www.linkedin.com/" },
];

export default function Welcome(props: { theme: string }) {
  const welcomeComponentClass = welcomeComponent();

  const availableBackgroundImages: ThemeInterface = {
    themeLight: backgroundAnimatedBlue,
    themeDark: backgroundAnimatedBlue,
    themeLightRed: backgroundAnimatedRed,
  };

  const availableBorderColor: ThemeInterface = {
    themeLight: themeColorsLight.background,
    themeDark: themeColorsDark.background,
    themeLightRed: themeColorsLightRed.background,
  };

  return (
    <Box
      className={welcomeComponentClass.backgroundImage}
      style={{
        backgroundImage: `url(${selectTheme(
          props.theme,
          availableBackgroundImages
        )})`,
      }}
    >
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
          style={{ borderColor: selectTheme(props.theme, availableBorderColor) }}
        />
        <Box className={welcomeComponentClass.social}>
          {socialImages.map((sI, index) => {
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
    </Box>
  );
}
