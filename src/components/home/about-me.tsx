import React from "react";
import Lottie from "react-lottie";
import { useTranslation } from "react-i18next";

import { Box, Grid, Typography } from "@mui/material";

import GeneralBox from "./components/general-box";

import * as me from "../../assets/about-me/me.json";

import { useCommonStyles } from "../../style/common";

export default function AboutMe() {
  const commonClasses = useCommonStyles();
  const { t } = useTranslation();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: me,
    name: "me",
  };

  return (
    <GeneralBox title={t("HOME.COMPONENTS_TITLES.ABOUT_ME")}>
      <Grid container justifyContent="flex-start">
        <Grid item xs={7}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            className={commonClasses.height100}
          >

            <Typography variant="subtitle1">{t("GENERAL.LOREM_LARGE")}</Typography>
            <Typography className={commonClasses.topOffset} variant="subtitle1">{t("GENERAL.LOREM_LARGE")}</Typography>
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
