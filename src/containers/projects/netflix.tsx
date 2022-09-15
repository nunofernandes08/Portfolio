import React from "react";

import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Navbar from "../../components/projects/netflix/navbar";

import { netflixComponents } from "../../style/common";

export default function Netflix() {
    const styleClasses = netflixComponents()
    return (
        <React.Fragment>
            <Box className={styleClasses.netflixWelcome}>
                <Navbar />

                <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" style={{ height: "calc(100% - 73px)" }}>
                    <Box display="flex" alignItems="center" flexDirection="column">
                        <Typography variant="h2" style={{ color: 'white' }}>Unlimited movies, TV</Typography>
                        <Typography variant="h2" style={{ color: 'white' }}>shows, and more.</Typography>
                        <Typography variant="h4" style={{ color: 'white', fontSize: "1.625rem", fontWeight: "400", paddingTop: 10 }}>Watch anywhere. Cancel anytime.</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" flexDirection="column" sx={{ mt: 3 }}>
                        <Typography variant="h4" style={{ color: 'white', fontSize: "1.2rem", fontWeight: "400", paddingTop: 10, paddingBottom: 20 }}>Ready to watch? Enter your email to create or restart your membership.</Typography>
                        <Box display="flex" justifyContent="center">
                            <input style={{ background: "white", border: "0px solid white", borderRadius: 1, width: 450, paddingLeft: 10, fontSize: 16 }} placeholder="Email address" />
                            <Button style={{ width: 212.97, height: 60, backgroundColor: '#e50914', borderRadius: 0, textTransform: 'none', fontSize: '1.625rem', color: 'white' }}>Get Started <ArrowForwardIosIcon sx={{ ml: 1 }} /></Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box style={{ width: "100%", height: 10, background: 'red' }}>

            </Box>
        </React.Fragment>
    );
}
