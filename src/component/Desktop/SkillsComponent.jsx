import React from 'react';
import {SkillWidgets} from "../../widgets/Desktop/SkillWidgets.jsx";
import {Box} from "@mui/material";
import { motion } from "framer-motion"
const SkillsComponent = () => (
    <Box id={'skills'} width={"100%"} height={"100%"} sx={{backgroundColor:"#d6d6d6ff"}}>
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 , delay: 0.2 }}
            viewport={{ once: true }}
        >
    <SkillWidgets/>
        </motion.div>
    </Box>
);

export default SkillsComponent;