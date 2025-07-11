import React from 'react';
import {Box} from "@mui/material";
import MobileSkillsWidgets from "../../widgets/Mobile/MobileSkillsWidgets.jsx";
import { motion } from "framer-motion"

function MobileSkills() {
    return (
        <Box id={"skills"} sx={{bgcolor:"#d6d6d6ff"}}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 , delay: 0.2 }}
                viewport={{ once: true }}
            >
            <MobileSkillsWidgets/>
            </motion.div>
        </Box>
    );
}

export default MobileSkills;