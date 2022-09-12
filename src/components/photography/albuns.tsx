import React from "react";

import { Box, } from "@mui/material";

import GeneralBox from "../home/components/general-box";
import AlbunsCard from "./components/albuns/albuns-card";

import photo from "../../assets/photography/albun-card/background.jpeg"

const firstAlbum = [photo, photo, photo, photo, photo, photo, photo, photo, photo, photo]

const albuns = [{
    name: "Album 1",
    backgroundImage: photo,
    photos: firstAlbum
}, {
    name: "Album 2",
    backgroundImage: photo,
    photos: firstAlbum
}, {
    name: "Album 3",
    backgroundImage: photo,
    photos: firstAlbum
}]

export default function Albuns() {

    return (
        <GeneralBox title={"Álbuns"}>
            <Box display="flex" flexWrap="wrap" justifyContent="space-between">
                {albuns.map((item, index) => (
                    <AlbunsCard name={item.name} backgroundImage={item.backgroundImage} album={item.photos} />
                ))}
            </Box>
        </GeneralBox>

    );
}
