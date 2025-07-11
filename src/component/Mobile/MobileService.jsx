import React from 'react';
import MobileServiceWidgets from "../../widgets/Mobile/MobileServiceWidgets.jsx";
import { motion } from "framer-motion"

function MobileService() {
    return (
        <div id={'service'} sx={{bgcolor:"#d6d6d6ff"}}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 , delay: 0.2 }}
                viewport={{ once: true }}
            >
            <MobileServiceWidgets/>
                </motion.div>
        </div>
    );
}

export default MobileService;