import React from "react";

import { Box } from "@mui/material";

import GeneralBox from "./components/general-box";
import EducationCard from "./components/edutcation/education-cards";

const educations = [{
    school: "Lorem Ipsum is simply",
    location: "Lorem Ipsum",
    period: "jan 2020 - jan 2021",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
}, {
    school: "Lorem Ipsum is simply",
    location: "Lorem Ipsum",
    period: "jan 2020 - jan 2021",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
}, {
    school: "Lorem Ipsum is simply",
    location: "Lorem Ipsum",
    period: "jan 2020 - jan 2021",
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
