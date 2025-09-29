import PageHeader from "../../Components/PageHeader";

const PrintingHeader = () => {
  return (
    <PageHeader
      title="All Items"
      subtitle="There's no such thing as too many options"
      backgroundImage="https://static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/business_card_info_hero_badge.jpg"
      breadcrumbs={[{ label: "Home", path: "/" }, { label: "Printing" }]}
    />
  );
};

export default PrintingHeader;
