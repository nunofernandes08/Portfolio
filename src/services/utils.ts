
import { ThemeInterface, Themes } from "../types";

export const selectTheme = (theme: string, dataToReturn: ThemeInterface) => {
    switch (theme) {
        case Themes.LIGHT:
            return dataToReturn.themeLight;
        case Themes.DARK:
            return dataToReturn.themeDark;
        case Themes.LIGHTRED:
            return dataToReturn.themeLightRed;
        default:
            return dataToReturn.themeLight;
    }
};

export function navigate(endpoint: string) {
    const location = `${endpoint}`
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

export const timeFormat = (date: Date) => {
    if (!date) return {
        text: "0:00",
        mm: 0,
        ss: 0
    }

    let mm = date.getUTCMinutes();
    let ss = date.getSeconds();

    const timer = `${mm}:${ss}`

    return {
        text: timer,
        date
    }
}

export const goToSpotify = () => {
    return window.open('https://open.spotify.com/', '_blank')
}