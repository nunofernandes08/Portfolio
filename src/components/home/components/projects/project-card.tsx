import React from "react";
import Lottie from "react-lottie";
import { useNavigate } from 'react-router-dom';

import "../projects/cards.css"

import { Box, Typography } from "@mui/material";

import * as spotify from "../../../../assets/projects/spotify.json";
import * as netflix from "../../../../assets/projects/netflix.json";
import * as amazon from "../../../../assets/projects/amazon.json";

export default function ProjectCard(props: { img: string, title: string, description: string, src: string, logo: string }) {
    const navigate = useNavigate();

    const findLogoAndName = (title: string) => {
        switch (title) {
            case 'Spotify':
                return {
                    logo: spotify,
                    name: 'spotify'
                };
            case 'Netflix':
                return {
                    logo: netflix,
                    name: 'netflix'
                };
            case 'Amazon':
                return {
                    logo: amazon,
                    name: 'amazon'
                };
            default:
                return {
                    logo: undefined,
                    name: ''
                };
        }
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: findLogoAndName(props.title).logo,
        name: findLogoAndName(props.title).name,
    };

    return (
        <Box className="card">
            <Box className="content">
                <Box display="flex" alignItems="center" justifyContent=" center" flexDirection="column" className="front" style={{ background: `url(${props.img})`, backgroundSize: "auto", backgroundRepeat: "no-repeat" }}>
                    <Lottie options={defaultOptions} width={250} height={250} style={{ margin: 0 }} />
                </Box>
                <Box className="back" onClick={() => navigate(`/${props.src}`)}>
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
