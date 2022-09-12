import React from "react";
import Lottie from "react-lottie";

import { Box, Chip, Typography } from "@mui/material";

import * as arrowRight from "../../../../assets/education/arrowRight.json";
import { themeColors } from "../../../../style/common";

export default function EducationCard(props: { school: string, location: string, period: string, text: string, index: number, lastIndex: number }) {
    const defaultOptionsRight = {
        loop: true,
        autoplay: true,
        animationData: arrowRight,
        name: "arrowRight",
    };

    return (
        <>
            <Box sx={{ p: 2, mb: props.lastIndex - 2 < props.index + 1 ? 0 : 5 }} style={{ width: "calc((100% / 2 - (16px * 2)) - 80px)", borderRadius: 6, boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px", height: 140 }}>
                <Box display="flex">
                    <Box style={{ width: "60%" }}>
                        <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>{props.school}</Typography>
                        <Typography variant="subtitle2">{props.location}</Typography>
                    </Box>
                    <Box display="flex" justifyContent="flex-end" style={{ width: "40%" }}>
                        <Chip label={props.period} style={{ backgroundColor: themeColors.secondary, fontWeight: 700 }} />
                    </Box>
                </Box>

                <Box sx={{ pt: 2 }}>
                    <Typography variant="body1">{props.text}</Typography>
                </Box>
            </Box>
            {props.index & 1 ? (
                <> </>
            ) : (
                <React.Fragment>
                    {props.index + 1 !== props.lastIndex && (
                        <Lottie options={defaultOptionsRight} width={160} style={{ margin: 0 }} />
                    )}
                </React.Fragment>
            )}
        </>

    );
}
