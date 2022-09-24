
import React from "react";

import { Box, Button, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const buttons = ["What is Netflix?", "How much does Netflix cost?", "Where can I watch?", "How do I cancel?", "What can I watch on Netflix?", "Is Netflix good for kids?"]

export default function FrequentlyAskedQuestion() {
    return (
        <Box display="flex" alignItems="center" flexDirection="column" style={{ marginTop: 70, marginBottom: 70, width: "100%", maxWidth: "1130px" }}>
            <Typography variant="h3" style={{ color: "white" }}>Frequently Asked Questions</Typography>

            <Box style={{ marginTop: 40, marginBottom: 40 }}>
                {buttons.map((text, index) => (
                    <Box key={index} display="flex" alignItems="center" style={{ backgroundColor: "#303030", width: 649.48, height: 49, padding: ".8em 2.2em .8em 1.2em", marginBottom: 8 }}>
                        <Box style={{ width: "90%" }}>
                            <Typography style={{ color: "white", fontWeight: 400, fontSize: 26 }}>{text}</Typography>
                        </Box>
                        <Box display="flex" justifyContent="end" style={{ width: "10%" }}>
                            <AddIcon style={{ fill: "white", width: 48.77, height: 48.77 }} />
                        </Box>
                    </Box>
                ))}
            </Box>
            <Box display="flex" alignItems="center" flexDirection="column" sx={{ mt: 3 }}>
                <Typography variant="h4" style={{ color: 'white', fontSize: "1.2rem", fontWeight: "400", paddingTop: 10, paddingBottom: 20 }}>Ready to watch? Enter your email to create or restart your membership.</Typography>
                <Box display="flex" justifyContent="center">
                    <input style={{ background: "white", border: "0px solid white", borderRadius: 1, width: 450, paddingLeft: 10, fontSize: 16 }} placeholder="Email address" />
                    <Button style={{ width: 212.97, height: 60, backgroundColor: '#e50914', borderRadius: 0, textTransform: 'none', fontSize: '1.625rem', color: 'white' }}>Get Started <ArrowForwardIosIcon sx={{ ml: 1 }} /></Button>
                </Box>
            </Box>
        </Box>
    );
}
