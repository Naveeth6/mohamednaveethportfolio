import React from 'react';
import {Box, Typography} from "@mui/material";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import {Link} from "react-scroll";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import {mobilefootericonstyle} from '../../style/Mobile/mobilefooterstyle.module.css'

function MobileFooterContent() {
    return (
        <Box display={"flex"} justifyContent={'center'} flexDirection='column' alignItems={'center'} sx={{bgcolor:'black'}}>
            <Link to={"home"}  activeClass="active" spy={true} smooth="true" duration="500">
                <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" sx={{margin:"1rem 0 0 0"}} >
                    <KeyboardDoubleArrowUpIcon sx={{color:"#d6d6d6ff",fontSize:"15px"}}/>
                    <Typography  sx={{color:"#d6d6d6ff",fontSize:"12px"}}>Back to Top</Typography>
                </Box>
            </Link>
                <Box display={"flex"} className={mobilefootericonstyle} gap={"1rem"} >
                <a href={"https://www.instagram.com/n_a_v_e_e_t_h_/"}><InstagramIcon fontSize={"medium"}/></a>
                <a href={"https://www.linkedin.com/in/mohamed-naveeth-5460602b7/"}><LinkedInIcon fontSize={"medium"}/></a>
                <a href={"https://wa.me/9080762058"}><WhatsAppIcon fontSize={"medium"}/></a>
                <a href={"mailto:<rbnaveeth@gmail.com>"}><AlternateEmailIcon fontSize={"medium"}/></a>
            </Box>
        </Box>
    );
}

export default MobileFooterContent;