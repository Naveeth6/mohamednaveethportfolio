import React from 'react';
import HeaderNavlink from "../../widgets/Desktop/headerwidgets/HeaderNavlink.jsx";
import {Box} from "@mui/material";
import {Headerleftside} from "../../widgets/Desktop/headerwidgets/Headerleftside.jsx";

const HeaderComponent = () => (
    <Box display={"flex"} flexDirection={"row"} sx={{position:"fixed",width:'100%',top:"0"}}>
        <Headerleftside/>
     <HeaderNavlink/>
    </Box>

);

export default HeaderComponent;