import React from "react";

import { Box, Typography } from "@mui/material";

import profileImage from "../assets/nuno-square.jpg";

import { welcomeComponent } from "../style/common";

export default function Welcome() {
  const welcomeComponentClass = welcomeComponent();

  return (
    <>
      <Box className={welcomeComponentClass.backgroundImage}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <img
            className={welcomeComponentClass.profileImage}
            src={profileImage}
            alt=""
          />
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: 140 }}
      >
        <Typography variant="h5">Nuno</Typography>
      </Box>
    </>
  );
}
