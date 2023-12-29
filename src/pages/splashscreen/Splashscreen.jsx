import { useNavigate } from "react-router-dom"
import logoIcon from "./../../assets/images/splashscreen/splashscreenIcon1.svg"
import logoIconcopy from "./../../assets/images/splashscreen/splashscreenIcon1copy.svg"
import Icon from "./../../assets/images/splashscreen/splashscreenIcon2.svg"
import "./Splashscreen.scss"
import { useContext, useEffect } from "react";
import { Products } from "./../../context/Context"

const Splashscreen = () => {

    const darkmode = useContext(Products)
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate("/onboarding");
        }, 2000);
        return () => clearTimeout(timeout);
    }, [navigate]);

    return ( 
        <div className="background_Splashscreen">
            <div className="contentContainer_Splashscreen">
                <img className="logoIcon_Splashscreen" src={darkmode.darkmode ? logoIconcopy : logoIcon} alt="shop icon" />
                <br />
                <img className="icon_Splashscreen" src={Icon} alt="shop name" />
                <p className="text_Splashscreen">Your Shopping Solution</p>
            </div>
        </div>
     );
}
 
export default Splashscreen;