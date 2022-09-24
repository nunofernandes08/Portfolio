import { Music, Languages, Paths, HomeComponents } from "../types"

import * as spotify from "../assets/projects/spotify.json";
import * as netflix from "../assets/projects/netflix.json";
import * as amazon from "../assets/projects/amazon.json";
import * as youtube from "../assets/projects/youtube.json";
import * as reddit from "../assets/projects/reddit.json";
import * as facebook from "../assets/projects/facebook.json";
import * as linkedin from "../assets/projects/linkedin.json";

import { Projects } from "../types";

const availablePaths = ["/spotify", "/netflix", "/home"]

export function navigate(path: string) {
    const location = `${path}`
    window.location.href = `/${location}`
}

export const truncateString = (s: string, len = 38) => {
    if (!s) return s

    if (s.length > len) return `${s.substring(0, len)}...`

    return s
}

export const chooseMusic = (id: string) => {
    const possibleMusics = [{
        id: "acdc",
        artist: "Acdc",
        musicName: "Highway to Hell",
        img: "https://upload.wikimedia.org/wikipedia/pt/a/ac/Acdc_Highway_to_Hell.JPG",
        time: "3:27",
        total: "01:03:27"
    }]

    return possibleMusics.find(item => item.id === id) || { id: "", artist: "", musicName: "", img: "", time: "0:00", total: "" }
}

export const timeFormat = (mm: number, ss: number) => {
    const timer = `${mm}:${ss.toString().length === 1 ? `0${ss}` : ss}`

    return timer
}

export const goToSpotify = () => {
    return window.open('https://open.spotify.com/', '_blank')
}

export const slideFormat = (count: string, started: boolean, music: Music) => {
    if (!count || started) return 0

    const musicTime = parseInt(music.time.replaceAll(":", ""))
    const timer = parseInt(count.replaceAll(":", ""))

    return (timer / musicTime) * 100 || 0
}

export const findLanguageValue = (language: string) => {
    switch (language) {
        case Languages.EN:
            return Languages.en
        case Languages.PT:
            return Languages.pt
        case Languages.FR:
            return Languages.fr
        case Languages.DE:
            return Languages.de
        case Languages.ES:
            return Languages.es
    }
}

export const backgroundColor = (path: string) => {
    switch (path) {
        case Paths.SPOTIFY:
            return '#121212'
        case Paths.NETFLIX:
            return '#000'
        default:
            return "#fff"
    }
}

export const router = (navigate: Function, currentPath: string) => {
    const pathIndex = availablePaths.findIndex(item => item === currentPath)
    if (currentPath === "/" || currentPath === "/Portfolio/") {
        return navigate("/home")
    }
    if (pathIndex === -1) {
        navigate("/404")
    }
}

export const allowComponents = (component: string, currentPath: string, showBot: boolean) => {
    switch (component) {
        case HomeComponents.APPMEDIAPLAYER:
            return !showBot && currentPath === Paths.HOME
        case HomeComponents.LOTTIE:
            return showBot && currentPath === Paths.HOME;
        case HomeComponents.DIALOG:
            return currentPath !== Paths.NETFLIX && currentPath !== Paths.ERROR404
    }
}

export const findLogoAndName = (title: string) => {
    switch (title) {
        case Projects.SPOTIFY:
            return {
                logo: spotify,
                name: Projects.SPOTIFY
            };
        case Projects.NETFLIX:
            return {
                logo: netflix,
                name: Projects.NETFLIX
            };
        case Projects.AMAZON:
            return {
                logo: amazon,
                name: Projects.AMAZON
            };
        case Projects.YOUTUBE:
            return {
                logo: youtube,
                name: Projects.YOUTUBE
            };
        case Projects.REDDIT:
            return {
                logo: reddit,
                name: Projects.REDDIT
            };
        case Projects.FACEBOOK:
            return {
                logo: facebook,
                name: Projects.FACEBOOK
            };
        case Projects.LINKEDIN:
            return {
                logo: linkedin,
                name: Projects.LINKEDIN
            };
        default:
            return {
                logo: undefined,
                name: ''
            };
    }
}