import React from "react";

import Welcome from "../../components/projects/netflix/welcome";
import Hr from "../../components/projects/netflix/hr"
import Container from "../../components/projects/netflix/container"
import WatchTv from "../../components/projects/netflix/watchTv"

export default function Netflix() {
    return (
        <React.Fragment>
            <Welcome />
            <Hr />
            <Container>
                <WatchTv />
            </Container>
            <Hr />
        </React.Fragment>
    );
}
