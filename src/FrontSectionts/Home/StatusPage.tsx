import React from "react";

const StatusPage: React.FC = () => {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-2">
            Reject the Status Quo
          </h2>
          <p className="text-lg text-primary">
            Give better corporate gifts for a better future.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div
            className="w-full h-[300px] lg:h-[500px] bg-center bg-cover rounded-lg shadow-md"
            style={{
              backgroundImage:
                "url(//www.cloveandtwine.com/cdn/shop/files/1_c50f67dc-c87e-4fcf-a096-87f9cff4b34b_1500x.jpg?v=1738512385)",
            }}
          />

          <div
            className="w-full h-[300px] lg:h-[500px] bg-center bg-cover rounded-lg shadow-md"
            style={{
              backgroundImage:
                "url(//www.cloveandtwine.com/cdn/shop/files/CustomThera-2_1500x.jpg?v=1738561440)",
            }}
          />

          <div className="grid grid-cols-2 gap-6 col-span-1 lg:col-span-2">
            <div
              className="w-full h-[250px] lg:h-[400px] bg-center bg-cover rounded-lg shadow-md"
              style={{
                backgroundImage:
                  "url(//www.cloveandtwine.com/cdn/shop/files/Caistravelkit-3_54d5987d-bd3c-4129-9374-77cd0448021e_1500x.jpg?v=1738515590)",
              }}
            />
            <div
              className="w-full h-[250px] lg:h-[400px] bg-center bg-cover rounded-lg shadow-md"
              style={{
                backgroundImage:
                  "url(//www.cloveandtwine.com/cdn/shop/files/Duolingo_C_T-9_1500x.jpg?v=1738515578)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatusPage;
