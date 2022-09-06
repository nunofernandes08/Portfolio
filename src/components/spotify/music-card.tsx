import React, { useEffect, useState } from "react";
import { Howl } from 'howler';

import { Box, Typography, IconButton, Grid, Stack, Slider } from "@mui/material";
import { useTheme } from '@mui/material/styles';

import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';

import { musicCards } from "../../style/common";

export default function MusicCard(props: { musicImage: string, musicName: string, musicArtist: string, musicSrc: string, theme: string }) {
    const theme = useTheme();
    const card = musicCards()

    const [isPaused, setIsPaused] = useState(true)
    const [sound, setSound] = useState<Howl>();

    const playMusic = () => {
        if (!sound) return
        setIsPaused(false)
        sound.volume(0.3)
        sound.play();
    }

    const pauseMusic = () => {
        if (!sound) return
        setIsPaused(true)
        sound.pause();
    }

    const changeVolume = (e: any) => {
        const value = e.target.value
        sound?.volume(value / 100)
    }

    useEffect(() => {
        setSound(new Howl({
            src: props.musicSrc,
            html5: true,
        }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const lightIconColor = 'rgba(0,0,0,0.4)';

    return (
        <Grid item xs={12}>
            <Box display="flex" style={{ padding: 20 }}>
                <Grid item xs={9} style={{ width: "100%" }}>
                    <Box>
                        <Typography color="secondary" variant="h5">
                            {props.musicName}
                        </Typography>
                        <Typography variant="subtitle1" color="secondary" component="div">
                            {props.musicArtist}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', pb: 1 }}>
                        <IconButton color="secondary" aria-label="previous">
                            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                        </IconButton>
                        {isPaused && (
                            <IconButton aria-label="play/play" onClick={() => playMusic()}>
                                <PlayArrowIcon color="secondary" sx={{ height: 38, width: 38 }} />
                            </IconButton>
                        )}

                        {!isPaused && (
                            <IconButton aria-label="play/pause" onClick={() => pauseMusic()}>
                                <PauseIcon color="secondary" sx={{ height: 38, width: 38 }} />
                            </IconButton>
                        )}

                        <IconButton aria-label="next">
                            {theme.direction === 'rtl' ? <SkipPreviousIcon color="secondary" /> : <SkipNextIcon color="secondary" />}
                        </IconButton>
                    </Box>
                    <Stack spacing={2} direction="row" sx={{ pr: 1 }} alignItems="center">
                        <VolumeDownRounded htmlColor={lightIconColor} />
                        <Slider
                            className={card.slider}
                            defaultValue={30}
                            sx={{
                                color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                            }}
                            onChange={(e) => changeVolume(e)}
                        />
                        <VolumeUpRounded htmlColor={lightIconColor} />
                    </Stack>
                </Grid>
                <Grid item xs={3} >
                    <Box display="flex" justifyContent="flex-end">
                        <img src={props.musicImage} alt="" style={{ width: 151, borderRadius: 10 }} />
                    </Box>
                </Grid>
            </Box>

        </Grid>
    );
}
