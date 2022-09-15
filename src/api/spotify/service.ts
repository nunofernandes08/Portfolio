import acdc from "../../assets/audios/acdc.mp3"
import tropper from "../../assets/audios/tropper.mp3"

import { SpotifyContainer, SpotifyPlaylistCard } from "../../types"

const firstContainerPlaylistCards: SpotifyPlaylistCard[] = [{
    img: "https://i.scdn.co/image/ab67706f00000002e2669fb73bbf182adac393cf",
    title: "Today's Top Hits",
    description: "Harry Styles is on top of the Hottest 50!",
    src: acdc
}, {
    img: "https://i.scdn.co/image/ab67706f00000002a1c5958b0e50ec08114db10f",
    title: "RapCaviar",
    description: "New music from Lil Baby, Gucci Mane and Yeat.",
    src: tropper
}, {
    img: "https://i.scdn.co/image/ab67706f00000002f95e0d3dd06dbadb407ef766",
    title: "All Out 2010s",
    description: "The biggest songs of the 2010s.",
    src: acdc
}, {
    img: "https://i.scdn.co/image/ab67706f00000002fb1854533582c7bdc25f3da1",
    title: "Rock Classics",
    description: "Rock legends & epic songs that continue to inspire generations.",
    src: acdc
}, {
    img: "https://i.scdn.co/image/ab67706f00000002f71053adeaadf4a9d47d6b25",
    title: "Chill Hits",
    description: "Kick back to the best new and recent chill hits.",
    src: acdc
}, {
    img: "https://i.scdn.co/image/ab67706f000000028a021bfdfd90e73127ea3e50",
    title: "Viva Latino",
    description: "Today's top Latin hits, elevando nuestra música. Cover: Romeo Santos",
    src: acdc
}, {
    img: "https://i.scdn.co/image/ab67706f00000002db32a17c1f5291b19317b62e",
    title: "Mega Hit Mix",
    description: "A mega mix of 75 favorites from the last few years!",
    src: acdc
}, {
    img: "https://i.scdn.co/image/ab67706f0000000295df8f35d353232e6670fdf9",
    title: "All Out 80s",
    description: "The biggest songs of the 1980s.",
    src: acdc
}]

const secondContainerPlaylistCards: SpotifyPlaylistCard[] = [{
    img: "https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6",
    title: "Peaceful Piano",
    description: "Relax and indulge with beautiful piano pieces",
    src: tropper
}, {
    img: "https://i.scdn.co/image/ab67706f000000025551996f500ba876bda73fa5",
    title: "Deep Focus",
    description: "Keep calm and focus with ambient and post-rock music.",
    src: tropper
}, {
    img: "https://i.scdn.co/image/ab67706f0000000222a1ae968a3fa0c6dd846bcf",
    title: "Instrumental Study",
    description: "A soft musical backdrop for your studies.",
    src: tropper
}, {
    img: "https://i.scdn.co/image/ab67706f000000025b0a7b8408322a3b9ed15e1e",
    title: "Chill lofi beats",
    description: "The perfect study beats, twenty four seven.",
    src: tropper
}, {
    img: "https://i.scdn.co/image/ab67706f00000002ff55ef0570b629a51bfc43f4",
    title: "Call Before the S...",
    description: "Kick back to the best new and recent chill hits.",
    src: tropper
}, {
    img: "https://i.scdn.co/image/ab67706f00000002863b311d4b787ed621f7e696",
    title: "Coding Mode",
    description: "Today's top Latin hits, elevando nuestra música. Cover: Romeo Santos",
    src: tropper
}, {
    img: "https://i.scdn.co/image/ab67706f000000025a6fe5537cca0bb20e6abc5f",
    title: "Creative Focus",
    description: "A mega mix of 75 favorites from the last few years!",
    src: tropper
}, {
    img: "https://i.scdn.co/image/ab67706f00000002724554ed6bed6f051d9b0bfc",
    title: "Focus Flow",
    description: "The biggest songs of the 1980s.",
    src: tropper
}]

export const containers: SpotifyContainer[] = [{
    title: "Spotify Playlists",
    musics: firstContainerPlaylistCards
}, {
    title: "Uniquely yours",
    musics: secondContainerPlaylistCards
}, {
    title: "Focus",
    musics: firstContainerPlaylistCards
}, {
    title: "Mood",
    musics: firstContainerPlaylistCards
}, {
    title: "Popular new releases",
    musics: firstContainerPlaylistCards
}]