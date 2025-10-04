import { useState, useEffect } from "react";
import { Row, Col } from "antd";

const Client = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [clients.length]);

  const getVisibleClients = () => {
    const visible = [];
    const slidesToShow = 6;

    for (let i = 0; i < slidesToShow; i++) {
      const index = (currentIndex + i) % clients.length;
      visible.push(clients[index]);
    }
    return visible;
  };

  return (
    <div className="overflow-hidden mx-10">
      <Row gutter={[10, 10]} justify="center" align="middle">
        {getVisibleClients().map((client, index) => (
          <Col
            key={`${client.id}-${index}`}
            xs={12}
            sm={8}
            md={6}
            lg={4}
            xl={4}
          >
            <img src={client.image} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Client;
