import React from "react";

import { Box } from "@mui/material";

import Welcome from "../components/home/welcome";
import AboutMe from "../components/home/about-me";
import Projects from "../components/home/projects";

const componentsWithMargins = [AboutMe, Projects]

export default function Home(props: { theme: string }) {
  return (
    <React.Fragment>
      <Welcome theme={props.theme} />
      {componentsWithMargins.map((Component, index) => {
        return (
          <Box style={{ marginTop: 140, marginLeft: 300, marginRight: 300, maxWidth: 1321 }} key={index}>
            <Component theme={props.theme} />
          </Box>
        )
      })}
    </React.Fragment>
  );
}
