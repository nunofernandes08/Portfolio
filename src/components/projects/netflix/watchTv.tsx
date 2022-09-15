import React from "react";

import { Box, Typography } from "@mui/material"

export default function WatchTv() {
    return (
        <React.Fragment>
            <Box style={{ maxWidth: 595.05 }}>
                <Typography variant="h3" style={{ color: 'white' }}>Veja a Netflix no seu televisor.</Typography>
                <Box sx={{ mt: 2 }}>
                    <Typography variant="h5" style={{ color: 'white', fontWeight: 400 }}>Smart TVs, Playstation, Xbox, Chromecast,</Typography>
                    <Typography variant="h5" style={{ color: 'white', fontWeight: 400 }}>Apple TV, leitores de Blu-ray e muito mais.</Typography>
                </Box>
            </Box>
            <Box>
                <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" style={{ zIndex: 2, width: 530.19, height: 397.64 }} />
            </Box>
        </React.Fragment>
    );
}
