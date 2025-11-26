import React from 'react';
import {Box, Typography} from "@mui/material";
import Myimage from "../../assets/ChatGPT_Image_Jun_24__2025__09_54_18_PM-removebg-preview.png";
import {Typewriter} from "react-simple-typewriter";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

import {mobileiconstyle,mobilenamestyle,mobiletypewriterstyle,mobiledownloadstyle} from "../../style/Mobile/mobilehomestyle.module.css"

function MobileHomeWidgets() {
    return (
        <Box display={"flex"} alignItems="center" justifyContent='center' flexDirection="column" sx={{marginTop:"",height:"100%" }} >
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{marginTop:'6rem'}}>
                <Box className={""} overflow={"hidden"} display="flex"  sx={{width:"16rem",height:"25rem",border:"2px solid #d6d6d6ff",borderRadius:"50%",boxShadow:"0px 0px 105px -31px rgba(241,236,236,0.54)",
                    webkitBoxShadow: "0px 0px 105px -31px rgba(241,236,236,0.54)",
                    mozBoxShadow: "0px 0px 105px -31px rgba(241,236,236,0.54)",backgroundcolor:"#121212ff"}}>
                    <img src={Myimage} style={{overflow:"hidden",backgroundPosition:"center",}}  alt={"frame2"}/>
                </Box>
                <Box>
                    <Box display="flex" flexDirection="column"  sx={{width:"100%",height:"100%"}} >
                        <Box display="flex" flexDirection="column" justifyContent="center"  marginLeft="0rem" marginTop="4rem" width="100%" height="100%" >
                        <Typography  sx={{
                            fontSize:"20px",
                            fontWeight:"bold",
                            color:"black",
                        }}>HI, i am
                        </Typography>

                        <Typography className={mobilenamestyle} sx={{
                            fontSize:"30px",
                            fontWeight:"bold",
                            color:"#666",
                        }}>Mohamed Naveeth
                        </Typography>
                        </Box>
                        <Box height={"2rem"} className={mobiletypewriterstyle} sx={{fontSize:"20px",fontWeight:"bold",color:"#666",}}>

                            <Typewriter
                                words={['Developer','Front End Developer','Coder','Software Tester','MERN stack developer']}
                                typeSpeed={100}
                                deleteSpeed={50}
                                loop={true}
                                startDelay={1000}
                                cursorColor={"#152548"}
                                cursorAnimation={"blink"}
                                hideCursorAfterText={"true"}
                            />
                        </Box>
                        <Box display={"flex"} className={mobileiconstyle} gap={"1rem"} sx={{marginLeft:"5rem",marginTop:"3rem"}}>

                            <a href={"https://www.instagram.com/n_a_v_e_e_t_h_/"}><InstagramIcon fontSize={"large"}/></a>
                            <a href={"https://www.linkedin.com/in/mohamed-naveeth-5460602b7/"}><LinkedInIcon fontSize={"large"}/></a>
                            <a href={"https://wa.me/9080762058"}><WhatsAppIcon fontSize={"large"}/></a>
                            <a href={"mailto:<rbnaveeth@gmail.com>"}><AlternateEmailIcon fontSize={"large"}/></a>

                        </Box>

                        <Box className={mobiledownloadstyle} sx={{marginLeft:"7rem",marginTop:"2rem",marginBottom:"3rem"}}>
                            <a href="/src/assets/naveethresume.pdf" download="Mohamed Naveeth CV Download"><FileDownloadIcon fontSize="medium"/> DOWNLOAD CV</a>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default MobileHomeWidgets;