import PageHeader from "../Components/PageHeader";
import AboutEyePrint from "../FrontSectionts/AboutUs/AboutEyePrint";
import OurVisionMission from "../FrontSectionts/AboutUs/OurVisionMission";
import WhatWeOffer from "../FrontSectionts/AboutUs/WhatWeOffer";
import GiftSectionPage from "../FrontSectionts/Home/GiftSectionPage";
import about from "../assets/about.jpg";

const About = () => {
  return (
    <div className="">
      <PageHeader
        title="EyePrint"
        subtitle="MeetEyePrintSubtext"
        backgroundImage={about}
        breadcrumbs={[{ label: "home", path: "/" }, { label: "aboutEyePrint" }]}
      />
      <AboutEyePrint />
      <OurVisionMission />
      <WhatWeOffer />
      <GiftSectionPage />
    </div>
  );
};

export default About;
