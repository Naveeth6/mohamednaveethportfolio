import {Box} from "@mui/material";
import PortfolioWidgets from "../../widgets/Desktop/Portfolio/PortfolioWidgets.jsx";
import { motion } from "framer-motion";

export const PortfolioComponents = () => {
    return (
        <Box sx={{bgcolor:"#d6d6d6ff"}} id={'portfolio'}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 , delay: 0.2 }}
                viewport={{ once: true }}
            >
            <PortfolioWidgets/>
            </motion.div>
        </Box>
    )
}