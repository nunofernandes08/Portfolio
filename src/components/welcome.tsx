import React from "react";

import { Box } from "@mui/material";

import profileImage from "../assets/nuno-square.jpg";
import email from "../assets/social/email.png";
import twitter from "../assets/social/twitter.png";
import github from "../assets/social/github.png";
import linkedin from "../assets/social/linkedin.png";

import { welcomeComponent } from "../style/common";

const socialImages = [
  { image: email, link: "https://www.hotmail.com/" },
  { image: twitter, link: "https://www.twitter.com/" },
  { image: github, link: "https://www.github.com/" },
  { image: linkedin, link: "https://www.linkedin.com/" },
];

export default function Welcome() {
  const welcomeComponentClass = welcomeComponent();

  return (
    <Box className={welcomeComponentClass.backgroundImage}>
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
        />
        <Box className={welcomeComponentClass.social}>
          {socialImages.map((sI, index) => {
            return (
              <a href={sI.link}>
                <img
                  className={welcomeComponentClass.socialImage}
                  key={index}
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
