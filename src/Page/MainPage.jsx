import {DesktopPortfolio} from "../Layouts/DesktopPortfolio.jsx";
import MobilePortfolio from "../Layouts/MobilePortfolio.jsx";
import {isMobile} from "react-device-detect";

export const MainPage = () => {
    return (<>
            {isMobile ? <MobilePortfolio/> : <DesktopPortfolio/>}
        </>
    )
}