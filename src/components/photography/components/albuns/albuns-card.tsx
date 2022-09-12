import React from "react";

import { Box, Typography } from "@mui/material";

import AlbunsDialog from "./albuns-dialog";

import "./cardAlbum.css"

export default function AlbunsCard(props: { name: string, backgroundImage: string, album: any[] }) {
    const [openDialog, setOpenDialog] = React.useState(false);

    const handleClickOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <React.Fragment>
            <Box className="cardAlbun" style={{ width: 350, height: 400, background: `url(${props.backgroundImage})`, backgroundSize: "cover", borderRadius: 10, cursor: "pointer" }} onClick={() => handleClickOpenDialog()}>
                <Box display="flex" justifyContent="flex-start" alignItems="flex-end" style={{ height: "100%" }}>
                    <Box style={{ padding: 20, width: "100%" }}>
                        <Typography variant="h5" style={{ color: "white" }}>{props.name}</Typography>
                        <Box style={{ width: "100%", height: 4, backgroundColor: "white" }} />
                    </Box>
                </Box>
            </Box>

            <AlbunsDialog isOpen={openDialog} handleClose={handleCloseDialog} photos={props.album} title={props.name} />
        </React.Fragment>
    );
}
