import {Box} from "@mui/material";
import {LeftsideNameBox} from "../../widgets/Desktop/homwwidgets/LeftsideNameBox.jsx";
import RightsideImage from "../../widgets/Desktop/homwwidgets/RightsideImage.jsx";

export const HomeContent = () => {
    return (
        <Box id={'home'} display={"flex"}
             flexDirection={{ xs: 'column', md: 'row' }} // Stacks vertically on mobile, horizontally on desktop
             alignItems="center" // Centers content vertically when stacked
             justifyContent="center" // Centers content horizontally
             sx={{ minHeight: '100vh' }} >
            <LeftsideNameBox/>
            <RightsideImage/>
        </Box>
    )
}