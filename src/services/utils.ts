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

export const slideFormat = (diff: any, isPaused: boolean, music: any) => {
    if (!diff || isPaused) return 0

    const musicTotal = parseInt(music.total.replaceAll(":", "").substring(3, 6))
    const timer = parseInt(diff.toLocaleTimeString().replaceAll(":", "").substring(3, 6)) as number

    return (timer / musicTotal) * 100
}