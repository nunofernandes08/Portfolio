import { makeStyles } from "@mui/styles"
import { Theme } from '@mui/material/styles';

export const themeColors = {
    primary: '#022C43',
    primaryLight: '#053F5E',
    primaryEvenLighter: '#115173',
    secondary: '#FFD700',
    generalContrastText: '#000',
    background: '#fff',
}

export const themeColorsSpotify = {
    primary: '#1ed760',
    whiteColor: '#fff',
    blackColor: '#000',
    grayColor: '#b3b3b3',
    veryDarkGrayColor: '#181818',
    veryDarkGrayLight: '#282828',
    veryDarkGrayDarkerColor: 'rgba(0,0,0,0.87)',
    sideBarLikeBottom: 'linear-gradient(135deg,#450af5,#c4efd9)'
}

export const useCommonStyles = makeStyles((theme: Theme) => ({
    height100: {
        height: "100%"
    },
    width100: {
        width: "100%"
    },
    topOffset: {
        paddingTop: theme.spacing(3),
    },
    yOffset: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    leftOffset: {
        marginLeft: theme.spacing(3),
    },
    rightOffset: {
        marginRight: theme.spacing(3),
    },
    bottomOffset: {
        paddingBottom: theme.spacing(3),
    },
}));

export const welcomeComponent = makeStyles((theme: Theme) => ({
    backgroundImage: {
        width: "100%",
        height: theme.spacing(37.5),
        position: "relative",
        marginBottom: 213
    },
    profileImage: {
        height: 230,
        width: 230,
        borderRadius: "50%",
        marginTop: 170,
        border: "10px solid",
    },
    social: {
        marginTop: 10,
    },
    socialImage: {
        height: 40,
        marginLeft: theme.spacing(2)
    }
}));

export const spotifyComponents = makeStyles((theme: Theme) => ({
    spotifyNavbarContainer: {
        backgroundColor: themeColorsSpotify.veryDarkGrayColor,
    },
    spotifyNavbarButtonArrow: {
        minWidth: 32,
        height: 32,
        backgroundColor: themeColorsSpotify.veryDarkGrayDarkerColor,
        padding: 0,
        borderRadius: "50%"
    },
    spotifyNavbarButtonArrowBackNext: {
        width: 22,
        height: 22,
        fill: themeColorsSpotify.whiteColor
    },
    spotifyNavbarSignUp: {
        color: themeColorsSpotify.grayColor,
        fontSize: 16,
        textTransform: "none",
        fontWeight: 700,
        "&:hover": {
            backgroundColor: themeColorsSpotify.veryDarkGrayColor
        },
    },
    spotifyNavbarLogin: {
        width: 110,
        height: 48,
        borderRadius: 25,
        fontSize: 16,
        textTransform: "none",
        fontWeight: 700,
        backgroundColor: themeColorsSpotify.whiteColor,
        "&:hover": {
            backgroundColor: themeColorsSpotify.whiteColor
        },
    },
    spotifyPlaylistCardContainer: {
        width: 146.8,
        height: 243.8,
        backgroundColor: themeColorsSpotify.veryDarkGrayColor,
        padding: 16,
        borderRadius: 6,
        transition: "0.3s",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: themeColorsSpotify.veryDarkGrayLight,
        },
    },
    spotifyPlaylistCardImg: {
        position: 'relative',
        width: 147.8,
        height: 147.8,
        marginBottom: 16
    },
    spotifyPlaylistCardIconButton: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        width: 50,
        height: 50,
        backgroundColor: themeColorsSpotify.primary,
        "&:hover": {
            width: 51,
            height: 51,
            backgroundColor: themeColorsSpotify.primary,
        },
    },
    spotifyPlaylistCardTitle: {
        fontSize: "1rem",
        fontWeight: 700,
        color: themeColorsSpotify.whiteColor,
        paddingBlockEnd: 4
    },
    spotifyPlaylistCardDescription: {
        color: themeColorsSpotify.grayColor
    },
    spotifySideBarDrawer: {
        width: 241,
        height: "calc(100% - 90px)",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
            width: 241,
            height: "calc(100% - 90px)",
            boxSizing: "border-box",
            backgroundColor: themeColorsSpotify.blackColor,
            border: 0
        },
    },
    spotifySideBarListItemText: {
        "& .MuiTypography-root": {
            fontSize: "0.875rem",
            fontWeight: 700
        }
    },
    spotifySideBarBottomText: {
        fontSize: "0.6875rem",
        fontWeight: 400,
        color: themeColorsSpotify.whiteColor,
        height: 25.59,
        cursor: "pointer"
    },
    spotifyPlayerSlider: {
        '& .MuiSlider-track': {
            border: 'none',
            backgroundColor: "white"
        },
        '& .MuiSlider-thumb': {
            width: 0,
            height: 0,
            backgroundColor: '#fff',
            '&:before': {
                boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
            },
            '&:hover, &.Mui-focusVisible, &.Mui-active': {
                boxShadow: 'none',
            },
        },
    }
}));

export const experienceTimeLine = makeStyles((theme: Theme) => ({
    timeLineItem: {
        margin: 0,
        paddingTop: 0,
        paddingBottom: 0
    },
    timeLineDot: {
        borderColor: themeColors.secondary,
        backgroundColor: themeColors.secondary,
    },
    timeLineCard: {
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
        padding: 16,
        borderRadius: 6
    }
}));
