import {Box, Typography} from "@mui/material";
import React  from "react";
import {inputstyle,inputtextarea,inputbutton,cleariconstyle} from "../../style/Desktop/Contactformstyle.module.css"
import ClearIcon from '@mui/icons-material/Clear';




export const ContactWidgets = ({setShowcontact}) => {

    return (
        <Box display="flex" justifyContent="center" alignItems="center" width={"100vw"} height={"100vh"} sx={{position:"absolute",top:"0",right:"0",backdropFilter:"blur(10px)",zIndex:"10000"}} >

            <Box display="flex" alignItems={"center"}  width={"30%"} height={"75%"} sx={{bgcolor:"#d6d6d6ff",border:"2px solid black",borderRadius:"10px"}} flexDirection={"column"}>
                <Box>
                    <Typography sx={{
                        display:"flex",
                        marginTop:"2rem",
                        justifyContent:"center",
                        alignItems:"center",
                        border:'5px solid black',
                        letterSpacing:"0.5rem",
                        width:"15rem",
                        fontSize:"20px",
                        height:"45px",
                        fontWeight:"bold",}}>CONTACT</Typography>
                </Box>

                <form method={"post"} action={"#"}>

                    <ClearIcon className={cleariconstyle} onClick={()=>setShowcontact(false)} />
                    <Box display="flex" flexDirection={"column"} alignItems="center" gap={"2rem"} sx={{marginTop:"3rem"}}>
                    <input type="text" className={inputstyle} placeholder="ENTER YOUR NAME *" required/>
                    <input type="text" className={inputstyle} placeholder="ENTER YOUR EMAIL *" required/>
                    <input type="text" className={inputstyle} placeholder="ENTER YOUR PHONE NUMBER"/>
                    <textarea className={inputtextarea} placeholder="ENTER YOUR MESSAGE *" required/>

                        <button type="submit" className={inputbutton}>SUBMIT</button>
                    </Box>
                </form>

            </Box>
        </Box>
    )
}