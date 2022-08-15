import { makeStyles } from "@mui/styles"
import { Theme } from '@mui/material/styles';

import backgroundAnimated from "../assets/splash.svg";

//#0B0C10
//#C5C6C7
//#45A29E

export const themeColors = {
    primary: '#467fb7',
    primaryDark: '#45A29E',
    secondary: '#1F2833',
    generalContrastText: '#fff',
    background: '#EFF5FE' // N03
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
        backgroundImage: `url(${backgroundAnimated})`,
        marginBottom: theme.spacing(25)
    },
    profileImage: {
        height: theme.spacing(37.5),
        width: theme.spacing(37.5),
        borderRadius: "50%",
        marginTop: theme.spacing(17.5),
        border: "10px solid white",
    },
    social: {
        marginTop: 10,
    },
    socialImage: {
        height: 50,
        marginLeft: theme.spacing(2)
    }
}));

export const aboutMeComponent = makeStyles((theme: Theme) => ({
    profileFull: {
        height: theme.spacing(62.5),
        objectFit: "contain",
        borderRadius: theme.spacing(1.25)
    }
}));

