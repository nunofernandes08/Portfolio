import React from "react";

import { Box } from "@mui/material"

export default function WatchTv(props: { children: React.ReactNode }) {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" style={{ marginTop: 30, marginBottom: 30, width: "100%", maxWidth: "1100px" }}>
            {props.children}
        </Box>
    );
}

