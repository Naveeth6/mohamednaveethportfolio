import React, {useState} from 'react';
import {Box, Button} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {mobileheaderbutton,menuiconmobilenavbutton,mobileheadercontactbutton} from "../../style/Mobile/mobileheaaderstyle.module.css";
import MobileHeaderNavlink from "../../widgets/Mobile/MobileHeaderNavlink.jsx";
import MobileContactWidgets from "../../widgets/Mobile/MobileContactWidgets.jsx";
const MobileHeader = () => {
    const [Click, SetClick] = useState(false);
    const [Contact, SetContact] = useState(false)
    return (
        <>
        <Box display="flex" justifyContent="right"  width='100%'>
            <Button className={mobileheadercontactbutton} sx={{position:'fixed'}} onClick={()=>SetContact(true)} >CONTACT</Button>
            {Contact && <MobileContactWidgets SetContact={SetContact}/>}
            <Box className={mobileheaderbutton} display={'flex'} justifyContent={'right'} sx={{position:'fixed'}} ><MenuIcon className={menuiconmobilenavbutton} onClick={()=>SetClick(!Click)}/></Box>
            {Click && <MobileHeaderNavlink/> }
        </Box>

        </>
    );
}

export default MobileHeader;