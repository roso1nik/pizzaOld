import { Typography } from "@mui/material";
import React from "react";

import styles from "./NotFoundBlock.module.scss";

const index = () => {
    return (
        <div className={styles.root}>
            <Typography variant="h2">Ничего не найдено 😕</Typography>
            <Typography variant="body1" className={styles.text}>
                Данная страница отсутствует
            </Typography>
        </div>
    );
};

export default index;
