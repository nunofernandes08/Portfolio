import { PhotographyAlbum } from "../../types";

import photo from "../../assets/photography/albun-card/background.jpeg"

const firstAlbum = [photo, photo, photo, photo, photo, photo, photo, photo, photo, photo]

export const photographyAlbuns: PhotographyAlbum[] = [{
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