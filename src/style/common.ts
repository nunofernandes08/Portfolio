import { makeStyles } from "@mui/styles"
import { Theme } from '@mui/material/styles';

export const themeColorsLight = {
    primary: '#467fb7',
    primaryDark: '#45A29E',
    secondary: '#1F2833',
    generalContrastText: '#000',
    background: 'linear-gradient(#8BC6EC 0%, #9599E2 100%)'
}

export const themeColorsDark = {
    primary: '#467fb7',
    primaryDark: '#45A29E',
    secondary: '#1F2833',
    generalContrastText: '#fff',
    background: 'linear-gradient(hwb(0deg 30% 70%) 0%, hwb(0deg 30% 70%) 100%)'
}

export const themeColorsLightRed = {
    primary: '#b74646',
    primaryDark: '#a24545',
    secondary: '#1F2833',
    generalContrastText: '#000',
    background: 'linear-gradient(#8BC6EC 0%, #9599E2 100%)'
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
        marginBottom: theme.spacing(25)
    },
    profileImage: {
        height: theme.spacing(37.5),
        width: theme.spacing(37.5),
        borderRadius: "50%",
        marginTop: theme.spacing(17.5),
        border: "10px solid",
    },
    social: {
        marginTop: 10,
    },
    socialImage: {
        height: 50,
        marginLeft: theme.spacing(2)
    }
}));

export const musicCards = makeStyles((theme: Theme) => ({
    box: {
        borderRadius: 10,
        backgroundColor: '#ffffff3d'
    },
    slider: {
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
}))

export const sideBar = makeStyles((theme: Theme) => ({
    drawer: {
        width: 241,
        height: "calc(100% - 90px)",
        backgroundColor: "red",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
            width: 241,
            height: "calc(100% - 90px)",
            boxSizing: "border-box",
            backgroundColor: "#000"
        },
    },
    listItemText: {
        "& .MuiTypography-root": {
            fontSize: "0.875rem",
            fontWeight: 700
        }
    },
    bottomText: {
        fontSize: "0.6875rem",
        fontWeight: 400,
        color: "white",
        height: 25.59,
        cursor: "pointer"
    }
}))

export const homeComponentsStyle = makeStyles((theme: Theme) => ({
    projectCardContainer: {
        width: 300,
        height: 300,
        perspective: 500,
        backgroundColor: "white",
        borderRadius: "9px 9px 8px 8px",
        cursor: "pointer",
    },
    projectCardImg: {
        width: 300,
        height: 130,
        objectFit: "cover",
        borderRadius: "8px 8px 0px 0px"
    },
    projectCardLogo: {
        width: 130,
        height: 130,
        borderRadius: 20
    }
}));

export const spotifyComponents = makeStyles((theme: Theme) => ({
    spotifyNavbarContainer: {
        backgroundColor: "#0b0b0b",
    },
    spotifyNavbarButtonArrow: {
        minWidth: 32,
        height: 32,
        backgroundColor: "rgba(0,0,0,.7)",
        padding: 0,
        borderRadius: "50%"
    },
    spotifyNavbarButtonArrowBackNext: {
        width: 22,
        height: 22,
        fill: "#fff"
    },
    spotifyNavbarSignUp: {
        color: "#A7A7A7",
        fontSize: 16,
        textTransform: "none",
        fontWeight: 700
    },
    spotifyNavbarLogin: {
        width: 110,
        height: 48,
        borderRadius: 25,
        fontSize: 16,
        textTransform: "none",
        fontWeight: 700,
        backgroundColor: "#fff"
    },

    spotifyPlaylistCardContainer: {
        width: 146.8,
        height: 243.8,
        backgroundColor: '#181818',
        padding: 16,
        borderRadius: 6,
        transition: "0.3s",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "#282828",
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
        backgroundColor: "#1ed760",
        "&:hover": {
            width: 51,
            height: 51,
            backgroundColor: "#1ed760",
        },
    },
    spotifyPlaylistCardTitle: {
        fontSize: "1rem",
        fontWeight: 700,
        color: "white",
        paddingBlockEnd: 4
    },
    spotifyPlaylistCardDescription: {
        color: "#a7a7a7"
    },
}));