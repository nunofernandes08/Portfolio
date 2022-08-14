import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";

import { Box } from "@mui/material";

import Welcome from "../components/welcome";
import AboutMe from "../components/about-me";

import * as robot from "../assets/robot.json";

export default function Home() {
  const [showBot, setShowBot] = useState(true);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: robot,
    name: "robot",
  };

  useEffect(() => {
    setTimeout(() => {
      setShowBot(false);
    }, 5000);
  }, []);

  return (
    <>
      <Welcome />
      <Box style={{ marginTop: 140 }}>
        <AboutMe />
      </Box>

      {showBot && (
        <Box style={{ position: "fixed", bottom: 20, right: 0 }}>
          <Lottie options={defaultOptions} height={200} width={200} />
        </Box>
      )}
    </>
  );
}
