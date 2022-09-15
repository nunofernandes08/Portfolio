import React, { useCallback, useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";

import { Box, Button } from "@mui/material";

import GeneralBox from "./components/general-box";
import ProjectCard from "./components/projects/project-card";

import { allProjects } from "../../api/home/service";

import { Project } from "../../types";

const Slide = require("react-reveal/Slide")

export default function Projects() {
    const [projects, setProjects] = useState<Project[]>(allProjects.slice(0, 3))
    const [alreadyAdded, setAlreadyAdded] = useState(false)
    const [y, setY] = useState(window.scrollY);
    const ref = useRef()

    const { t } = useTranslation();

    const moreProjects = () => {
        const lastItems = projects.length
        let data = projects
        data = data.concat(allProjects.slice(lastItems, lastItems + 3))

        setProjects(data)
        setAlreadyAdded(!alreadyAdded)
    }

    const handleNavigation = useCallback(
        (e: any) => {
            const window = e.currentTarget;
            if (y > window.scrollY) {
                if (window.scrollY === 0) {
                    setProjects(allProjects.slice(0, 3))
                }
            }
            setY(window.scrollY);
        }, [y]
    );

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    return (
        <GeneralBox title={t("HOME.COMPONENTS_TITLES.PROJECTS")}>
            <Box display="flex" flexWrap="wrap" justifyContent="space-between" ref={ref}>
                <Slide bottom>
                    {projects.map((project: Project, index: number) => (
                        <ProjectCard key={index} img={project.img} title={project.title} description={t(project.description)} src={project.src} index={index} length={projects.length} />
                    ))}
                </Slide>
            </Box>
            {Number.isInteger(projects.length / 3) && (
                <Slide bottom>
                    <Box display="flex" justifyContent="center" sx={{ pt: 8 }}>
                        <Button variant="contained" color="secondary" style={{ textTransform: 'none', fontWeight: 'bold' }} onClick={moreProjects}>{t("GENERAL.LOAD_MORE")}</Button>
                    </Box>
                </Slide>
            )}
        </GeneralBox>
    );
}
