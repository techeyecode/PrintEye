import { Route } from "react-router-dom";
import FrontLayout from "../Layouts/FrontLayout";
import Home from "../Pages/Home";
import Uniform from "../FrontSectionts/Uniform/Uniform";
import UniformType from "../FrontSectionts/Uniform/UniformType";
import UniformDetailies from "../FrontSectionts/Uniform/UniformDetailies";
import Promotion from "../FrontSectionts/Promotion/Promotion";
import PromotionDetailies from "../FrontSectionts/Promotion/PromotionDetailies";
import Printing from "../FrontSectionts/Printing/Printing";
import Business from "../FrontSectionts/Printing/Business/Business";
import PrintingDetailies from "../FrontSectionts/Printing/PrintingDetails";
import Brochures from "../FrontSectionts/Printing/Brochures/Brochures";

export const FrontRoute = (
  <Route path="/" element={<FrontLayout />}>
    <Route index element={<Home />} />
    <Route path="/Promotion" element={<Promotion />} />
    <Route path="/Promotion/:id" element={<PromotionDetailies />} />
    <Route path="/Printing" element={<Printing />} />
    <Route path="/Printing/:id" element={<PrintingDetailies />} />
    <Route path="/Business" element={<Business />} />
    <Route path="/Brochures" element={<Brochures />} />
    <Route path="/Uniform" element={<Uniform />} />
    <Route path="/Uniform/:id" element={<UniformType />} />
    <Route path="/UniformType/:id" element={<UniformDetailies />} />
  </Route>
);
