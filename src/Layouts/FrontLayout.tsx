import SocialSticky from "../Components/SocialSticky";
import Footer from "../Pages/Footer";
import Navbar from "../Pages/Navbar";
import { Outlet } from "react-router-dom";

const FrontLayout = () => {
  return (
    <div className="">
      <Navbar />
      <SocialSticky />
      <Outlet />
      <Footer />
    </div>
  );
};

export default FrontLayout;
