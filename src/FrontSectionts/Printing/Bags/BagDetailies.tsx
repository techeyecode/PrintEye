import React from "react";
import { Link, useParams } from "react-router-dom";
import { AllBags } from "./Bags";
import CDetailies from "../../../Components/CDetailies";
import { TiHome } from "react-icons/ti";
import { IoIosPrint } from "react-icons/io";
import { FaCreditCard } from "react-icons/fa";

const BagDetailies: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div className="p-4 text-red-500 text-center">Invalid Product</div>;
  }

  return (
    <div>
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
        <Link to="/Bag" className="flex items-center transition-colors">
          <FaCreditCard className="w-4 h-4 mr-1" />
          Bag
        </Link>
      </nav>
      <CDetailies id={id} items={AllBags} />
    </div>
  );
};

export default BagDetailies;
