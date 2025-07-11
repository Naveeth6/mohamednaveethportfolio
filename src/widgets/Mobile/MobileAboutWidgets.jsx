import React from 'react';
import {Box, Typography} from "@mui/material";

function MobileAboutWidgets() {
    return (
        <Box width="100%" height="100%" display="flex" flexDirection="column" alignItems={"center"} justifyContent={"center"}  sx={{bgcolor:"#d6d6d6ff",paddingTop:"2rem"}}>
            <Box display="flex" justifyContent="center" alignItems="center">
                <Typography sx={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    border:'3px solid black',
                    letterSpacing:"0.5rem",
                    width:"12rem",
                    fontSize:"13px",
                    height:"40px",
                    fontWeight:"bold",}}>ABOUT ME</Typography>
            </Box>
            <Box width="22.5rem" height="100%" sx={{marginTop:"1rem",borderRight:"1px solid #444",borderLeft:"1px solid #444",borderBottom:"1px solid #444", padding:"2rem",}}>
                <Typography sx={{fontSize:"12px", lineHeight:"1.7", color:"#444"}}>
                    Hi, I'm <strong>Mohamed Naveeth .B</strong>, a passionate and dedicated <strong>MERN Stack Developer</strong> with a strong foundation in building modern, responsive web applications. I specialize in <strong>HTML, CSS, JavaScript, React, Node.js, Express.js</strong>, and <strong>MongoDB</strong>, and I'm always eager to learn and explore new technologies.
                </Typography>
                <br/>
                <Typography sx={{fontSize:"12px", lineHeight:"1.7", color:"#444"}}>
                    I'm currently pursuing my <strong>B.Tech in Information Technology</strong> at <strong>Annai College of Engineering and Technology</strong>, graduating in <strong>2025</strong>. My academic background, combined with my hands-on learning, has shaped me into a developer who enjoys solving real-world problems and writing clean, efficient code.
                </Typography>
                <br/>
                <Typography sx={{fontSize:"12px", lineHeight:"1.7", color:"#444"}}>
                    I thrive in <strong>team environments</strong>, enjoy <strong>problem-solving</strong>, and always strive to improve both technically and personally. Whether it’s an <strong>internship</strong>, <strong>freelance opportunity</strong>, or a <strong>full-time role</strong>, I’m excited to contribute, grow, and make a meaningful impact in the tech world.
                </Typography>
            </Box>
        </Box>
    );
}

export default MobileAboutWidgets;