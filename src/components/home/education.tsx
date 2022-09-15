import React from "react";
import { useTranslation } from "react-i18next";

import { Box } from "@mui/material";

import GeneralBox from "./components/general-box";
import EducationCard from "./components/education/education-cards";

import { educationSchools } from "../../api/home/service";

import { EducationSchool } from "../../types";

export default function Education() {
    const { t } = useTranslation();

    return (
        <GeneralBox title={t("HOME.COMPONENTS_TITLES.EDUCATION")}>
            <Box display="flex" flexWrap="wrap">
                {educationSchools.map((item: EducationSchool, index: number) => (
                    <React.Fragment key={index}>
                        <EducationCard
                            school={t(item.school)}
                            location={item.location}
                            period={item.period}
                            text={t(item.text)}
                            index={index}
                            lastIndex={educationSchools.length}
                        />
                    </React.Fragment>
                ))}
            </Box>
        </GeneralBox>
    );
}
