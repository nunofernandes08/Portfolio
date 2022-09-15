import React from "react";
import Lottie from "react-lottie";
import { useNavigate } from 'react-router-dom';

import { Box, Typography } from "@mui/material";

import * as spotify from "../../../../assets/projects/spotify.json";
import * as netflix from "../../../../assets/projects/netflix.json";
import * as amazon from "../../../../assets/projects/amazon.json";
import * as youtube from "../../../../assets/projects/youtube.json";
import * as reddit from "../../../../assets/projects/reddit.json";
import * as facebook from "../../../../assets/projects/facebook.json";
import * as linkedin from "../../../../assets/projects/linkedin.json";

import { Projects } from "../../../../types";

import "../projects/cards.css"

export default function ProjectCard(props: { img: string, title: string, description: string, src: string, index: number, length: number }) {
    const navigate = useNavigate();

    const findLogoAndName = (title: string) => {
        switch (title) {
            case Projects.SPOTIFY:
                return {
                    logo: spotify,
                    name: Projects.SPOTIFY
                };
            case Projects.NETFLIX:
                return {
                    logo: netflix,
                    name: Projects.NETFLIX
                };
            case Projects.AMAZON:
                return {
                    logo: amazon,
                    name: Projects.AMAZON
                };
            case Projects.YOUTUBE:
                return {
                    logo: youtube,
                    name: Projects.YOUTUBE
                };
            case Projects.REDDIT:
                return {
                    logo: reddit,
                    name: Projects.REDDIT
                };
            case Projects.FACEBOOK:
                return {
                    logo: facebook,
                    name: Projects.FACEBOOK
                };
            case Projects.LINKEDIN:
                return {
                    logo: linkedin,
                    name: Projects.LINKEDIN
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
