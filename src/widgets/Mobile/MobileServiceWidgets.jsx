import React from 'react';
import {Box, Typography} from "@mui/material";
import HandymanIcon from '@mui/icons-material/Handyman';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import EngineeringIcon from '@mui/icons-material/Engineering';

function MobileServiceWidgets() {
    return (
        <Box width="100%" height="100%" display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} sx={{bgcolor:"#d6d6d6ff",paddingTop:"2rem"}}>
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
                    fontWeight:"bold",}}>SERVICE</Typography>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="" width={"20rem"}  sx={{marginTop:"2rem",}} >
                <Box display={"flex"} sx={{marginBottom:"0.5rem"}}><DesignServicesIcon sx={{color:"#c7c7c7ff",fontSize:"25px",position:"relative",top:"-4px" }}/>
                <Typography sx={{letterSpacing:"0.5rem",fontWeight:"bold",fontSize:"12px"}}>DESIGN</Typography></Box>
                <Typography sx={{fontSize:"12px", lineHeight:"1.7", color:"#444"}}>Craft visually engaging and intuitive user interfaces grounded in modern UI/UX principles. From wireframes to high‑fidelity prototypes, I translate brand identity into pixel‑perfect layouts that perform seamlessly across devices.
                </Typography>
            </Box>

            <Box display="flex" flexDirection="column" alignItems="" width={"20rem"}  sx={{marginTop:"2rem",}} >
                <Box display={"flex"} sx={{marginBottom:"0.5rem"}}><DesignServicesIcon sx={{color:"#c7c7c7ff",fontSize:"25px",position:"relative",top:"-4px" }}/>
                    <Typography sx={{letterSpacing:"0.5rem",fontWeight:"bold",fontSize:"12px"}}>DEVELOPMENT</Typography></Box>
                <Typography sx={{fontSize:"12px", lineHeight:"1.7", color:"#444"}}> Build robust high performance web applications using the MERN stack. I architect RESTful APIs, integrate third‑party services, and implement responsive front‑end interfaces that scale with your business.</Typography>
            </Box>

            <Box display="flex" flexDirection="column" alignItems="" width={"20rem"}  sx={{marginTop:"2rem",}} >
                <Box display={"flex"} sx={{marginBottom:"0.5rem"}}><DesignServicesIcon sx={{color:"#c7c7c7ff",fontSize:"25px",position:"relative",top:"-4px" }}/>
                    <Typography sx={{letterSpacing:"0.5rem",fontWeight:"bold",fontSize:"12px"}}>MAINTENANCE</Typography></Box>
                <Typography sx={{fontSize:"12px", lineHeight:"1.7", color:"#444"}}>Offer continuous monitoring, performance tuning, security updates, and feature enhancements to keep your product reliable post‑launch. I proactively manage deployments and provide quick turnaround on bug fixes.
                </Typography>
            </Box>

            </Box>
    );
}

export default MobileServiceWidgets;