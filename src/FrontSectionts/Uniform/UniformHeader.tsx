import PageHeader from "../../Components/PageHeader";

const UniformHeader = () => {
  return (
    <PageHeader
      title="All Items"
      subtitle="There's no such thing as too many options"
      backgroundImage="https://www.cloveandtwine.com/cdn/shop/collections/visa_card_1500x.jpg?v=1661966680"
      breadcrumbs={[{ label: "Home", path: "/" }, { label: "Uniform" }]}
    />
  );
};

export default UniformHeader;
