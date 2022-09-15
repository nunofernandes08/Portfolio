import React from "react";

import { Box, Card, CardContent, IconButton, Slider, Stack, Typography } from "@mui/material";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PauseIcon from '@mui/icons-material/Pause';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import { spotifyComponents, themeColors, themeColorsSpotify } from "../style/common";

import { Music } from "../types";

const Slide = require("react-reveal/Slide")

export default function AppMediaPlayer(props: {
    playMusic: Function,
    pauseMusic: Function,
    isPaused: boolean,
    count: string,
    music: Music,
    slideValue: number,
    stopMusic: Function
}) {
    const spotifyStyleClasses = spotifyComponents()

    return (
        <Slide bottom>
            <Card sx={{ display: 'flex', width: 300, backgroundColor: themeColors.primary, borderRadius: 5 }} >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: "100%", p: 1 }}>
                    <IconButton style={{ position: 'absolute', top: 0, right: 0 }} onClick={() => { props.stopMusic() }}>
                        <HighlightOffIcon style={{ fill: themeColors.secondary }} />
                    </IconButton>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 0 }}>
                        <Typography variant="subtitle1" style={{ fontWeight: 'bold', color: themeColors.secondary }}>
                            {props.music.musicName}
                        </Typography>
                        <Typography variant="subtitle2" style={{ color: themeColors.secondaryLight }}>
                            {props.music.artist}
                        </Typography>
                    </CardContent>
                    <Stack spacing={2} direction="row" alignItems="center" style={{ width: "90%" }}>
                        <Typography variant="body2" style={{ color: themeColors.secondaryLight, fontSize: 12 }}>{props.count}</Typography>
                        <Slider
                            className={spotifyStyleClasses.spotifyPlayerSliderAppTsx}
                            defaultValue={0}
                            value={props.slideValue}
                            sx={{
                                color: themeColorsSpotify.veryDarkGrayDarkerColor,
                                p: 0
                            }}
                        />
                        <Typography variant="body2" style={{ color: themeColors.secondaryLight, fontSize: 12 }}>{props.music.time}</Typography>
                    </Stack>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton aria-label="previous" sx={{ pt: 0, pb: 0 }}>
                            <SkipPreviousIcon style={{ fill: themeColors.secondary }} />
                        </IconButton>
                        {props.isPaused && (
                            <IconButton aria-label="play/play" onClick={() => props.playMusic()}>
                                <PlayArrowIcon sx={{ height: 30, width: 30 }} style={{ fill: themeColors.secondary }} />
                            </IconButton>
                        )}

                        {!props.isPaused && (
                            <IconButton aria-label="play/pause" onClick={() => props.pauseMusic()}>
                                <PauseIcon sx={{ height: 30, width: 30 }} style={{ fill: themeColors.secondary }} />
                            </IconButton>
                        )}
                        <IconButton aria-label="next" sx={{ pt: 0, pb: 0 }}>
                            <SkipNextIcon style={{ fill: themeColors.secondary }} />
                        </IconButton>
                    </Box>
                </Box>
            </Card >
        </Slide >

    );
}
