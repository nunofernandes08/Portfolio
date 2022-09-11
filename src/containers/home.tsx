import React from "react";

import { Box } from "@mui/material";

import Welcome from "../components/home/welcome";
import AboutMe from "../components/home/about-me";
import Projects from "../components/home/projects";
import Education from "../components/home/education";

const componentsWithMargins = [AboutMe, Projects, Education]

export default function Home() {
  const componentPaddingTop = (index: number) => {
    return index === 0 ? 8 : 0
  }
  const componentPaddingBottom = (index: number) => {
    return index === 0 || index + 1 === componentsWithMargins.length ? 0 : 15
  }
  return (
    <React.Fragment>
      <Welcome />
      <Box style={{ marginTop: 140, marginBottom: 140, marginLeft: 200, marginRight: 200, maxWidth: 1321 }} >
        {componentsWithMargins.map((Component, index) => {
          return (
            <Box key={index} sx={{ pt: componentPaddingTop(index), pb: componentPaddingBottom(index) }}>
              <Component />
            </Box>
          )
        })}
      </Box>

    </React.Fragment>
  );
}
