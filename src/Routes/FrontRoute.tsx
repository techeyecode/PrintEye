import { Route } from "react-router-dom";
import FrontLayout from "../Layouts/FrontLayout";

// Pages
import Home from "../Pages/Home";

// Promotion
import Promotion from "../FrontSectionts/Promotion/Promotion";
import PromotionDetailies from "../FrontSectionts/Promotion/PromotionDetailies";

// Printing
import Printing from "../FrontSectionts/Printing/Printing";
import PrintingDetailies from "../FrontSectionts/Printing/PrintingDetails";
import Business from "../FrontSectionts/Printing/Business/Business";
import BusinessDetailies from "../FrontSectionts/Printing/Business/BusinessDetailies";
import Brochures from "../FrontSectionts/Printing/Brochures/Brochures";
import BrochuresDetailies from "../FrontSectionts/Printing/Brochures/BrochuresDetailies";
import NotePad from "../FrontSectionts/Printing/NotePad/NotePad";
import NotePadDetailies from "../FrontSectionts/Printing/NotePad/NotePadDetailies";

// Uniform
import Uniform from "../FrontSectionts/Uniform/Uniform";
import UniformType from "../FrontSectionts/Uniform/UniformType";
import UniformDetailies from "../FrontSectionts/Uniform/UniformDetailies";

export const FrontRoute = (
  <Route path="/" element={<FrontLayout />}>
    <Route index element={<Home />} />

    {/* Promotion Routes */}
    <Route path="Promotion">
      <Route index element={<Promotion />} />
      <Route path=":id" element={<PromotionDetailies />} />
    </Route>

    {/* Printing Routes */}
    <Route path="Printing">
      <Route index element={<Printing />} />
      <Route path=":id" element={<PrintingDetailies />} />
    </Route>

    {/* Business Routes */}
    <Route path="Business">
      <Route index element={<Business />} />
      <Route path=":id" element={<BusinessDetailies />} />
    </Route>

    {/* NotePad Routes */}
    <Route path="NotePad">
      <Route index element={<NotePad />} />
      <Route path=":id" element={<NotePadDetailies />} />
    </Route>

    {/* Brochures Routes */}
    <Route path="Brochures">
      <Route index element={<Brochures />} />
      <Route path=":id" element={<BrochuresDetailies />} />
    </Route>

    {/* Uniform Routes */}
    <Route path="Uniform">
      <Route index element={<Uniform />} />
      <Route path=":id" element={<UniformType />} />
      <Route path="Type/:id" element={<UniformDetailies />} />
    </Route>
  </Route>
);
