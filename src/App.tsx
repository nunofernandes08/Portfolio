import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation
} from "react-router-dom";
import Lottie from "react-lottie";
import { Howl } from 'howler';
import { useStopwatch } from 'react-timer-hook';

import {
  Box
} from "@mui/material";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";

import Home from "./containers/home";
import Spotify from "./containers/projects/spotify";
import Photography from "./containers/photography";
import Netflix from "./containers/projects/netflix";

import {
  setupTheme,
  setupI18n,
} from "./core/general-setup";
import { Paths } from "./types";
import * as robot from "./assets/robot.json";
import AppMediaPlayer from "./components/app-media-player";
import { backgroundColor, chooseMusic, slideFormat, timeFormat } from "./services/utils";

import DisclaimerDialog from "./components/disclaimer-dialog";

import "./App.css";

setupI18n();
const theme = setupTheme();

export default function App() {
  const [sound, setSound] = useState<Howl>();

  const [volume, setVolume] = useState(100);
  const [latestVolume, setLatestVolume] = useState(100);

  const [music, setMusic] = useState({ id: "", artist: "", img: "", musicName: "", time: "0:00", total: "" })

  const [showBot, setShowBot] = useState(true);
  const [isPaused, setIsPaused] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [started, setStarted] = useState(true)
  const [openDialog, setOpenDialog] = useState(true);

  const {
    seconds,
    minutes,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });

  const count = timeFormat(minutes, seconds)
  const slideValue = slideFormat(count, started, music)

  const location = useLocation();
  const currentPath = location.pathname

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: robot,
    name: "robot",
  };

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
    setStarted(false)
    if (isPaused) start();
  }

  const pauseMusic = () => {
    if (!sound) return
    setIsPaused(true)
    sound.pause();
    pause();
  }

  const stopMusic = () => {
    if (!sound) return
    sound.stop();
    reset();
    pause();
    setIsPaused(true)
    setMusic({ id: "", artist: "", img: "", musicName: "", time: "0:00", total: "" })
  }

  const changeVolume = (e: any) => {
    const value = e.target.value
    sound?.volume(value / 100)
    setVolume(value)
    setLatestVolume(value)
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

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  if (slideValue === 100) {
    stopMusic();
  };

  useEffect(() => {
    playMusic()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sound])

  useEffect(() => {
    setTimeout(() => {
      setShowBot(false);
    }, 5000);
  }, []);


  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          style={{
            background: backgroundColor(currentPath),
          }}
        >
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/spotify" element={
              <Spotify
                saveMusic={saveMusic}
                playMusic={playMusic}
                pauseMusic={pauseMusic}
                changeVolume={changeVolume}
                muteSound={muteSound}
                unmuteSound={unmuteSound}
                music={music}
                isPaused={isPaused}
                isMuted={isMuted}
                latestVolume={latestVolume}
                volume={volume}
                count={count}
                slideValue={slideValue}
              />
            } />
            <Route path="/netflix" element={<Netflix />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </Box>

        {showBot && currentPath !== Paths.SPOTIFY && currentPath !== Paths.NETFLIX && (
          <Box style={{ position: "fixed", bottom: 20, right: 0 }}>
            <Lottie options={defaultOptions} height={200} width={200} />
          </Box>
        )}

        {!showBot && currentPath !== Paths.SPOTIFY && currentPath !== Paths.NETFLIX && music.artist && (
          <Box style={{ position: "fixed", bottom: 20, right: 20 }}>
            <AppMediaPlayer
              playMusic={playMusic}
              pauseMusic={pauseMusic}
              isPaused={isPaused}
              count={count}
              music={music}
              slideValue={slideValue}
              stopMusic={stopMusic}
            />
          </Box>
        )}

        <DisclaimerDialog isOpen={openDialog} handleClose={handleCloseDialog} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}