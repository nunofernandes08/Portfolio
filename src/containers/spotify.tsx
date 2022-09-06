import React, { useEffect, useState } from "react";
import { Howl } from 'howler';

import { Box, Stack, IconButton, Slider, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';

import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';

import Content from "../components/spotify/components/content";
import SideBar from "../components/spotify/sidebar";

import { musicCards } from "../style/common";

import { chooseMusic, timeFormat } from "../services/utils";

export default function Spotify(props: { theme: string }) {
    const theme = useTheme();
    const card = musicCards()

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
        const withoutPaths = musicSrc.replace("/static/media/", "")
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

    const seekMusic = (e: any) => {
        const value = e.target.value
        sound?.seek(value)
    }

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

    const slideFormat = (diff: any, isPaused: boolean) => {
        if (!diff || isPaused) return 0

        const musicTotal = parseInt(music.total.replaceAll(":", "").substring(3, 6))
        const timer = parseInt(diff.toLocaleTimeString().replaceAll(":", "").substring(3, 6)) as number

        return (timer / musicTotal) * 100
    }

    return (
        <React.Fragment>
            <Box display="flex">
                <SideBar />
                <Box style={{ width: "calc(100% - 241px)" }}>
                    <Content playMusic={saveMusic} />
                </Box>
            </Box>

            <Box style={{ width: "100%", height: 90, background: "#181818", position: "sticky", bottom: 0 }}>
                <Box display="flex" alignItems="center" style={{ width: "100%", height: "100%" }}>
                    <Box display="flex" alignItems="center" style={{ width: "20%" }} sx={{ pl: 2 }}>
                        {music.artist && (
                            <>
                                <img src={music.img} alt="" style={{ width: 56, height: 56 }} />
                                <Box sx={{ pl: 2 }}>
                                    <Typography variant="body1" style={{ color: "white" }}>{music.musicName}</Typography>
                                    <Typography variant="body2" style={{ color: "#b3b3b3" }}>{music.artist}</Typography>
                                </Box>
                                <IconButton sx={{ pl: 3 }}>
                                    <FavoriteBorderIcon style={{ fill: "white", width: 16, height: 16 }} />
                                </IconButton>
                            </>
                        )}
                    </Box>
                    <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center" style={{ width: "60%" }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton aria-label="previous">
                                {<ShuffleIcon style={{ fill: "white" }} />}
                            </IconButton>

                            <IconButton aria-label="previous">
                                {<SkipPreviousIcon style={{ fill: "white" }} />}
                            </IconButton>

                            {isPaused && (
                                <IconButton aria-label="play/play" onClick={() => playMusic()}>
                                    <PlayArrowIcon color="secondary" sx={{ height: 38, width: 38 }} style={{ fill: "black", backgroundColor: "white", borderRadius: "50%", width: 32, height: 32 }} />
                                </IconButton>
                            )}

                            {!isPaused && (
                                <IconButton aria-label="play/pause" onClick={() => pauseMusic()}>
                                    <PauseIcon color="secondary" sx={{ height: 38, width: 38 }} style={{ fill: "black", backgroundColor: "white", borderRadius: "50%", width: 32, height: 32 }} />
                                </IconButton>
                            )}

                            <IconButton aria-label="next">
                                {<SkipNextIcon color="secondary" style={{ fill: "white" }} />}
                            </IconButton>

                            <IconButton aria-label="next">
                                {<RepeatIcon color="secondary" style={{ fill: "white" }} />}
                            </IconButton>
                        </Box>
                        <Stack spacing={2} direction="row" sx={{ pr: 1 }} alignItems="center" style={{ width: "60%" }}>
                            <Typography variant="body2" style={{ color: "white" }}>{!isPaused ? timeFormat(diff).text : "0:00"}</Typography>
                            <Slider
                                className={card.slider}
                                defaultValue={0}
                                value={slideFormat(diff, isPaused)}
                                sx={{
                                    color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                                }}
                            // onChange={(e) => seekMusic(e)}
                            />
                            <Typography variant="body2" style={{ color: "white" }}>{music.time}</Typography>
                        </Stack>
                    </Box>
                    <Box display="flex" justifyContent="flex-end" style={{ width: "20%" }} sx={{ pr: 2 }}>
                        <Stack spacing={2} direction="row" sx={{ pr: 1 }} alignItems="center" style={{ width: "40%" }}>
                            {!isMuted && (
                                <IconButton sx={{ p: 0 }} onClick={muteSound}>
                                    {<VolumeDownIcon style={{ fill: "white" }} />}
                                </IconButton>
                            )}
                            {isMuted && (
                                <IconButton sx={{ p: 0 }} onClick={unmuteSound}>
                                    {<VolumeMuteIcon style={{ fill: "white" }} />}
                                </IconButton>
                            )}

                            <Slider
                                className={card.slider}
                                defaultValue={100}
                                sx={{
                                    color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
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
