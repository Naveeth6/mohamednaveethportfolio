import React, {useState} from 'react';
import {Box, Button} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {mobileheaderbutton,menuiconmobilenavbutton} from "../../style/Mobile/mobileheaaderstyle.module.css";
import MobileHeaderNavlink from "../../widgets/Mobile/MobileHeaderNavlink.jsx";
const MobileHeader = () => {
    const [Click, SetClick] = useState(false);
    return (
        <Box display="flex" justifyContent="right" width='100%'>
            <Box className={mobileheaderbutton} sx={{position:'fixed'}} ><MenuIcon className={menuiconmobilenavbutton} onClick={()=>SetClick(!Click)}/></Box>
            {Click && <MobileHeaderNavlink/> }
        </Box>
    );
}

export default MobileHeader;