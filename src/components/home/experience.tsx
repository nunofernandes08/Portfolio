import React from "react";

import { Timeline } from "@mui/lab";

import GeneralBox from "./components/general-box";
import ExperienceTimeLineItem from "./components/experience/experience-timeline-item";

import { experienceCompanys } from "../../api/home/service";

import { experienceTimeLine } from "../../style/common";

import { ExperienceCompany } from "../../types";
import { useTranslation } from "react-i18next";

export default function Experience() {
    const styleClasses = experienceTimeLine()
    const { t } = useTranslation();
    return (
        <GeneralBox title={t("HOME.COMPONENTS_TITLES.EXPERIENCE")}>
            <Timeline position="alternate" className={styleClasses.timeLineItem}>
                {experienceCompanys.map((company: ExperienceCompany, index: number) => (
                    <ExperienceTimeLineItem key={index} logo={company.logo} title={company.title} description={t(company.description)} location={company.location} period={company.period} src={company.src} />
                ))}
            </Timeline>
        </GeneralBox>
    );
}
