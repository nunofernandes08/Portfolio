import React from "react";

import { Box, Button, Grid } from "@mui/material";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { spotifyComponents } from "../../../../style/common";
import { goToSpotify } from "../../../../services/utils";

export default function Navbar() {
    const styleClasses = spotifyComponents()
    return (
        <Box className={styleClasses.spotifyNavbarContainer}>
            <Grid item xs={12}>
                <Box display="flex" alignItems="center" sx={{ p: 1, mx: 3 }}>
                    <Box style={{ width: "50%" }}>
                        <Button className={styleClasses.spotifyNavbarButtonArrow} sx={{ mr: 2 }} ><ArrowBackIosNewIcon className={styleClasses.spotifyNavbarButtonArrowBackNext} onClick={() => goToSpotify()} /></Button>
                        <Button className={styleClasses.spotifyNavbarButtonArrow}><ArrowForwardIosIcon className={styleClasses.spotifyNavbarButtonArrowBackNext} onClick={() => goToSpotify()} /></Button>
                    </Box>
                    <Box style={{ width: "50%" }}>
                        <Box display="flex" justifyContent="flex-end">
                            <Button sx={{ mr: 3 }} className={styleClasses.spotifyNavbarSignUp} onClick={() => goToSpotify()}>Sign up</Button>
                            <Button variant="contained" className={styleClasses.spotifyNavbarLogin} onClick={() => goToSpotify()}>Log in</Button>
                        </Box>
                    </Box>
                </Box>
            </Grid >
        </Box >
    );
}
