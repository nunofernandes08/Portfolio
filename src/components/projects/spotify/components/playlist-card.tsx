import React, { useState } from "react";

import { Box, IconButton, Typography } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";

import { spotifyComponents } from "../../../../style/common";

import { truncateString } from "../../../../services/utils";

export default function PlaylistCard(props: { img: string, title: string, description: string, playMusic: Function, src: string }) {
    const styleClasses = spotifyComponents();

    const [showPlay, setShowPlay] = useState(false)

    return (
        <Box
            display="flex"
            alignItems="flex-start"
            flexDirection="column"
            className={styleClasses.spotifyPlaylistCardContainer}
            onMouseOver={() => setShowPlay(true)}
            onMouseLeave={() => setShowPlay(false)}
        >
            <Box className={styleClasses.spotifyPlaylistCardImg}>
                <img src={props.img} alt="" className={styleClasses.spotifyPlaylistCardImg} />
                {showPlay && (
                    <IconButton className={styleClasses.spotifyPlaylistCardIconButton} onClick={() => props.playMusic(props.src)} >
                        <PlayArrow style={{ fill: "black", width: 30, height: 30 }} />
                    </IconButton>
                )}
            </Box>
            <Box>
                <Typography variant="body2" className={styleClasses.spotifyPlaylistCardTitle}>{props.title}</Typography>
                <Typography variant="body2" className={styleClasses.spotifyPlaylistCardDescription}>{truncateString(props.description)}</Typography>
            </Box>
        </Box >
    );
}
