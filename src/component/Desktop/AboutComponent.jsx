import AboutWidgets from "../../widgets/Desktop/AboutWidgets.jsx";
import {Box} from "@mui/material";
import { motion } from "framer-motion";

export const AboutComponent = () => {
    return (

        <Box id={"about"} width={"100%"} height={"100%"} sx={{bgcolor:"#d6d6d6ff"}} >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 , delay: 0.2 }}
                viewport={{ once: true }}
            >
            <AboutWidgets/>
                </motion.div>

        </Box>

    )
}