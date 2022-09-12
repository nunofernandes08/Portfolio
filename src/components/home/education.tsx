import React from "react";

import { Box } from "@mui/material";

import GeneralBox from "./components/general-box";
import EducationCard from "./components/education/education-cards";

const educations = [{
    school: "Escola Bernardino Machado",
    location: "Vila Nova de Famalicão",
    period: "Sept 2012 - Jul 2015",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
}, {
    school: "Escola Padre Benjamim Salgado",
    location: "Vila Nova de Famalicão",
    period: "Sept 2015 - Jul 2019",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
}, {
    school: "Inst. Politécnico do Cávado e Ave",
    location: "Guimarães",
    period: "Sept 2019 - Jul 2021",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
}]

export default function Education() {
    return (
        <GeneralBox title="Education">
            <Box display="flex" flexWrap="wrap">
                {educations.map((item, index) => (
                    <React.Fragment key={index}>
                        <EducationCard
                            school={item.school}
                            location={item.location}
                            period={item.period}
                            text={item.text}
                            index={index}
                            lastIndex={educations.length}
                        />
                    </React.Fragment>
                ))}
            </Box>
        </GeneralBox>
    );
}
