import React from 'react';
import {Box} from "@mui/material";
import Myimage from "../../../assets/ChatGPT_Image_Jun_24__2025__09_54_18_PM-removebg-preview.png";

function RightsideImage() {
    return (
        <Box width={"58%"} height={"100%"} justifyContent={"center"} className={""} display={"flex"} alignItems={"center"} overflow={"hidden"}>
            <Box className={""} overflow={"hidden"} display="flex"  sx={{marginTop:"10rem",marginBottom:"10rem",marginLeft:"10rem",border:"2px solid #d6d6d6ff",borderRadius:"50%",boxShadow:"0px 0px 105px -31px rgba(241,236,236,0.54)",
                webkitBoxShadow: "0px 0px 105px -31px rgba(241,236,236,0.54)",
                mozBoxShadow: "0px 0px 105px -31px rgba(241,236,236,0.54)",backgroundcolor:"#121212ff"}}>
                <img src={Myimage} style={{overflow:"hidden"}}  alt={"frame2"}/>
            </Box>
        </Box>
    );
}

export default RightsideImage;