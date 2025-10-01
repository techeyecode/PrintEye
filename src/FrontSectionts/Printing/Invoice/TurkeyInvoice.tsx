import React from "react";
import { TurkeyInvoices } from "./Invoice";
import InvoiceCard from "./InvoiceCard";

const TurkeyInvoice: React.FC = () => {
  return (
    <div className="container mx-auto text-center py-10">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-primary">Turkey Invoice</h2>
        <p className="text-primary">
          Design a stunning card that perfectly captures your brand.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
        {TurkeyInvoices.map((card, index) => (
          <InvoiceCard
            key={index}
            id={card.id}
            label={card.label}
            count={card.count}
            image={card.image}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default TurkeyInvoice;
