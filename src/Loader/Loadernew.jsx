import React from 'react';
import {Box} from "@mui/material";
import BlurText from "./BlurText.jsx";
import CurvedLoop from "./CurvedLoop.jsx";

function Loadernew() {
    return (
        <Box width={'100%'} height={'100vh'} display='flex' flexDirection='column' justifyContent='center' alignItems={'center'} sx={{bgcolor:"#d6d6d6ff",fontSize:"1.5rem",fontWeight:'bold' ,color:'#444'}}>


            <BlurText
                text="WELCOME TO MY PORTFOLIO"
                delay={200}
                animateBy="letters"
                direction="top"
                className="text-2xl mb-8"
            />
            <CurvedLoop
                marqueeText="✦✦i AM MOhamed NAveeth  ✦✦"
                speed={4}
                curveAmount={500}
                direction="right"
                interactive={true}
            />
        </Box>
    );
}

export default Loadernew;