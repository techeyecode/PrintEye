const Client = () => {
  const clients = [
    {
      id: 1,
      image:
        "https://qodeinteractive.com/qi-addons-for-elementor/wp-content/uploads/2021/01/clients-list-image-18.png",
    },
    {
      id: 2,
      image:
        "https://qodeinteractive.com/qi-addons-for-elementor/wp-content/uploads/2021/01/clients-list-img-22.png",
    },
    {
      id: 3,
      image:
        "https://qodeinteractive.com/qi-addons-for-elementor/wp-content/uploads/2021/01/clients-list-img-19.png",
    },
    {
      id: 4,
      image:
        "https://qodeinteractive.com/qi-addons-for-elementor/wp-content/uploads/2021/01/clients-list-img-26.png",
    },
    {
      id: 5,
      image:
        "https://qodeinteractive.com/qi-addons-for-elementor/wp-content/uploads/2021/01/clients-list-img-21.png",
    },
    {
      id: 6,
      image:
        "https://qodeinteractive.com/qi-addons-for-elementor/wp-content/uploads/2021/01/clients-list-img-23.png",
    },
  ];

  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="overflow-hidden w-full">
      <div className="flex animate-scroll space-x-10 whitespace-nowrap">
        {duplicatedClients.map((client, index) => (
          <div
            key={`${client.id}-${index}`}
            className="flex-shrink-0 w-40 h-24 flex items-center justify-center"
          >
            <img
              src={client.image}
              className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Client;
