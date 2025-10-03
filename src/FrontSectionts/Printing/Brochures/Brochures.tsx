import StandardBrochure from "./StandardBrochure";
import DoorBrochure from "./DoorBrochure";
import FoldBrochure from "./FoldBrochure";
import BrochureSection from "./BrochureSection";

const Brochures = () => {
  return (
    <div>
      <BrochureSection />
      <StandardBrochure />
      <FoldBrochure />
      <DoorBrochure />
    </div>
  );
};

export default Brochures;
