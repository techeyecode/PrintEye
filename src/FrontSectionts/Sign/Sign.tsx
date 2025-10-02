import React from "react";
import CSidebar from "../../Components/CSidebar";
import PageHeader from "../../Components/PageHeader";
import SignCards from "./SignCards";

const Sign: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHeader
        title="All Items"
        subtitle="There's no such thing as too many options"
        backgroundImage="https://media.licdn.com/dms/image/v2/D4D12AQGsrOyYN0T0zA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1685950600665?e=2147483647&v=beta&t=uj0lOe-kS4VCswtVCAsqjymR7K9ZbOaiU0bqR6s4CzQ"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Sign" }]}
      />

      <div className="flex flex-col lg:flex-row items-start justify-between mx-4 md:mx-10 lg:mx-20 gap-6 lg:gap-10 my-6 md:my-10">
        <div className="w-full lg:w-1/4">
          <CSidebar title="Signs" type="Sign" />
        </div>

        <div className="w-full lg:w-3/4">
          <SignCards />
        </div>
      </div>
    </div>
  );
};

export default Sign;
