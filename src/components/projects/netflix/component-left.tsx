import React from "react";

import { Box, Typography } from "@mui/material"

export default function ComponentLeft(props: { img: string, title: string, description: string[] }) {
    return (
        <React.Fragment>
            <Box>
                <img alt="" src={props.img} style={{ width: 530.19, height: 397.64 }} />
            </Box>
            <Box style={{ width: 569, paddingLeft: 60 }}>
                <Typography variant="h3" style={{ color: 'white' }}>{props.title}</Typography>
                <Box sx={{ mt: 2 }}>
                    {props.description.map((description, index) => (
                        <Typography variant="h5" style={{ color: 'white', fontWeight: 400 }} key={index}>{description}</Typography>
                    ))}
                </Box>
            </Box>
        </React.Fragment>
    );
}
