import { Link } from "react-router-dom";
import "./Onboarding.scss"
import Background from "./../../assets/images/onboarding/backgroundOnboardingImage.svg";
import Cloud from "./../../assets/images/onboarding/VectorCloud.svg";
import VaseLeft from "./../../assets/images/onboarding/freepikbackgroundcompleteinject2.svg";
import Bag from "./../../assets/images/onboarding/freepikBaginject2.svg";
import Box from "./../../assets/images/onboarding/freepikBoxinject2.svg";
import Chair from "./../../assets/images/onboarding/freepikChairinject2.svg";
import Person from "./../../assets/images/onboarding/freepikCharacterinject2.svg";
import Phone from "./../../assets/images/onboarding/freepikDeviceinject2.svg";
import VaseRight from "./../../assets/images/onboarding/freepikPlantinject2.svg";
import Plant1 from "./../../assets/images/onboarding/Vector.svg";
import Plant2 from "./../../assets/images/onboarding/Vector1.svg";
import Plant3 from "./../../assets/images/onboarding/Vector2.svg";

const Onboarding = () => {
    return ( 
        <div className="container_Onbaording">
        <div className="imageContainer_Onboarding">
            <div className="blurLeft_Onboarding"></div>
            <div className="blurRight_Onboarding"></div>
            <img className="cloud1_Onbaording" src={Cloud} alt="cloud1" />
            <img className="cloud2_Onbaording" src={Cloud} alt="cloud2" />
            <img className="cloud3_Onbaording" src={Cloud} alt="cloud3" />
            <img className="vaseLeft_Onbaording" src={VaseLeft} alt="" />
            <img className="bag_Onbaording" src={Bag} alt="" />
            <img className="box_Onbaording" src={Box} alt="" />
            <img className="chair_Onbaording" src={Chair} alt="" />
            <img className="person_Onbaording" src={Person} alt="" />
            <img className="phone_Onbaording" src={Phone} alt="" />
            <img className="vaseRight_Onbaording" src={VaseRight} alt="" />
            <img className="plant1_Onbaording" src={Plant1} alt="" />
            <img className="plant2_Onbaording" src={Plant2} alt="" />
            <img className="plant3_Onbaording" src={Plant3} alt="" />
            <img className="background_Onbaording" src={Background} alt="background of image" />
        </div>
        <div className="containerText_Onbaording">
            <h2 className="h2_Onbaording">Biggest Sell at Your Fingerprint</h2>
            <p className="p_Onboarding">Find your best products from popular shop without any delay</p>
            <Link className="linkButton_Onbaording" to="/home">Get Started</Link>
        </div>
        </div>
     );
}
 
export default Onboarding;