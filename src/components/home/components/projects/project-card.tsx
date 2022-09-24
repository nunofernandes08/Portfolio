import React from "react";
import Lottie from "react-lottie";
import { useNavigate } from 'react-router-dom';

import { Box, Typography } from "@mui/material";

import { findLogoAndName } from "../../../../services/utils";

import "../projects/cards.css"

export default function ProjectCard(props: { img: string, title: string, description: string, src: string, index: number, length: number }) {
    const navigate = useNavigate();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: findLogoAndName(props.title).logo,
        name: findLogoAndName(props.title).name,
    };

    return (
        <Box className="card" onClick={() => navigate(`/${props.src}`)} sx={{ mb: props.length - 3 < props.index + 1 ? 0 : 7 }}>
            <Box className="content">
                <Box display="flex" alignItems="center" justifyContent=" center" flexDirection="column" className="front" style={{ background: `url(${props.img})`, backgroundSize: "auto", backgroundRepeat: "no-repeat" }}>
                    <Lottie options={defaultOptions} width={250} height={250} style={{ margin: 0 }} />
                </Box>
                <Box className="back">
                    <Box style={{ background: `url(${props.img})`, backgroundSize: "auto", backgroundRepeat: "no-repeat", borderRadius: "6px 6px 0px 0px" }}>
                        <Lottie options={defaultOptions} width={300} height={130} style={{ margin: 0 }} />
                    </Box>
                    <Box sx={{ p: 2 }}>
                        <Typography variant="h5" color="primary">{props.title}</Typography>
                        <Typography variant="body2" sx={{ pt: 1 }}>{props.description}</Typography>
                    </Box>
                </Box>
            </Box>
        </Box >
    );
}
