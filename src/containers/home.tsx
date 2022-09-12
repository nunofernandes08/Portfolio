import React from "react";

import { Box } from "@mui/material";

import Welcome from "../components/home/welcome";
import AboutMe from "../components/home/about-me";
import Projects from "../components/home/projects";
import Education from "../components/home/education";
import Experience from "../components/home/experience";

const Slide = require("react-reveal/Slide")

const componentsWithMargins = [AboutMe, Education, Experience, Projects]

export default function Home() {
  const componentPaddingTop = (index: number) => {
    return index === 0 ? 8 : 0
  }
  const componentPaddingBottom = (index: number) => {
    return index === 0 ? 0 : 8
  }

  return (
    <React.Fragment>
      <Welcome />
      <Box style={{ maxWidth: 1100 }} >
        {componentsWithMargins.map((Component, index) => {
          return (
            <React.Fragment key={index}>
              {index & 1 ? (
                <Slide left>
                  <Box sx={{ pt: componentPaddingTop(index), pb: componentPaddingBottom(index) }}>
                    <Component />
                  </Box>
                </Slide>
              ) : (
                <Slide right>
                  <Box sx={{ pt: componentPaddingTop(index), pb: componentPaddingBottom(index) }}>
                    <Component />
                  </Box>
                </Slide>
              )}


            </React.Fragment>
          )
        })}
      </Box>
    </React.Fragment>
  );
}
