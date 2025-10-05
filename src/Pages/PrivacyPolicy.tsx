import React from "react";
import { useTranslation } from "react-i18next";
import { FaLink } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();

  const policySections = [
    {
      id: 1,
      title: t("informationWeCollect"),
      content: t("informationWeCollectSubtext"),
      list: t("informationWeCollectList", { returnObjects: true }),
    },
    {
      id: 2,
      title: t("useOfInformation"),
      content: t("useOfInformationSubtext"),
      list: t("useOfInformationList", { returnObjects: true }),
    },
    {
      id: 3,
      title: t("cookiesAndTrackingTechnologies"),
      content: t("cookiesAndTrackingTechnologiesSubtext"),
      list: t("cookiesAndTrackingTechnologiesList", { returnObjects: true }),
    },
    {
      id: 4,
      title: t("sharingOfInformation"),
      content: t("sharingOfInformationSubtext"),
      list: t("sharingOfInformationList", { returnObjects: true }),
    },
    {
      id: 5,
      title: t("dataSecurity"),
      content: t("dataSecuritySubtext"),
      list: t("dataSecurityList", { returnObjects: true }),
    },
    {
      id: 6,
      title: t("linksToOtherWebsites"),
      content: t("linksToOtherWebsitesSubtext"),
    },
    {
      id: 7,
      title: t("childrensPrivacy"),
      content: t("childrensPrivacySubtext"),
    },
    {
      id: 8,
      title: t("yourRightsAndChoices"),
      content: t("yourRightsAndChoicesSubtext"),
    },
    {
      id: 9,
      title: t("contactUs"),
      content: t("contactUsSubtext"),
      list: t("contactUsList", { returnObjects: true }),
    },
    {
      id: 10,
      title: t("updatesToPrivacyPolicy"),
      content: t("updatesToPrivacyPolicySubtext"),
    },
  ];

  return (
    <section className=" px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-3">
            {t("privacyPolicyTitle")}
          </h1>
          <p className="text-sm text-gray-500">
            {t("effectiveDate")}:{" "}
            <span className="font-medium">{t("date")}</span> |{" "}
            {t("lastUpdated")}: <span className="font-medium">{t("date")}</span>
          </p>
        </div>

        {/* Intro */}
        <p className="mb-8 text-lg leading-relaxed text-primary">
          {t("welcomeToEyePrint")}
        </p>

        {/* Sections */}
        <div className="space-y-10 text-primary">
          {policySections.map((section) => (
            <div key={section.id}>
              <h2 className="text-2xl font-semibold mb-3">
                {section.id}. {section.title}
              </h2>
              {section.content && <p className="mb-3">{section.content}</p>}
              {section.list && (
                <ul className="font-medium pl-6 space-y-2">
                  {section.list.map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
