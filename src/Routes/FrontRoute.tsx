import { Route } from "react-router-dom";
import FrontLayout from "../Layouts/FrontLayout";
import Home from "../Pages/Home";
import Promosyon from "../FrontSectionts/Promosyon/Promosyon";
import PromosyonDetailies from "../FrontSectionts/Promosyon/PromosyonDetailies";
import Matbaa from "../FrontSectionts/Matbaa/Matbaa";

export const FrontRoute = (
  <Route path="/" element={<FrontLayout />}>
    <Route index element={<Home />} />
    <Route path="/Promosyon" element={<Promosyon />} />
    <Route path="/Promosyon/:id" element={<PromosyonDetailies />} />
    <Route path="/Matbaa" element={<Matbaa />} />
  </Route>
);
