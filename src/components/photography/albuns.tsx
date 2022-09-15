import React from "react";

import { Box, } from "@mui/material";

import AlbunsCard from "./components/albuns/albuns-card";

import GeneralBox from "../home/components/general-box";

import { photographyAlbuns } from "../../api/photography/service";
import { PhotographyAlbum } from "../../types";

export default function Albuns() {

    return (
        <GeneralBox title={"Álbuns"}>
            <Box display="flex" flexWrap="wrap" justifyContent="space-between">
                {photographyAlbuns.map((item: PhotographyAlbum) => (
                    <AlbunsCard name={item.name} backgroundImage={item.backgroundImage} album={item.photos} />
                ))}
            </Box>
        </GeneralBox>

    );
}
