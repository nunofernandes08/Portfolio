import React from "react";

import { Box } from "@mui/material";

import GeneralBox from "./components/general-box";
import ProjectCard from "./components/projects/project-card";

const projects = [{
    img: "https://ishoppingstar.com/wp-content/uploads/2022/03/60c27838dcd6e.jpg",
    title: "Spotify",
    description: "Spotify is a proprietary Swedish audio streaming and media services provider founded on 23 April 2006 by Daniel Ek and Martin Lorentzon.",
    src: "spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png"
}, {
    img: "https://arena.rtp.pt/wp-content/uploads/2021/05/netflix.png",
    title: "Netflix",
    description: "Netflix, Inc. is an American subscription streaming service and production company based in Los Gatos, California.",
    src: "netflix",
    logo: "https://png.monster/wp-content/uploads/2022/02/png.monster-697.png"

}, {
    img: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/05/amazon.jpg",
    title: "Amazon",
    description: "Amazon.com, Inc. is an American multinational technology company which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    src: "amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png"
}]

export default function Projects() {
    return (
        <GeneralBox title="Projects">
            <Box display="flex" flexWrap="wrap" justifyContent="space-between">
                {projects.map((project, index) => (
                    <ProjectCard key={index} img={project.img} title={project.title} description={project.description} src={project.src} logo={project.logo} />
                ))}
            </Box>
        </GeneralBox>
    );
}
