import React from "react";
import { Link, useParams } from "react-router-dom";
import { allBrochures } from "./BrochuresIteams";
import CDetailies from "../../../Components/CDetailies";
import { TiHome } from "react-icons/ti";
import { IoIosPrint } from "react-icons/io";
import { GiMachineGunMagazine } from "react-icons/gi";

const BrochuresDetailies: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div className="p-4 text-red-500 text-center">Invalid Product</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <nav className="max-w-7xl mx-auto py-10 flex items-center space-x-2 text-sm mb-6 text-primary">
        <Link to="/" className="flex items-center transition-colors">
          <TiHome className="w-4 h-4 mr-1" />
          Home
        </Link>
        <span className="mx-3">/</span>
        <Link to="/Printing" className="flex items-center transition-colors">
          <IoIosPrint className="w-4 h-4 mr-1" />
          Printing
        </Link>
        <span className="mx-3">/</span>
        <Link to="/Brochures" className="flex items-center transition-colors">
          <GiMachineGunMagazine className="w-4 h-4 mr-1" />
          Brochures
        </Link>
      </nav>
      <CDetailies id={id} items={allBrochures} />
    </div>
  );
};

export default BrochuresDetailies;
