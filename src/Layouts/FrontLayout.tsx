import React from "react";
import Navbar from "../Pages/Navbar";
import { Outlet } from "react-router-dom";

const FrontLayout = () => {
  return (
    <div className="">
      <div className="">
        <Navbar />
      </div>

      <Outlet />
    </div>
  );
};

export default FrontLayout;
