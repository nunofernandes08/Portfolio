import React from "react";

import { Box, Typography } from "@mui/material";

export default function GeneralBox(props: { title: string, children: React.ReactNode }) {
    return (
        <Box>
            <Typography variant="h3" sx={{ pb: 3 }}  >{props.title}</Typography>

            {props.children}
        </Box >
    );
}
