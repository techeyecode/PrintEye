import PageHeader from "../Components/PageHeader";
import AboutEyePrint from "../FrontSectionts/AboutUs/AboutEyePrint";
import OurVisionMission from "../FrontSectionts/AboutUs/OurVisionMission";
import PricingSection from "../FrontSectionts/AboutUs/PricingSection";
import WhatWeOffer from "../FrontSectionts/AboutUs/WhatWeOffer";
import GiftSectionPage from "../FrontSectionts/Home/GiftSectionPage";

const About = () => {
  return (
    <div className="!space-y-10">
      <PageHeader
        title="MeetEyePrint"
        subtitle="MeetEyePrintSubtext"
        backgroundImage="https://static.gotprint.com/tl/en_US/company/about-us/images/about_us_hero_banner.png"
        breadcrumbs={[{ label: "home", path: "/" }, { label: "aboutEyePrint" }]}
      />
      <AboutEyePrint />
      <OurVisionMission />
      <GiftSectionPage />
    </div>
  );
};

export default About;
