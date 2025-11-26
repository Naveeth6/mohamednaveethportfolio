import * as React from 'react';
import {Uploadsoon, V4tech} from "../../../assets/index.js";
import {desktopportfoliocardstyle} from "../../../style/Desktop/PortfolioStyle.module.css";
import {Box} from "@mui/material";

export default function portfolioCardSubWidgets() {
    return (
        <Box display="flex" flexDirection="row" gap="6rem" className={desktopportfoliocardstyle}>
                        <a href={"https://v4-tech.in/"}><div><img src={V4tech} alt={"img1"}/>v4 tech Website</div>Project 1</a>
                        <a href={"#"}><div><img src={Uploadsoon} alt={"img2"}/>Coming Soon</div>Project 2</a>
                        <a href={"#"}><div><img src={Uploadsoon} alt={"img3"}/>Coming Soon</div>Project 3</a>
        </Box>
    );
}