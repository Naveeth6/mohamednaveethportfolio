import React from 'react';
import {Box, Typography} from "@mui/material";
import {
    Csssvg,
    Expresssvg,
    Htmlsvg,
    Jssvg,
    MongoDbsvg,
    Nodesvg,
    Postmanimg,
    Reactscg,
    Wordpresssvg
} from "../../assets/index.js";
import {mobileskillslogo} from "../../style/Mobile/mobileskillsstyle.module.css"

function MobileSkillsWidgets() {
    return (
        <Box>
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
                fontWeight:"bold",}}>SKILLS</Typography>
        </Box>
            <Box display="flex" justifyContent="left" sx={{marginRight:"8rem",marginTop:"1.5rem"}}><Typography
                sx={{letterSpacing:"0.2rem",
                    fontWeight:"bold",
                    width:"200px",
                fontSize:"13px"}}>USING NOW :</Typography>
            </Box>
            <Box className={mobileskillslogo}>
                <div><img src={Htmlsvg} alt={"HTML"}/><Typography sx={{fontSize:"12px",fontWeight:"bold", lineHeight:"1.7", color:"#444"}}>HTML</Typography></div>
                <div><img src={Csssvg} alt={"CSS"}/><Typography sx={{fontSize:"12px",fontWeight:"bold", lineHeight:"1.7", color:"#444"}}>CSS</Typography></div>
                <div><img src={Jssvg} alt={"Js"}/><Typography sx={{fontSize:"12px",fontWeight:"bold", lineHeight:"1.7", color:"#444"}}>JavaScript</Typography></div>
                <div><img src={Reactscg} alt={"React"}/><Typography sx={{fontSize:"12px",fontWeight:"bold", lineHeight:"1.7", color:"#444"}}>React</Typography></div>
            </Box>
            <Box className={mobileskillslogo}>
                <div><img src={Nodesvg} alt={"Node"}/><Typography sx={{fontSize:"12px",fontWeight:"bold", lineHeight:"1.7", color:"#444"}}>Node</Typography></div>
                <div><img src={MongoDbsvg} alt={"Mongodb"}/><Typography sx={{fontSize:"12px",fontWeight:"bold", lineHeight:"1.7", color:"#444"}}>MongoDB</Typography></div>
                <div><img src={Expresssvg} alt={"express"} /><Typography sx={{fontSize:"12px",fontWeight:"bold", lineHeight:"1.7", color:"#444"}}>Express</Typography></div>
                <div><img src={Postmanimg} alt={"Postman"} /><Typography sx={{fontSize:"12px",fontWeight:"bold", lineHeight:"1.7", color:"#444"}}>Postman</Typography></div>
            </Box>
            <Box className={mobileskillslogo}>
                <div><img src={Wordpresssvg} alt={"Word Press"} /><Typography sx={{fontSize:"12px",fontWeight:"bold", lineHeight:"1.7", color:"#444"}}>WordPress</Typography></div>



            </Box>
            </Box>
        </Box>
    );
}

export default MobileSkillsWidgets;