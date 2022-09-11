import React from "react";

import { Box, Button, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { spotifyComponents, themeColorsSpotify } from "../../../style/common";
import { goToSpotify } from "../../../services/utils";

const listItems = [{
    text: "Home",
    icon: <svg role="img" height="24" width="24" className="Svg-ytk21e-0 jAKAlG home-active-icon" viewBox="0 0 24 24"><path fill="hsla(0,0%,100%,.7)" d="M13.5 1.515a3 3 0 00-3 0L3 5.845a2 2 0 00-1 1.732V21a1 1 0 001 1h6a1 1 0 001-1v-6h4v6a1 1 0 001 1h6a1 1 0 001-1V7.577a2 2 0 00-1-1.732l-7.5-4.33z"></path></svg>
}, {
    text: "Search",
    icon: <svg role="img" height="24" width="24" className="Svg-ytk21e-0 jAKAlG search-icon" viewBox="0 0 24 24"><path fill="hsla(0,0%,100%,.7)" d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path></svg>
}, {
    text: "Your library",
    icon: <svg role="img" height="24" width="24" className="Svg-ytk21e-0 jAKAlG collection-icon" viewBox="0 0 24 24"><path fill="hsla(0,0%,100%,.7)" d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z"></path></svg>
}]

const CreatePlaylistButton = () => {
    return (
        <Button variant="contained" sx={{ padding: 0, background: themeColorsSpotify.grayColor }} style={{ padding: 4, minWidth: 24, height: 24, width: 24, borderRadius: 2 }}>
            <AddIcon style={{ width: 18, height: 18 }} />
        </Button>
    )
}

const LikeSongsButton = () => {
    return (
        <Button variant="contained" sx={{ padding: 0, background: themeColorsSpotify.sideBarLikeBottom }} style={{ padding: 4, minWidth: 24, height: 24, width: 24, borderRadius: 2 }}>
            <FavoriteIcon style={{ width: 14, height: 14, fill: themeColorsSpotify.whiteColor }} />
        </Button>
    )
}

export default function SideBar() {
    const sideBarClass = spotifyComponents()

    return (
        <Box sx={{ display: "flex" }}>
            <Drawer
                className={sideBarClass.spotifySideBarDrawer}
                variant="permanent"
                anchor="left"
            >
                <Box style={{ marginTop: 24, height: "100%" }}>
                    <Grid item xs={12} style={{ height: "100%" }}>
                        <Box style={{ height: "50%" }}>
                            <Box sx={{ px: 3, mb: 2, height: 50.59 }} onClick={() => goToSpotify()}>
                                <svg style={{ width: 130 }} viewBox="0 0 1134 340" className="spotify-logo--text"><title>Spotify</title><path fill="#fff" d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"></path></svg>
                            </Box>
                            <List sx={{ py: 0 }}>
                                {listItems.map((item, index) => (
                                    <ListItem key={index} disablePadding sx={{ px: 1 }}>
                                        <ListItemButton sx={{ px: 2, py: 0, height: 40 }} onClick={() => goToSpotify()}>
                                            <ListItemIcon sx={{ minWidth: 0 }}>{item.icon}</ListItemIcon>
                                            <ListItemText className={sideBarClass.spotifySideBarListItemText} primary={item.text} sx={{ pl: 2, color: themeColorsSpotify.whiteColor }} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                            <List sx={{ py: 0, mt: 3 }}>
                                {["Create Playlist", "Liked Songs"].map((item, index) => (
                                    <ListItem key={index} disablePadding sx={{ px: 1 }}>
                                        <ListItemButton sx={{ px: 2, py: 0, height: 40 }} onClick={() => goToSpotify()}>
                                            {index === 0 ? CreatePlaylistButton() : LikeSongsButton()}
                                            <ListItemText className={sideBarClass.spotifySideBarListItemText} primary={item} sx={{ pl: 2, color: themeColorsSpotify.whiteColor }} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                        <Box display="flex" style={{ height: "50%" }} >
                            <Box display="flex" justifyContent="flex-end" alignItems="flex-start" flexDirection="column" sx={{ my: 3, px: 3, width: "100%" }}>
                                <Typography variant="body1" className={sideBarClass.spotifySideBarBottomText} onClick={() => goToSpotify()}>Cookies</Typography>
                                <Typography variant="body1" className={sideBarClass.spotifySideBarBottomText} onClick={() => goToSpotify()}>Privacy</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Box>
            </Drawer>
        </Box>
    );
}
