import HeroSection from "../FrontSectionts/Home/HeroSection";
import CollectionSlider from "../FrontSectionts/Home/CollectionSlider";
import FeatureSupplier from "../FrontSectionts/Home/FeatureSupplier";
import BuildYourBox from "../FrontSectionts/Home/BuildYourBox";
import StatusPage from "../FrontSectionts/Home/StatusPage";
import Client from "./Client";

const Home = () => {
  return (
    <div className="!space-y-20">
      <HeroSection />
      <CollectionSlider />
      <FeatureSupplier />
      <Client />
      <BuildYourBox />
      <StatusPage />
    </div>
  );
};

export default Home;
