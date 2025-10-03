import Footer from "../Pages/Footer";
import Navbar from "../Pages/Navbar";
import { Outlet } from "react-router-dom";

const FrontLayout = () => {
  return (
    <div className="">
      <Navbar />

      <Outlet />
      <Footer />
    </div>
  );
};

export default FrontLayout;
