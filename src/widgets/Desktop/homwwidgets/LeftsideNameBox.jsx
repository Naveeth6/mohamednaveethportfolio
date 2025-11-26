import {Box, Button, Typography} from "@mui/material";
import { Typewriter } from 'react-simple-typewriter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import {iconstyle,downloadstyle} from "../../../style/Desktop/Homecontentstyle.module.css"
import FileDownloadIcon from '@mui/icons-material/FileDownload';



export const LeftsideNameBox = () => {



    return (
        <Box display={"flex"} flexDirection={"column"} className={""} maxWidth={"155.18"} width={"40%"} height={"100%"}  justifyContent={"left"} overflow={"hidden"}>

            <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"left"} sx={{
            marginLeft:"2rem",marginTop:"8rem"}} >

                <Typography sx={{
                        fontSize:"30px",
                        fontWeight:"bold",
                        }}>HI, i am
                </Typography>

                <Typography sx={{
                                fontSize:"50px",
                                fontWeight:"bold",
                                }}>Mohamed Naveeth
                </Typography>

                <Box height={"1rem"} justifyContent={"center"} alignItems={"center"} sx={{fontSize:"20px",fontWeight:"bold",}}>

                    <Typewriter
                        words={['Designer','Front End Developer','Coder','Software Tester','MERN stack developer']}
                        typeSpeed={100}
                        deleteSpeed={50}
                        loop={true}
                        startDelay={1000}
                        cursorColor={"#152548"}
                        cursorAnimation={"blink"}
                        hideCursorAfterText={"true"}
                    />

                </Box>

            </Box>

            <Box display={"flex"} className={iconstyle} gap={"1rem"} sx={{marginLeft:"2rem",marginTop:"5rem"}}>

                <a href={"https://www.instagram.com/n_a_v_e_e_t_h_/"}><InstagramIcon fontSize={"large"}/></a>
                <a href={"https://www.linkedin.com/in/mohamed-naveeth-5460602b7/"}><LinkedInIcon fontSize={"large"}/></a>
                <a href={"https://wa.me/9080762058"}><WhatsAppIcon fontSize={"large"}/></a>
                <a href={"mailto:<rbnaveeth@gmail.com>"}><AlternateEmailIcon fontSize={"large"}/></a>

            </Box>
            <Box className={downloadstyle} sx={{marginLeft:"4rem",marginTop:"3rem"}}>
                <a href="/src/assets/Mohamed-Naveeth-CV.pdf" download="Mohamed Naveeth CV Download"><FileDownloadIcon fontSize="medium"/> DOWNLOAD CV</a>
            </Box>
        </Box>
    )
}