import {Box, Typography} from "@mui/material";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import {Link} from "react-scroll";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import {iconstyle} from "../../style/Desktop/FooterSocialMediaIconstyle.module.css"

export const FooterbarWidgets = () => {
    return (
        <Box height={"100%"} width={"100%"} display="flex" justifyContent="center" alignItems="center" flexDirection="column" gap="2rem" sx={{backgroundColor:"black",paddingBottom:"2rem"}}>
            <Link to={"home"}  activeClass="active" spy={true} smooth="true" duration="500">
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" sx={{margin:"2rem 0 0 0"}} >
                <KeyboardDoubleArrowUpIcon sx={{color:"#d6d6d6ff"}}/>
                <Typography sx={{color:"#d6d6d6ff",fontSize:"15px"}}>Back to Top</Typography>
            </Box>
            </Link>
            <Box display={"flex"} className={iconstyle} gap={"1rem"} >
                <a href={"https://www.instagram.com/n_a_v_e_e_t_h_/"}><InstagramIcon fontSize={"large"}/></a>
                <a href={"https://www.linkedin.com/in/mohamed-naveeth-1000001a0/"}><LinkedInIcon fontSize={"large"}/></a>
                <a href={"https://wa.me/9080762058"}><WhatsAppIcon fontSize={"large"}/></a>
                <a href={"mailto:<rbnaveeth@gmail.com>"}><AlternateEmailIcon fontSize={"large"}/></a>
            </Box>
        </Box>
    )  
}