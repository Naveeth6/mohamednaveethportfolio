import {Box, Typography} from "@mui/material";
import React  from "react";
import {inputstyle,inputtextarea,inputbutton,cleariconstyle} from "../../style/Desktop/Contactformstyle.module.css"
import ClearIcon from '@mui/icons-material/Clear';




export const ContactWidgets = ({setShowcontact}) => {

    return (
        <Box display="flex" justifyContent="center" alignItems="center" width={"100vw"} height={"100vh"} sx={{position:"absolute",top:"0",right:"0",backdropFilter:"blur(10px)",zIndex:"10000"}} >

            <Box display="flex" alignItems={"center"}  width={"30vw"} height={"75vh"} sx={{bgcolor:"#d6d6d6ff",border:"2px solid black",borderRadius:"10px"}} flexDirection="column">
                <Box display={"flex"} justifyContent="center" flexDirection="row" alignItems="center">
                    <ClearIcon className={cleariconstyle} onClick={()=>setShowcontact(false)}/>
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

                <form action="https://formsubmit.co/mdnaveethmr@gmail.com" method="POST">


                    <Box display="flex" flexDirection={"column"} alignItems="center" gap={"2rem"} sx={{marginTop:"3rem",}}>
                    <input type="text" className={inputstyle} id="name" name={"Name"} placeholder="ENTER YOUR NAME *" required/>
                    <input type="email" className={inputstyle} id="email" name={"Email"} placeholder="example@gmail.com *" required/>
                    <input type="text" className={inputstyle}  id="phonenumber" name={"PhoneNumber"} placeholder="+91 1234567890 *" required/>
                    <textarea className={inputtextarea} id="message" name={"Message"} rows="6" placeholder="ENTER YOUR MESSAGE *" />

                        <button type="submit" className={inputbutton}>SUBMIT</button>
                    </Box>
                </form>

            </Box>
        </Box>
    )
}