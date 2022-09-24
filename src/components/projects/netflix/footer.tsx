import React from "react";

import { Box, MenuItem, Select, Typography } from "@mui/material"
import LanguageIcon from '@mui/icons-material/Language';

import { netflixComponents } from "../../../style/common";

export default function Footer() {
    const styleClasses = netflixComponents();

    return (
        <Box display="flex" justifyContent="center" flexDirection="column" style={{ marginTop: 70, marginBottom: 70, width: "100%", maxWidth: "1130px" }}>
            <Typography variant="subtitle1" style={{ color: "#737373", fontSize: "1em" }}>Questions? Call 800 855 855</Typography>

            <Box display="flex" justifyContent="space-between" style={{ marginTop: 30 }}>
                <Box >
                    {["FAQ", "Investor Relations", "Ways to wathc", "Corporate Information", "Legal Notices"].map((item, index) => {
                        return (
                            <Typography variant="subtitle1" style={{ color: "#737373", fontSize: 14, marginTop: index === 0 ? 0 : 14 }} key={index}>{item}</Typography>
                        )
                    })}
                </Box>
                <Box >
                    {["FAQ", "Investor Relations", "Ways to wathc", "Corporate Information", "Legal Notices"].map((item, index) => {
                        return (
                            <Typography variant="subtitle1" style={{ color: "#737373", fontSize: 14, marginTop: index === 0 ? 0 : 14 }} key={index}>{item}</Typography>
                        )
                    })}
                </Box>
                <Box>
                    {["FAQ", "Investor Relations", "Ways to wathc", "Corporate Information", "Legal Notices"].map((item, index) => {
                        return (
                            <Typography variant="subtitle1" style={{ color: "#737373", fontSize: 14, marginTop: index === 0 ? 0 : 14 }} key={index}>{item}</Typography>
                        )
                    })}
                </Box>
                <Box>
                    {["FAQ", "Investor Relations", "Ways to wathc", "Corporate Information", "Legal Notices"].map((item, index) => {
                        return (
                            <Typography variant="subtitle1" style={{ color: "#737373", fontSize: 14, marginTop: index === 0 ? 0 : 14 }} key={index}>{item}</Typography>
                        )
                    })}
                </Box>
            </Box>
            <Box style={{ marginTop: 50 }}>
                <Select
                    size="small"
                    value={10}
                    style={{ border: "1px solid #737373 ", color: "white", marginRight: "2rem", height: 53, width: 154, borderRadius: 2, fontSize: '0.875rem' }}
                    inputProps={{
                        classes: {
                            icon: styleClasses.netflixSelectIconFooter,
                        },
                    }}>

                    <MenuItem value={10}>
                        <Box display="flex" alignItems="center">
                            <LanguageIcon style={{ width: 15, height: 15, fill: "#737373" }} />
                            <Typography style={{ color: "#737373", fontSize: 16, marginLeft: 10, marginRight: 10 }}>English</Typography>
                        </Box>
                    </MenuItem>
                </Select>

                <Typography variant="subtitle1" style={{ color: "#737373", fontSize: 14, marginTop: 24 }}>Netflix Portugal</Typography>
            </Box>
        </Box >
    );
}

