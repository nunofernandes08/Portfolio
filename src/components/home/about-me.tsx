import React from "react";
import Lottie from "react-lottie";

import { Box, Grid, Typography } from "@mui/material";

import { useCommonStyles } from "../../style/common";

import * as me from "../../assets/about-me/me.json";
import GeneralBox from "./components/general-box";

export default function AboutMe() {
  const commonClasses = useCommonStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: me,
    name: "me",
  };

  return (
    <GeneralBox title={"About me"}>
      <Grid container justifyContent="flex-start">
        <Grid item xs={7}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            className={commonClasses.height100}
          >

            <Typography variant="subtitle1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </Typography>
            <Typography className={commonClasses.topOffset} variant="subtitle1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box display="flex" justifyContent="center">
            <Lottie options={defaultOptions} width={500} />
          </Box>
        </Grid>
      </Grid>
    </GeneralBox>

  );
}
