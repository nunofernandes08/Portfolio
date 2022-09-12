import React from "react";

import { Box } from "@mui/material";

import GeneralBox from "./components/general-box";
import ProjectCard from "./components/projects/project-card";

const projects = [{
    img: "https://ishoppingstar.com/wp-content/uploads/2022/03/60c27838dcd6e.jpg",
    title: "Spotify",
    description: "Spotify is a proprietary Swedish audio streaming and media services provider founded on 23 April 2006 by Daniel Ek and Martin Lorentzon.",
    src: "spotify",
}, {
    img: "https://arena.rtp.pt/wp-content/uploads/2021/05/netflix.png",
    title: "Netflix",
    description: "Netflix, Inc. is an American subscription streaming service and production company based in Los Gatos, California.",
    src: "netflix",

}, {
    img: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/05/amazon.jpg",
    title: "Amazon",
    description: "Amazon.com, Inc. is an American multinational technology company which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    src: "amazon",
}, {
    img: "https://wallpaper.dog/large/977108.jpg",
    title: "Youtube",
    description: "YouTube is an American online video sharing and social media platform headquartered in San Bruno, California.",
    src: "youtube",
}]

export default function Projects() {
    return (
        <GeneralBox title="Projects">
            <Box display="flex" flexWrap="wrap" justifyContent="space-between">
                {projects.map((project, index) => (
                    <ProjectCard key={index} img={project.img} title={project.title} description={project.description} src={project.src} index={index} length={projects.length} />
                ))}
            </Box>
        </GeneralBox>
    );
}
