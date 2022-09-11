import React from "react";
import Lottie from "react-lottie";

import { Box, Chip, Typography } from "@mui/material";

import * as arrowRight from "../../../../assets/education/arrowRight.json";

export default function EducationCard(props: { school: string, location: string, period: string, text: string, index: number, lastIndex: number }) {
    const defaultOptionsRight = {
        loop: true,
        autoplay: true,
        animationData: arrowRight,
        name: "arrowRight",
    };

    return (
        <>
            <Box sx={{ p: 2, mb: 5 }} style={{ width: "calc((100% / 2 - (16px * 2)) - 80px)", borderRadius: 6, boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px" }}>
                <Box display="flex">
                    <Box style={{ width: "50%" }}>
                        <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>{props.school}</Typography>
                        <Typography variant="subtitle2">{props.location}</Typography>
                    </Box>
                    <Box display="flex" justifyContent="flex-end" style={{ width: "50%" }}>
                        <Chip label={props.period} />
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
