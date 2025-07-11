import React, {useState} from 'react';
import {Box, Button,} from "@mui/material";
import {nav,link,navbutton,headerbarstyle} from "../../../style/Desktop/Headernavstyle.module.css"
import { Link } from "react-scroll"
import {ContactWidgets} from "../ContactWidgets.jsx";
import MenuIcon from '@mui/icons-material/Menu';
const HeaderNavlink = () =>{
    const [showcontact, setShowcontact] =useState(false);

    return(
        <>
    <Box display={"flex"} justifyContent={"center"} flexDirection="row" className={headerbarstyle} alignItems={"center"} width={"50%"} height={"6vh"}>
        <nav className={nav}>
            <Link to={"home"}  className={link} activeClass="active" spy={true} smooth="true" duration="500">Home</Link>
        <Link to={'about'} className={link} activeClass="active" spy={true} smooth="true" duration="500">About</Link>
            <Link to='skills' className={link} activeClass="active" spy={true} smooth="true" duration="500">Skills</Link>
        <Link to={'portfolio'} className={link} activeClass="active" spy={true} smooth="true" duration="500">Portfolio</Link>
        </nav>
        <Box display={"flex"}>
        <Button className={navbutton}  onClick={()=>setShowcontact(true)} >
            Contact</Button>
            {showcontact && <ContactWidgets setShowcontact={setShowcontact}/>}
        </Box>
    </Box>

        </>

)};

export default HeaderNavlink;