import { makeStyles } from "@mui/styles"
import { Theme } from '@mui/material/styles';

import backgroundAnimated from "../assets/splash.svg";

//#0B0C10
//#C5C6C7
//#45A29E

export const themeColors = {
    primary: '#66FCF1',
    secondary: '#1F2833',
    generalContrastText: '#fff',
    background: '#EFF5FE' // N03
}

export const welcomeComponent = makeStyles((theme: Theme) => ({
    backgroundImage: {
        width: "100%",
        height: theme.spacing(37.5),
        position: "relative",
        backgroundImage: `url(${backgroundAnimated})`,
        marginBottom: 200
    },
    profileImage: {
        height: 300,
        width: 300,
        borderRadius: "50%",
        marginTop: 140,
        border: "10px solid white",
    }
}));
