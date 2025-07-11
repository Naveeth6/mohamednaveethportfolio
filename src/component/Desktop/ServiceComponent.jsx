import {Box} from "@mui/material";
import {ServiceWidgets} from "../../widgets/Desktop/ServiceWidgets.jsx";
import { motion } from "framer-motion";
export const ServiceComponent = () => {
    return (
        <Box id={'service'} width={'100%'} height={'100%'} sx={{bgcolor:"#d6d6d6ff"}} >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 , delay: 0.2 }}
                viewport={{ once: true }}
            >
            <ServiceWidgets/>
            </motion.div>
        </Box>
    )
}