import CCarousel from "../../Components/CCarousel";
import HomeHeader from "../../Components/HomeHeader";

const CollectionSlider: React.FC = () => {
  const slides = [
    {
      id: 1,
      title: "Stanley Quencher H2.0 Flowstate Tumbler",
      image:
        "https://drpromosyon.com/assets/img/katalog/kategoriler/set03532-2026.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Allmade French Terry Pullover Hoodie",
      image:
        "https://drpromosyon.com/assets/img/katalog/kategoriler/viktorias_defter01.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Ember Mug",
      image:
        "https://drpromosyon.com/assets/img/katalog/kategoriler/ajanda_2202.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "Nomadix Festival Blanket",
      image:
        "https://drpromosyon.com/assets/img/katalog/kategoriler/defter2024-01.jpg",
      link: "#",
    },
    {
      id: 5,
      title: "Troubadour Apex Backpack 3.0",
      image:
        "https://drpromosyon.com/assets/img/katalog/kategoriler/powerbank2024111.jpg",
      link: "#",
    },
    {
      id: 6,
      title: "Stanley Quencher H2.0 Flowstate Tumbler",
      image:
        "https://drpromosyon.com/assets/img/katalog/kategoriler/termos2023.jpg",
      link: "#",
    },
    {
      id: 7,
      title: "Allmade French Terry Pullover Hoodie",
      image:
        "https://drpromosyon.com/assets/img/katalog/kategoriler/set01122024.jpg",
      link: "#",
    },
    {
      id: 8,
      title: "Ember Mug",
      image: "https://drpromosyon.com/assets/img/katalog/kategoriler/masa.jpeg",
      link: "#",
    },
  ];

  return (
    <section className="mx-auto px-4 lg:px-10">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
        <div className="w-full lg:w-1/4">
          <HomeHeader
            title="Beautifully Branded EyePrint"
            description="We expertly curate remarkable products, from emerging brands to household names, that are thoughtful and long-lasting."
            buttonText="See All"
            buttonLink="/Printing"
          />
        </div>

        <div className="w-full lg:w-3/4">
          <CCarousel slides={slides} />
        </div>
      </div>
    </section>
  );
};

export default CollectionSlider;
