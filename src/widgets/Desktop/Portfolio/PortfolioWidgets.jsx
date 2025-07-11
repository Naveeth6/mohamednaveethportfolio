import {Box, Typography} from "@mui/material";
import React from "react"
import PortfolioCardSubWidgets from "./PortfolioCardSubWidgets.jsx";



 function PortfolioWidgets() {

    return (
            <Box display={"flex"} flexDirection="column" alignItems={"center"} sx={{paddingTop:"5rem",marginBottom:"5rem"}} >
                <Box gap={"5rem"} display={"flex"} flexDirection={"column"} alignItems={"center"} >
                     <Box display={"flex"} justifyContent="center" alignItems="center" >
                        <Typography sx={{
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        border:'5px solid black',
                        letterSpacing:"0.5rem",
                        width:"15rem",
                        fontSize:"20px",
                        height:"45px",
                        fontWeight:"bold",}}>PORTFOLIO</Typography>
                </Box>
                       <PortfolioCardSubWidgets/>
                </Box>
        </Box>
    )
}

export default PortfolioWidgets;

