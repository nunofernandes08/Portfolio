import React from "react";

import { Box } from "@mui/material";

import Welcome from "../components/home/welcome";
import Why from "../components/photography/why";
import Albuns from "../components/photography/albuns";

const componentsWithMargins = [Why, Albuns]

export default function Photography() {
    const componentPaddingTop = (index: number) => {
        return index === 0 ? 8 : 0
    }

    return (
        <React.Fragment>
            <Welcome />
            <Box style={{ maxWidth: 1100 }} >
                {componentsWithMargins.map((Component, index) => {
                    return (
                        <Box key={index} sx={{ pt: componentPaddingTop(index), pb: 8 }}>
                            <Component />
                        </Box>
                    )
                })}
            </Box>
        </React.Fragment>
    );
}
