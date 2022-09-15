import React from "react";

import { Box, Button, Chip, Typography } from "@mui/material";
import { TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot } from "@mui/lab"

import { themeColors, experienceTimeLine } from "../../../../style/common";

import "../experience/cards.css"

export default function ExperienceTimeLineItem(props: { logo: string, title: string, description: string, location: string, period: string, src: string }) {
    const styleClasses = experienceTimeLine()

    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
            >
                <Chip label={props.period} style={{ backgroundColor: themeColors.secondary, fontWeight: 700 }} />
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot className={styleClasses.timeLineDot}>
                    <img src={props.logo} alt="" style={{ width: 36, borderRadius: "50%" }} />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Box className={styleClasses.timeLineCard}>
                    <Box display="flex">
                        <Box display="flex" flexDirection="column" alignItems="flex-start" style={{ width: "60%" }}>
                            <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>{props.title}</Typography>
                            <Typography variant="subtitle2">{props.location}</Typography>
                        </Box>
                        <Box display="flex" justifyContent="flex-end" style={{ width: "40%" }}>
                            <Button variant="contained" style={{ color: "white", height: 35 }} onClick={() => window.open(props.src, '_blank')}>Ver mais</Button>
                        </Box>
                    </Box>
                    <Box sx={{ pt: 2 }}>
                        <Typography variant="body1" style={{ textAlign: "left" }}>{props.description}</Typography>
                    </Box>
                </Box>
            </TimelineContent>
        </TimelineItem>

    );
}
