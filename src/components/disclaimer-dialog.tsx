import React from "react";
import Lottie from "react-lottie";
import { useTranslation } from "react-i18next";

import { Box, Dialog, DialogContent, Typography } from "@mui/material";

import * as lottie from "../assets/wroking.json"

export default function DisclaimerDialog(props: {
    isOpen: boolean;
    handleClose: Function;
}) {
    const { t } = useTranslation()

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: lottie,
        name: "lottie",
    };

    return (
        <Dialog
            fullWidth
            maxWidth="xl"
            open={props.isOpen}
            onClose={() => props.handleClose()}
        >
            <DialogContent>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography variant="h4">{t("DIALOGS.BUG")}</Typography>
                    <Typography variant="h4">{t("DIALOGS.RESOLVE")}</Typography>
                    <Lottie options={defaultOptions} height={500} width={500} />
                </Box>
            </DialogContent>
        </Dialog>
    );
}
