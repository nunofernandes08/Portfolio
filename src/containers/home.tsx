import React from "react";

import { Box } from "@mui/material";

import Welcome from "../components/home/welcome";

import { componentsWithMargins } from "../api/home/service";

const Slide = require("react-reveal/Slide")

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
                <Slide bottom left>
                  <Box sx={{ pt: componentPaddingTop(index), pb: componentPaddingBottom(index) }}>
                    <Component />
                  </Box>
                </Slide>
              ) : (
                <Slide bottom right>
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
