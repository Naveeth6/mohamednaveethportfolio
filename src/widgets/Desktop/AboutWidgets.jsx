import React from 'react';

import {Box, Typography} from "@mui/material";

function AboutWidgets() {
    return (

        <Box display={"flex"} justifyContent={"center"} sx={{paddingTop:"3rem"}} flexDirection="column" alignItems={"center"}>
            <Box display="flex" justifyContent="center" alignItems="center">
                <Typography sx={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    border:'5px solid black',
                    letterSpacing:"0.5rem",
                    width:"15rem",
                    fontSize:"20px",
                    height:"45px",
                    fontWeight:"bold",}}>ABOUT ME</Typography>
            </Box>
            <Box width={"60rem"} sx={{marginTop:"3rem",border:"1px  #444" , padding:"2rem"}}>
                <Typography sx={{fontSize:"15px", lineHeight:"1.7", color:"#444"}}>
                    Hi, I'm <strong>Mohamed Naveeth .B</strong>, a passionate and dedicated <strong>MERN Stack Developer</strong> with a strong foundation in building modern, responsive web applications. I specialize in <strong>HTML, CSS, JavaScript, React, Node.js, Express.js</strong>, and <strong>MongoDB</strong>, and I'm always eager to learn and explore new technologies.
                </Typography>
                <br/>
                <Typography sx={{fontSize:"15px", lineHeight:"1.7", color:"#444"}}>
                    I'm currently pursuing my <strong>B.Tech in Information Technology</strong> at <strong>Annai College of Engineering and Technology</strong>, graduating in <strong>2025</strong>. My academic background, combined with my hands-on learning, has shaped me into a developer who enjoys solving real-world problems and writing clean, efficient code.
                </Typography>
                <br/>
                <Typography sx={{fontSize:"15px", lineHeight:"1.7", color:"#444"}}>
                    I thrive in <strong>team environments</strong>, enjoy <strong>problem-solving</strong>, and always strive to improve both technically and personally. Whether it’s an <strong>internship</strong>, <strong>freelance opportunity</strong>, or a <strong>full-time role</strong>, I’m excited to contribute, grow, and make a meaningful impact in the tech world.
                </Typography>
            </Box>

        </Box>
    );
}

export default AboutWidgets;