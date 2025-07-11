import {Box, Typography} from "@mui/material";
import React from "react";
import {Csssvg, Expresssvg, Htmlsvg, Jssvg, MongoDbsvg, Nodesvg, Reactscg} from "../../assets/index.js";
import {skillslogo,} from "../../style/Desktop/skillslogostyle.module.css";

export const SkillWidgets = () => {
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
                    fontWeight:"bold",}}>SKILLS</Typography>
            </Box>
            <Box display={"flex"} height={"100%"}  sx={{bgcolor:"Transparent",margin:"4rem"}}>
                <Box ><Typography
                    sx={{letterSpacing:"0.5rem",
                        fontWeight:"bold",
                        width:"200px"}}>USING NOW :</Typography>
                    <Box className={skillslogo}>
                        <div>
                            <div><img src={Htmlsvg} alt={"HTML"}/><Typography sx={{fontSize:"15px", lineHeight:"1.7", color:"#444"}}>HTML</Typography></div>
                            <div><img src={Csssvg} alt={"CSS"}/><Typography sx={{fontSize:"15px", lineHeight:"1.7", color:"#444"}}>CSS</Typography></div>
                                <div><img src={Jssvg} alt={"Js"}/><Typography sx={{fontSize:"15px", lineHeight:"1.7", color:"#444"}}>JavaScript</Typography></div>
                                    <div><img src={Reactscg} alt={"React"}/><Typography sx={{fontSize:"15px", lineHeight:"1.7", color:"#444"}}>React</Typography></div>
                        </div>
                        <div>
                            <div><img src={Nodesvg} alt={"Node"}/><Typography sx={{fontSize:"15px", lineHeight:"1.7", color:"#444"}}>Node</Typography></div>
                                <div><img src={MongoDbsvg} alt={"Mongodb"}/><Typography sx={{fontSize:"15px", lineHeight:"1.7", color:"#444"}}>MongoDB</Typography></div>
                                    <div><img src={Expresssvg} alt={"express"} /><Typography sx={{fontSize:"15px", lineHeight:"1.7", color:"#444"}}>Express</Typography></div>
                        </div>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

