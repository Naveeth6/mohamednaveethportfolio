import React from 'react';
import {Box, Typography, Button} from "@mui/material";
import {Link} from "react-scroll";
import {MobileHeadernavlink,link} from "../../style/Mobile/mobileheaaderstyle.module.css"

function MobileHeaderNavlink () {
    return (
        <Box>
            <nav className={MobileHeadernavlink} >
                <Link to={"home"}  className={link} activeClass="active" spy={true} smooth="true" duration="500">Home</Link>
                <Link to={'about'} className={link} activeClass="active" spy={true} smooth="true" duration="500">About</Link>
                <Link to='service' className={link} activeClass="active" spy={true} smooth="true" duration="500">Service</Link>
                <Link to={'skills'} className={link} activeClass="active" spy={true} smooth="true" duration="500">Skills</Link>
            </nav>

        </Box>
    );
}

export default MobileHeaderNavlink;