import React from "react";

import Navbar from "./navbar";
import Playlists from "./playlists";

export default function Content(props: { playMusic: Function }) {
    return (
        <React.Fragment>
            <Navbar />
            <Playlists playMusic={props.playMusic} />
        </React.Fragment>
    );
}
