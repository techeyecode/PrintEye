import React from "react";
import PageHeader from "../Components/PageHeader";
import CSidebar from "../Components/CSidebar";
import SignCards from "../FrontSectionts/Sign/SignCards";

const Sign: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHeader
        title="signCollection"
        subtitle="signCollectionSubtitle"
        backgroundImage="https://media.licdn.com/dms/image/v2/D4D12AQGsrOyYN0T0zA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1685950600665?e=2147483647&v=beta&t=uj0lOe-kS4VCswtVCAsqjymR7K9ZbOaiU0bqR6s4CzQ"
        breadcrumbs={[{ label: "home", path: "/" }, { label: "sign" }]}
      />

      <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between  gap-6 my-6 md:my-10">
        <div className="w-full lg:w-1/4">
          <CSidebar title="sign" type="Sign" />
        </div>

        <div className="w-full lg:w-3/4">
          <SignCards />
        </div>
      </div>
    </div>
  );
};

export default Sign;
