import React from "react";
import "../components/cards.css"

import { Box, Typography } from "@mui/material";

import { homeComponentsStyle } from "../../../style/common";

import { navigate } from "../../../services/utils";

export default function ProjectCard(props: { img: string, title: string, description: string, src: string, logo: string }) {
    const styleClasses = homeComponentsStyle()
    return (
        <Box className="card">
            <Box className="content">
                <Box display="flex" justifyContent="center" alignItems="center" className="front" style={{ background: `url(${props.img})`, backgroundSize: "auto", backgroundRepeat: "no-repeat" }}>
                    <img className={styleClasses.projectCardLogo} src={props.logo} alt="" />
                </Box>
                <Box className="back" onClick={() => navigate(props.src)}>
                    <img className={styleClasses.projectCardImg} src={props.img} alt="" />
                    <Box sx={{ pt: 2, pl: 2 }}>
                        <Typography variant="h5">{props.title}</Typography>
                        <Typography variant="body2" sx={{ pt: 1 }}>{props.description}</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
