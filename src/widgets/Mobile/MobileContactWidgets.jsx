import React from 'react';
import {Box,Typography} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import {mobileinputtextarea,mobileinputstyle,mobileinputbutton} from "../../style/Mobile/mobilecontactwidgetsstyle.module.css"


function MobileContactWidgets({SetContact}) {
    return (
            <Box display="flex" justifyContent="center" alignItems="left" width={"100vw"} height={"100vh"} sx={{position:"fixed",top:"0",right:"0",backdropFilter:"blur(10px)",zIndex:"10000"}}>
                <Box display="flex" alignItems={"center"}  width={"70%"} height={"60vh"} sx={{bgcolor:"#d6d6d6ff",marginTop:'8em',border:"2px solid black",borderRadius:"10px"}} flexDirection="column">
                    <Box display={"flex"} justifyContent="center" flexDirection="row" alignItems="center">
                        <ClearIcon className={"cleariconstyle"} sx={{position:"absolute",top:"10px",right:"10px",cursor:"pointer",fontSize:"30px",color:"#d6d6d6ff",}} onClick={()=>{SetContact(false)}}/>
                        <Typography sx={{
                            display:"flex",
                            marginTop:"2rem",
                            justifyContent:"center",
                            alignItems:"center",
                            border:'3px solid black',
                            letterSpacing:"0.5rem",
                            width:"12rem",
                            fontSize:"13px",
                            height:"45px",
                            fontWeight:"bold",}}>CONTACT</Typography>
                    </Box>

                    <form action="https://formsubmit.co/mdnaveethmr@gmail.com" method="POST">


                        <Box display="flex" flexDirection="column" alignItems="center" gap={"2rem"} sx={{marginTop:"3rem",}}>
                            <input type="text" className={mobileinputstyle} id="name" name={"Name"} placeholder="ENTER YOUR NAME *" required/>
                            <input type="email" className={mobileinputstyle} id="email" name={"Email"} placeholder="example@gmail.com *" required/>
                            <input type="text" className={mobileinputstyle}  id="phonenumber" name={"PhoneNumber"} placeholder="+91 1234567890 *" required/>
                            <textarea className={mobileinputtextarea} id="message" name={"Message"} rows="6" placeholder="ENTER YOUR MESSAGE *" />

                            <button type="submit" className={mobileinputbutton}>SUBMIT</button>
                        </Box>
                    </form>







                </Box>
            </Box>
    );
}

export default MobileContactWidgets;