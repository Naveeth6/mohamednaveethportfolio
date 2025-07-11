import HeaderComponent from "../component/Desktop/HeaderComponent.jsx";
import frame1 from "../assets/Frame 1.png";
import {Box} from "@mui/material";
import {HomeContent} from "../component/Desktop/HomeContent.jsx";
import {AboutComponent} from "../component/Desktop/AboutComponent.jsx";
import {ServiceComponent} from "../component/Desktop/ServiceComponent.jsx";
import SkillsComponent from "../component/Desktop/SkillsComponent.jsx";
import {PortfolioComponents} from "../component/Desktop/PortfolioComponents.jsx";
import {FooterbarComponent} from "../component/Desktop/FooterbarComponent.jsx";
export function DesktopPortfolio() {
    return (

        <Box>
            <Box maxWidth="2000px" display={"flex"} flexDirection="column">
                    <Box sx={{backgroundImage: `url(${frame1})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                        <HeaderComponent/>
                        <HomeContent/>

                    </Box>
                <AboutComponent/>
                <ServiceComponent/>
                <SkillsComponent/>
                <PortfolioComponents/>
                <FooterbarComponent/>
            </Box>
        </Box>
    )
}