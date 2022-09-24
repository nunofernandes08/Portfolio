export interface Project {
    img: string,
    title: string,
    description: string,
    src: string
}

export interface Music {
    id: string,
    artist: string,
    img: string,
    musicName: string,
    time: string,
    total: string
}

export interface ExperienceCompany {
    logo: string,
    title: string,
    description: string,
    src: string,
    location: string,
    period: string
}

export interface EducationSchool {
    school: string,
    location: string,
    period: string,
    text: string
}

export interface SocialImage {
    image: string,
    link: string
}

export interface PhotographyAlbum {
    name: string,
    backgroundImage: string,
    photos: string[]
}

export interface SpotifyPlaylistCard {
    img: string,
    title: string,
    description: string,
    src: string
}

export interface SpotifyContainer {
    title: string,
    musics: SpotifyPlaylistCard[]
}

export interface LanguageItem {
    image: string,
    imageSet: string,
    text: string
}

export enum Paths {
    SPOTIFY = "/spotify",
    NETFLIX = "/netflix"
}

export enum Projects {
    SPOTIFY = "Spotify",
    NETFLIX = "Netflix",
    AMAZON = "Amazon",
    YOUTUBE = "Youtube",
    REDDIT = "Reddit",
    FACEBOOK = "Facebook",
    LINKEDIN = "Linkedin"
}

export enum Languages {
    EN = "EN",
    en = "en",
    PT = "PT",
    pt = "pt",
    FR = "FR",
    fr = "fr",
    DE = "DE",
    de = "de",
    ES = "ES",
    es = "es"
}

export enum PositionContainer {
    LEFT = "left",
    RIGHT = "right"
}