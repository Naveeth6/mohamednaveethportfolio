import React from 'react';
import frame1 from "../assets/Frame 1.png";
import {Box} from "@mui/material";
import MobileHeader from "../component/Mobile/MobileHeader.jsx";
import MobileHome from "../component/Mobile/MobileHome.jsx";
import MobileAbout from "../component/Mobile/MobileAbout.jsx";
import MobileService from "../component/Mobile/MobileService.jsx";
import MobileSkills from "../component/Mobile/MobileSkills.jsx";
import MobileProject from "../component/Mobile/MobileProject.jsx";
import MobileFooter from "../component/Mobile/MobileFooter.jsx";

function MobilePortfolio() {
    return (
        <Box>
            <Box>
                <Box width={"100%"} height={"100%"} sx={{backgroundImage: `url(${frame1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                    <MobileHeader/>
                    <MobileHome/>
                </Box>
                <MobileAbout/>
                <MobileService/>
                <MobileSkills/>
                <MobileProject/>
                <MobileFooter/>
            </Box>
        </Box>
    );
}

export default MobilePortfolio;