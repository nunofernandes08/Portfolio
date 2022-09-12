import React from "react";
import { Timeline } from "@mui/lab";

import GeneralBox from "./components/general-box";
import ExperienceTimeLineItem from "./components/experience/experience-timeline-item";

import inflight from "../../assets/experience/inflightit.png"
import avidsoft from "../../assets/experience/avidsoft.jpeg"
import vimaponto from "../../assets/experience/vimaponto.jpeg"
import scion from "../../assets/experience/scion.jpeg"
import { experienceTimeLine } from "../../style/common";

const companys = [{
    logo: avidsoft,
    title: "Avidsoft",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    src: "https://avidsoft.net/",
    location: "Vila Nova de Famalicão",
    period: "Jun 2018 - Jul 2018"
}, {
    logo: vimaponto,
    title: "Vimaponto",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    src: "https://vimaponto.com/",
    location: "Guimarães",
    period: "May 2019 - Jul 2019"
}, {
    logo: scion,
    title: "Scion Labs",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    src: "https://www.google.com/search?q=scion+labs&oq=scion+labs&aqs=chrome.0.69i59l2j0i10i22i30j0i22i30j69i65j69i60.2927j1j4&sourceid=chrome&ie=UTF-8",
    location: "Guimarães",
    period: "Feb 2021 - Jul 2021"
}, {
    logo: inflight,
    title: "InflightIT",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    src: "https://www.inflightit.com/",
    location: "Guimarães",
    period: "Dec 2021 - current"
}]

export default function Experience() {
    const styleClasses = experienceTimeLine()
    return (
        <GeneralBox title="Experience">
            <Timeline position="alternate" className={styleClasses.timeLineItem}>
                {companys.map((company, index) => (
                    <ExperienceTimeLineItem key={index} logo={company.logo} title={company.title} description={company.description} location={company.location} period={company.period} src={company.src} />
                ))}
            </Timeline>
        </GeneralBox>
    );
}
