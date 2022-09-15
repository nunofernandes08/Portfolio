import React from "react";

import { Box, Dialog, DialogContent, DialogTitle } from "@mui/material";

import "./cardAlbum.css"

export default function AlbunsDialog(props: {
    isOpen: boolean;
    handleClose: Function;
    photos: string[];
    title: string;
}) {
    return (
        <Dialog
            fullWidth
            maxWidth="xl"
            open={props.isOpen}
            onClose={() => props.handleClose()}
        >
            <DialogTitle>{props.title}</DialogTitle>
            <DialogContent>
                <Box
                    display="flex"
                    flexWrap="wrap"
                >
                    {props.photos.map((item: string, index) => (
                        <img key={index} src={item} alt="" style={{ width: 'calc(100% / 4)', height: 300, objectFit: "contain" }} />
                    ))}
                </Box>
            </DialogContent>
        </Dialog>
    );
}
