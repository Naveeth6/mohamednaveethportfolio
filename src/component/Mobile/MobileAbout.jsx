import React from 'react';
import MobileAboutWidgets from "../../widgets/Mobile/MobileAboutWidgets.jsx";
import {Box} from "@mui/material";
import { motion } from "framer-motion"

function MobileAbout() {
    return (
        <Box id={"about"} sx={{bgcolor:"#d6d6d6ff"}}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 , delay: 0.2 }}
                viewport={{ once: true }}
            >
            <MobileAboutWidgets/>
            </motion.div>
        </Box>
    );
}

export default MobileAbout;