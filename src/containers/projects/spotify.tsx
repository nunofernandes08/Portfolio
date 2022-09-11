import React, { useEffect, useState } from "react";
import { Howl } from 'howler';

import { Box, Stack, IconButton, Slider, Typography } from "@mui/material";

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

import { chooseMusic, slideFormat, timeFormat } from "../../services/utils";

export default function Spotify() {
    const styleClasses = spotifyComponents()

    const [isPaused, setIsPaused] = useState(true)
    const [isMuted, setIsMuted] = useState(false)
    const [sound, setSound] = useState<Howl>();
    const [volume, setVolume] = useState(100);
    const [latestVolume, setLatestVolume] = useState(100);
    const [diff, setDiff] = useState<any>();
    const [initial, setInitial] = useState<any>();
    const [music, setMusic] = useState({ id: "", artist: "", img: "", musicName: "", time: "0:00", total: "" })

    const tick = () => {
        setDiff(new Date(+new Date() - initial))
    }

    const start = () => {
        setInitial(+new Date())
    }

    const saveMusic = (musicSrc: string) => {
        setSound(new Howl({
            src: musicSrc,
            html5: true,
        }))
        const withoutPaths = musicSrc.replace("/Portfolio/static/media/", "")
        const withoutFirst = withoutPaths.substring(0, musicSrc.indexOf("."))
        const musicId = withoutFirst.substring(0, withoutFirst.indexOf("."))

        setMusic(chooseMusic(musicId))
    }

    const playMusic = () => {
        if (!sound) return
        setIsPaused(false)
        sound.volume(volume)
        sound.play();
        start()
    }

    const pauseMusic = () => {
        if (!sound) return
        setIsPaused(true)
        sound.pause();
        setDiff(0)
    }

    const changeVolume = (e: any) => {
        const value = e.target.value
        sound?.volume(value / 100)
        setVolume(value)
        setLatestVolume(value)
    }

    // const seekMusic = (e: any) => {
    //     const value = e.target.value
    //     sound?.seek(value)
    // }

    const muteSound = () => {
        sound?.volume(0)
        setIsMuted(true)
        setVolume(0)
    }

    const unmuteSound = () => {
        sound?.volume(latestVolume / 100)
        setVolume(latestVolume)
        setIsMuted(false)
    }

    useEffect(() => {
        playMusic()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sound])

    useEffect(() => {
        if (initial) {
            requestAnimationFrame(tick)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initial])

    useEffect(() => {
        if (diff) {
            requestAnimationFrame(tick)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [diff])

    return (
        <React.Fragment>
            <Box display="flex">
                <SideBar />
                <Box style={{ width: "calc(100% - 241px)" }}>
                    <Content playMusic={saveMusic} />
                </Box>
            </Box>

            <Box style={{ width: "100%", height: 90, background: themeColorsSpotify.veryDarkGrayColor, position: "sticky", bottom: 0 }}>
                <Box display="flex" alignItems="center" style={{ width: "100%", height: "100%" }}>
                    <Box display="flex" alignItems="center" style={{ width: "20%" }} sx={{ pl: 2 }}>
                        {music.artist && (
                            <>
                                <img src={music.img} alt="" style={{ width: 56, height: 56 }} />
                                <Box sx={{ pl: 2 }}>
                                    <Typography variant="body1" style={{ color: themeColorsSpotify.whiteColor }}>{music.musicName}</Typography>
                                    <Typography variant="body2" style={{ color: themeColorsSpotify.grayColor }}>{music.artist}</Typography>
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

                            {isPaused && (
                                <IconButton aria-label="play/play" onClick={() => playMusic()}>
                                    <PlayArrowIcon color="secondary" sx={{ height: 38, width: 38 }} style={{ fill: themeColorsSpotify.blackColor, backgroundColor: themeColorsSpotify.whiteColor, borderRadius: "50%", width: 32, height: 32 }} />
                                </IconButton>
                            )}

                            {!isPaused && (
                                <IconButton aria-label="play/pause" onClick={() => pauseMusic()}>
                                    <PauseIcon color="secondary" sx={{ height: 38, width: 38 }} style={{ fill: themeColorsSpotify.blackColor, backgroundColor: themeColorsSpotify.whiteColor, borderRadius: "50%", width: 32, height: 32 }} />
                                </IconButton>
                            )}

                            <IconButton aria-label="next">
                                {<SkipNextIcon color="secondary" style={{ fill: themeColorsSpotify.whiteColor }} />}
                            </IconButton>

                            <IconButton aria-label="next">
                                {<RepeatIcon color="secondary" style={{ fill: themeColorsSpotify.whiteColor }} />}
                            </IconButton>
                        </Box>
                        <Stack spacing={2} direction="row" sx={{ pr: 1 }} alignItems="center" style={{ width: "60%" }}>
                            <Typography variant="body2" style={{ color: themeColorsSpotify.whiteColor }}>{!isPaused ? timeFormat(diff).text : "0:00"}</Typography>
                            <Slider
                                className={styleClasses.spotifyPlayerSlider}
                                defaultValue={0}
                                value={slideFormat(diff, isPaused, music)}
                                sx={{
                                    color: themeColorsSpotify.veryDarkGrayDarkerColor,
                                }}
                            // onChange={(e) => seekMusic(e)}
                            />
                            <Typography variant="body2" style={{ color: themeColorsSpotify.whiteColor }}>{music.time}</Typography>
                        </Stack>
                    </Box>
                    <Box display="flex" justifyContent="flex-end" style={{ width: "20%" }} sx={{ pr: 2 }}>
                        <Stack spacing={2} direction="row" sx={{ pr: 1 }} alignItems="center" style={{ width: "40%" }}>
                            {!isMuted && (
                                <IconButton sx={{ p: 0 }} onClick={muteSound}>
                                    {<VolumeDownIcon style={{ fill: themeColorsSpotify.whiteColor }} />}
                                </IconButton>
                            )}
                            {isMuted && (
                                <IconButton sx={{ p: 0 }} onClick={unmuteSound}>
                                    {<VolumeMuteIcon style={{ fill: themeColorsSpotify.whiteColor }} />}
                                </IconButton>
                            )}

                            <Slider
                                className={styleClasses.spotifyPlayerSlider}
                                defaultValue={100}
                                sx={{
                                    color: themeColorsSpotify.veryDarkGrayDarkerColor,
                                }}
                                value={volume}
                                onChange={(e) => changeVolume(e)}
                            />
                        </Stack>
                    </Box>
                </Box>
            </Box>

        </React.Fragment>
    );
}
