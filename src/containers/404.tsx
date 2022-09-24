import React from "react";
import Lottie from "react-lottie";

import * as error from "../assets/error404.json"

import { Box } from "@mui/material";

export default function Error404() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: error,
        name: "error",
    };

    return (
        <Box display="flex"
            justifyContent="center"
            alignItems="center"
            style={{ position: "absolute", top: 0, bottom: 0 }}
        >
            <Lottie options={defaultOptions} height={600} width={600} />
        </Box>
    );
}
