import HeroSection from "../FrontSectionts/Home/HeroSection";
import CollectionSlider from "../FrontSectionts/Home/CollectionSlider";
import FeatureSupplier from "../FrontSectionts/Home/FeatureSupplier";
import GiftSectionPage from "../FrontSectionts/Home/GiftSectionPage";
import BuildYourBox from "../FrontSectionts/Home/BuildYourBox";
import StatusPage from "../FrontSectionts/Home/StatusPage";

const Home = () => {
  return (
    <div className="!space-y-20">
      <HeroSection />
      <CollectionSlider />
      <FeatureSupplier />
      <GiftSectionPage />
      <BuildYourBox />
      <StatusPage />
    </div>
  );
};

export default Home;
