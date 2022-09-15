import React from "react";

import { Box, Typography } from "@mui/material";

import Welcome from "../../components/projects/netflix/welcome";
import Hr from "../../components/projects/netflix/hr"

import { netflixComponents } from "../../style/common";

export default function Netflix() {
    const styleClasses = netflixComponents()

    return (
        <React.Fragment>
            <Welcome />
            <Hr />
            <Box display="flex" justifyContent="center" alignItems="center">
                <Box>
                    <Typography variant="h2" style={{ color: 'white' }}>Veja a Netflix no seu televisor.</Typography>
                    <Typography variant="h4" style={{ color: 'white' }}>Smart TVs, Playstation, Xbox, Chromecast,</Typography>
                    <Typography variant="h4" style={{ color: 'white' }}>Apple TV, leitores de Blu-ray e muito mais.</Typography>
                </Box>
                <Box>
                    <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" style={{ zIndex: 1, width: 530.19, height: 397.64 }} />
                    <video style={{ position: "absolute", top: "130%", left: "62%", width: 395.09, height: 216.8 }}>
                        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
                    </video>
                </Box>
            </Box>
        </React.Fragment>
    );
}
