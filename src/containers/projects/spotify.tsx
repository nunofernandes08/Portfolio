import React, { useEffect } from "react";

import { Box, Stack, IconButton, Slider, Typography, Button } from "@mui/material";

import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';

import Content from "../../components/projects/spotify/components/content";
import SideBar from "../../components/projects/spotify/sidebar";

import { spotifyComponents, themeColorsSpotify } from "../../style/common";

export default function Spotify(props: {
    saveMusic: Function,
    playMusic: Function,
    pauseMusic: Function,
    changeVolume: Function,
    muteSound: Function,
    unmuteSound: Function
    music: any,
    isPaused: boolean,
    isMuted: boolean,
    latestVolume: number,
    volume: number,
    count: string,
    slideValue: number
}) {
    const styleClasses = spotifyComponents()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <React.Fragment>
            <Box display="flex">
                <SideBar />
                <Box style={{ width: "calc(100% - 241px)" }}>
                    <Content playMusic={props.saveMusic} />
                </Box>
            </Box>

            <Box style={{ width: "100%", height: 90, background: themeColorsSpotify.veryDarkGrayColor, position: "sticky", bottom: 0 }}>
                <Box display="flex" alignItems="center" style={{ width: "100%", height: "100%" }}>
                    <Box display="flex" alignItems="center" style={{ width: "20%" }} sx={{ pl: 2 }}>
                        {props.music.artist && (
                            <>
                                <img src={props.music.img} alt="" style={{ width: 56, height: 56 }} />
                                <Box sx={{ pl: 2 }}>
                                    <Typography variant="body1" style={{ color: themeColorsSpotify.whiteColor }}>{props.music.musicName}</Typography>
                                    <Typography variant="body2" style={{ color: themeColorsSpotify.grayColor }}>{props.music.artist}</Typography>
                                </Box>
                                <IconButton sx={{ pl: 3 }}>
                                    <FavoriteBorderIcon style={{ fill: themeColorsSpotify.whiteColor, width: 16, height: 16 }} />
                                </IconButton>
                            </>
                        )}
                    </Box>
                    <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center" style={{ width: "60%" }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton aria-label="previous">
                                {<ShuffleIcon style={{ fill: themeColorsSpotify.whiteColor }} />}
                            </IconButton>

                            <IconButton aria-label="previous">
                                {<SkipPreviousIcon style={{ fill: themeColorsSpotify.whiteColor }} />}
                            </IconButton>

                            {props.isPaused && (
                                <Button onClick={() => props.playMusic()} style={{ backgroundColor: themeColorsSpotify.whiteColor, borderRadius: "50%", minWidth: 0, width: 32, height: 32 }}>
                                    <PlayArrowIcon color="secondary" style={{ fill: themeColorsSpotify.blackColor, width: 25, height: 25 }} />
                                </Button>
                            )}

                            {!props.isPaused && (
                                <Button onClick={() => props.pauseMusic()} style={{ backgroundColor: themeColorsSpotify.whiteColor, borderRadius: "50%", minWidth: 0, width: 32, height: 32 }}>
                                    <PauseIcon color="secondary" style={{ fill: themeColorsSpotify.blackColor, width: 25, height: 25 }} />
                                </Button>
                            )}

                            <IconButton aria-label="next">
                                {<SkipNextIcon color="secondary" style={{ fill: themeColorsSpotify.whiteColor }} />}
                            </IconButton>

                            <IconButton aria-label="next">
                                {<RepeatIcon color="secondary" style={{ fill: themeColorsSpotify.whiteColor }} />}
                            </IconButton>
                        </Box>
                        <Stack spacing={2} direction="row" sx={{ pr: 1 }} alignItems="center" style={{ width: "60%" }}>
                            <Typography variant="body2" style={{ color: themeColorsSpotify.whiteColor }}>{props.count}</Typography>
                            <Slider
                                className={styleClasses.spotifyPlayerSlider}
                                defaultValue={0}
                                value={props.slideValue}
                                sx={{
                                    color: themeColorsSpotify.veryDarkGrayDarkerColor,
                                }}
                            // onChange={(e) => seekMusic(e)}
                            />
                            <Typography variant="body2" style={{ color: themeColorsSpotify.whiteColor }}>{props.music.time}</Typography>
                        </Stack>
                    </Box>
                    <Box display="flex" justifyContent="flex-end" style={{ width: "20%" }} sx={{ pr: 2 }}>
                        <Stack spacing={2} direction="row" sx={{ pr: 1 }} alignItems="center" style={{ width: "40%" }}>
                            {!props.isMuted && (
                                <IconButton sx={{ p: 0 }} onClick={() => props.muteSound()}>
                                    {<VolumeDownIcon style={{ fill: themeColorsSpotify.whiteColor }} />}
                                </IconButton>
                            )}
                            {props.isMuted && (
                                <IconButton sx={{ p: 0 }} onClick={() => props.unmuteSound()}>
                                    {<VolumeMuteIcon style={{ fill: themeColorsSpotify.whiteColor }} />}
                                </IconButton>
                            )}

                            <Slider
                                className={styleClasses.spotifyPlayerSlider}
                                defaultValue={100}
                                sx={{
                                    color: themeColorsSpotify.veryDarkGrayDarkerColor,
                                }}
                                value={props.volume}
                                onChange={(e) => props.changeVolume(e)}
                            />
                        </Stack>
                    </Box>
                </Box>
            </Box>

        </React.Fragment>
    );
}
