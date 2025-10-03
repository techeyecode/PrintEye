import React from "react";
import { LaserInvoices } from "./Invoice";
import InvoiceCard from "./InvoiceCard";

const LaserInvoice: React.FC = () => {
  return (
    <div className="container mx-auto text-center py-10">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-primary">Laser Invoice</h2>
        <p className="text-primary">
          Design a stunning card that perfectly captures your brand.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 p-2">
        {LaserInvoices.map((card, index) => (
          <InvoiceCard key={index} id={card.id} image={card.image} />
        ))}
      </div>
    </div>
  );
};

export default LaserInvoice;
