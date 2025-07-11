import React from 'react';
import {Box} from "@mui/material";
import MobilePortfolioWidgets from "../../widgets/Mobile/MobilePortfolioWidgets.jsx";
import { motion } from "framer-motion"

const MobileProject = () => (
    <Box sx={{bgcolor:"#d6d6d6ff"}}>
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 , delay: 0.2 }}
            viewport={{ once: true }}
        >
        <MobilePortfolioWidgets/>
        </motion.div>
    </Box>

);

export default MobileProject;