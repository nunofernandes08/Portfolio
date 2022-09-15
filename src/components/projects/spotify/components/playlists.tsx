import React from "react";

import { Box, Typography } from "@mui/material";

import PlaylistCard from "./playlist-card";

import { SpotifyContainer, SpotifyPlaylistCard } from "../../../../types";

import { themeColorsSpotify } from "../../../../style/common";

import { containers } from "../../../../api/spotify/service";

export default function Playlists(props: { playMusic: Function }) {
    return (
        <Box style={{ padding: 20, paddingLeft: 32, paddingRight: 32 }}>
            {containers.map((container: SpotifyContainer, containerIndex: number) => (
                <Box sx={{ mt: containerIndex !== 0 ? 4 : 0 }} key={containerIndex}>
                    <Typography variant="h5" style={{ color: themeColorsSpotify.whiteColor, fontSize: 22 }}>{container.title}</Typography>

                    <Box display="flex" flexWrap="wrap" sx={{ mt: 3 }}>
                        {container.musics.map((musics: SpotifyPlaylistCard, musicIndex: number) => (
                            <Box sx={{ pr: musicIndex + 1 === container.musics.length ? 0 : 3 }} key={musicIndex}>
                                <PlaylistCard img={musics.img} title={musics.title} description={musics.description} playMusic={props.playMusic} src={musics.src} />
                            </Box>
                        ))}
                    </Box>
                </Box>
            ))}
        </Box >
    );
}
