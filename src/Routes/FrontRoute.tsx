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
import Bag from "../FrontSectionts/Printing/Bags/Bag";
import BagDetailies from "../FrontSectionts/Printing/Bags/BagDetailies";
import Invoices from "../FrontSectionts/Printing/Invoice/Invoices";
import InvoiceDetailies from "../FrontSectionts/Printing/Invoice/InvoiceDetailies";

// Uniform
import Uniform from "../FrontSectionts/Uniforms/Uniform";
import UniformDetailies from "../FrontSectionts/Uniforms/UniformDetailies";

// Packaging
import Packaging from "../FrontSectionts/Packaging/Packaging";
import PackagingDetailies from "../FrontSectionts/Packaging/PackagingDetailies";
import Sign from "../FrontSectionts/Sign/Sign";
import SignDetailies from "../FrontSectionts/Sign/SignDetailies";
import CupDetailies from "../FrontSectionts/Cups/CupDetailies";
import Cup from "../FrontSectionts/Cups/Cup";

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

    {/* Brochures Routes */}
    <Route path="Brochures">
      <Route index element={<Brochures />} />
      <Route path=":id" element={<BrochuresDetailies />} />
    </Route>

    {/* Bag Routes */}
    <Route path="Bag">
      <Route index element={<Bag />} />
      <Route path=":id" element={<BagDetailies />} />
    </Route>

    {/* Invoice Routes */}
    <Route path="Invoices">
      <Route index element={<Invoices />} />
      <Route path=":id" element={<InvoiceDetailies />} />
    </Route>

    {/* Uniform Routes */}
    <Route path="Uniform">
      <Route index element={<Uniform />} />
      <Route path=":id" element={<UniformDetailies />} />
    </Route>

    {/* Packaging Routes */}
    <Route path="Packaging">
      <Route index element={<Packaging />} />
      <Route path=":id" element={<PackagingDetailies />} />
    </Route>

    {/* Sign Routes */}
    <Route path="Sign">
      <Route index element={<Sign />} />
      <Route path=":id" element={<SignDetailies />} />
    </Route>

    {/* Cup Routes */}
    <Route path="Cup">
      <Route index element={<Cup />} />
      <Route path=":id" element={<CupDetailies />} />
    </Route>
  </Route>
);
