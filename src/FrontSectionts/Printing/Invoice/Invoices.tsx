import React from "react";
import LaserInvoice from "./LaserInvoice";
import NormalInvoice from "./NormalInvoice";
import TurkeyInvoice from "./TurkeyInvoice";

const Invoices = () => {
  return (
    <div>
      <LaserInvoice />
      <NormalInvoice />
      <TurkeyInvoice />
    </div>
  );
};

export default Invoices;
