import React from 'react';
import {Box, Typography} from "@mui/material";
import {mobileportfoliocardstyle} from "../../style/Mobile/mobileportfoliostylr.module.css"
import {Uploadsoon, V4tech} from "../../assets/index.js";

function MobilePortfolioWidgets() {
    return (
        <Box width="100%" height="100%" display={"flex"} flexDirection="column" justifyContent={"center"} alignItems={"center"} sx={{bgcolor:"#d6d6d6ff",paddingTop:"2rem"}}>
                <Box display={"flex"} justifyContent="center" alignItems="center" >
                    <Typography sx={{
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        border:'3px solid black',
                        letterSpacing:"0.5rem",
                        width:"12rem",
                        fontSize:"13px",
                        height:"45px",
                        fontWeight:"bold",}}>PROJECTS</Typography>
                </Box>
            <Box className={mobileportfoliocardstyle} >
                <a href={"https://v4-tech.in/"}><div><img src={V4tech} alt={"img1"}/>V4 tech Website</div> Project 1</a>
                <a href={"#"}><div><img src={Uploadsoon} alt={"img2"}/></div>Project 2</a>
                <a href={"#"}><div><img src={Uploadsoon} alt={"img3"}/></div>Project 3</a>
            </Box>

             </Box>
    );
}

export default MobilePortfolioWidgets;