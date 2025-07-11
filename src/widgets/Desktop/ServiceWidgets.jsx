import {Box, Typography} from "@mui/material";
import HandymanIcon from '@mui/icons-material/Handyman';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import EngineeringIcon from '@mui/icons-material/Engineering';
import React from "react";

export const ServiceWidgets = () => {
    return (
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} sx={{paddingTop:"5rem"}}>
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
                fontWeight:"bold",}}>SERVICE</Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" sx={{marginTop:"2rem"}} gap={"6rem"}>
            <Box display="flex" width={"100%"} justifyContent={"space-between"} gap={"8rem"}>
                <Box display="flex" flexDirection="column" alignItems="left " width={"30rem"} >
                    <DesignServicesIcon sx={{color:"#c7c7c7ff",fontSize:"50px"}}/>
                    <Typography sx={{letterSpacing:"0.5rem",fontWeight:"bold",fontSize:"20px"}}>DESIGN</Typography>
                    <Typography sx={{fontSize:"15px", lineHeight:"1.7", color:"#444"}}>Craft visually engaging and intuitive user interfaces grounded in modern UI/UX principles. From wireframes to high‑fidelity prototypes, I translate brand identity into pixel‑perfect layouts that perform seamlessly across devices.
                    </Typography>


                </Box>
                <Box display="flex" alignItems="left" width={"30rem"} flexDirection="column">
                    <HandymanIcon sx={{color:"#c7c7c7ff",fontSize:"50px"}}/><Typography
                    sx={{letterSpacing:"0.5rem",fontWeight:"bold",fontSize:"20px"}}>DEVELOPEMENT</Typography>
                    <Typography sx={{fontSize:"15px", lineHeight:"1.7", color:"#444"}}> Build robus  high performance web applications using the MERN stack. I architect RESTful APIs, integrate third‑party services, and implement responsive front‑end interfaces that scale with your business.</Typography>


                </Box>
            </Box>
            <Box display="flex" alignItems="left" justifyContent="center" width={"30rem"} flexDirection={"column"} sx={{marginBottom:"3rem"}}>
                <EngineeringIcon sx={{color:"#c7c7c7ff",fontSize:"50px"}}/><Typography
                sx={{letterSpacing:"0.5rem",fontWeight:"bold",fontSize:"20px"}}>MAINTENANCE</Typography>
                <Typography sx={{fontSize:"15px", lineHeight:"1.7", color:"#444"}}>Offer continuous monitoring, performance tuning, security updates, and feature enhancements to keep your product reliable post‑launch. I proactively manage deployments and provide quick turnaround on bug fixes.
                </Typography>
            </Box>
        </Box>
        </Box>
    )
}