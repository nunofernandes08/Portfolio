import React, { useEffect } from "react";

import Welcome from "../../components/projects/netflix/welcome";
import Hr from "../../components/projects/netflix/hr"
import Container from "../../components/projects/netflix/container"
import ComponentLeft from "../../components/projects/netflix/component-left";
import ComponentRight from "../../components/projects/netflix/component-right";
import FrequentlyAskedQuestion from "../../components/projects/netflix/frequently-asked-questions";

import { containers } from "../../api/netflix/service";
import { PositionContainer } from "../../types";
import Footer from "../../components/projects/netflix/footer";

export default function Netflix() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <React.Fragment>
            <Welcome />
            <Hr />
            {containers.map((container, index) => {
                return (
                    <React.Fragment key={index}>
                        <Container>
                            {container.position === PositionContainer.LEFT ? (
                                <ComponentLeft img={container.img} title={container.title} description={container.description} />
                            ) : (
                                <ComponentRight img={container.img} title={container.title} description={container.description} />
                            )}
                        </Container>
                        <Hr />
                    </React.Fragment>
                )
            })}
            <FrequentlyAskedQuestion />
            <Hr />
            <Footer />
        </React.Fragment>
    );
}
