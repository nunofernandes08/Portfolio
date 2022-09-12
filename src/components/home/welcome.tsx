import React from "react";

import { Box, Typography } from "@mui/material";

import profileImage from "../../assets/welcome/nuno-square.jpg";
import email from "../../assets/welcome/social/email.png";
import twitter from "../../assets/welcome/social/twitter.png";
import github from "../../assets/welcome/social/github.png";
import linkedin from "../../assets/welcome/social/linkedin.png";

import { themeColors, welcomeComponent } from "../../style/common";

import backgroundAnimatedBlue from "../../assets/welcome/splashBlue.svg";

const Bounce = require("react-reveal/Bounce")

const socialImages = [
  { image: email, link: "https://www.hotmail.com/" },
  { image: twitter, link: "https://www.twitter.com/" },
  { image: github, link: "https://www.github.com/" },
  { image: linkedin, link: "https://www.linkedin.com/" },
];

export default function Welcome() {
  const welcomeComponentClass = welcomeComponent();

  return (
    <Box
      className={welcomeComponentClass.backgroundImage}
      style={{
        backgroundImage: `url(${backgroundAnimatedBlue})`,
      }}
    >
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
      </Bounce>
    </Box>
  );
}
