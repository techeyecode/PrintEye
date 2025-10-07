import { Form, Input, Button } from "antd";
import PageHeader from "../Components/PageHeader";
import { FaLocationDot, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { BiSolidPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { t } = useTranslation();

  const contactInfo = {
    address: "address",
    city: "CountryCity",
    phone: "07507177656",
    email: "info@eyeprint.com",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26772.083474534348!2d44.0022428!3d36.1874049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400721ad41fcb2b9%3A0x19a15e05893b0b1d!2s52Q3%2BH3W%2C%20Sultan%20Muthafar%2C%20Erbil%2C%20Erbil%20Governorate!5e0!3m2!1sen!2siq!4v1728035532000!5m2!1sen!2siq",
    socialMedia: [
      {
        name: "facebook",
        url: "https://www.facebook.com/share/1CYGDbeJy4/?mibextid=wwXIfr",
        icon: <FaFacebookF size={24} />,
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/eye.print1",
        icon: <FaInstagram size={24} />,
      },
    ],
  };

  const handleSubmit = (values: ContactFormData) => {
    console.log("Form submitted:", values);
  };

  return (
    <section>
      <PageHeader
        title="Contact"
        subtitle="ContactSubtext"
        backgroundImage="https://static.gotprint.com/tl/en_US/company/about-us/images/about_us_hero_banner.png"
        breadcrumbs={[{ label: "home", path: "/" }, { label: "contactUs" }]}
      />

      <div className="container mx-auto px-4 max-w-7xl my-16">
        <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-8">
          {/* Left Column */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <div className="flex flex-col space-y-6 bg-white rounded-xl p-6 h-full ">
              <div className="flex items-center gap-4 text-primary">
                <FaLocationDot size={24} />
                <div>
                  <h1 className="font-semibold text-lg">
                    {t(contactInfo.city)}
                  </h1>
                  <p>{t(contactInfo.address)}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-primary">
                <BiSolidPhone size={24} />
                <div>
                  <h1 className="font-semibold text-lg">{contactInfo.phone}</h1>
                  <p>{t("SaturdayThursday")}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-primary">
                <MdEmail size={24} />
                <div>
                  <h1 className="font-semibold text-lg">{contactInfo.email}</h1>
                  <p>{t("sendUsYourQueryAnytime")}</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-6 mt-4">
                {contactInfo.socialMedia.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                  >
                    {social.icon}
                    <span className="hidden md:inline">{t(social.name)}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="w-full lg:w-2/3 flex flex-col">
            <Form
              layout="vertical"
              onFinish={handleSubmit}
              className="bg-white p-8 rounded-xl  transition-shadow duration-300 flex flex-col flex-grow"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
                <div>
                  <Form.Item
                    label={t("fullName")}
                    name="name"
                    rules={[
                      { required: true, message: t("pleaseEnterYourName") },
                    ]}
                  >
                    <Input placeholder={t("enterYourName")} size="large" />
                  </Form.Item>

                  <Form.Item
                    label={t("email")}
                    name="email"
                    rules={[
                      { required: true, message: t("pleaseEnterYourEmail") },
                      { type: "email", message: t("invalidEmailFormat") },
                    ]}
                  >
                    <Input placeholder={t("enterEmailAddress")} size="large" />
                  </Form.Item>

                  <Form.Item
                    label={t("subject")}
                    name="subject"
                    rules={[
                      { required: true, message: t("pleaseEnterSubject") },
                    ]}
                  >
                    <Input placeholder={t("enterSubject")} size="large" />
                  </Form.Item>
                </div>

                <div className="flex flex-col h-full">
                  <Form.Item
                    label={t("message")}
                    name="message"
                    rules={[
                      { required: true, message: t("pleaseEnterMessage") },
                    ]}
                    className="flex-grow"
                  >
                    <Input.TextArea
                      rows={8}
                      placeholder={t("enterYourMessage")}
                      className="rounded-lg resize-none h-full"
                    />
                  </Form.Item>
                </div>
              </div>

              <div className="text-right mt-auto">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="!bg-primary hover:!bg-secondary font-semibold py-3 px-8 rounded-lg transition-transform duration-200 transform"
                >
                  {t("sendMessage")}
                </Button>
              </div>
            </Form>
          </div>
        </div>
        <div className="map-container mt-12 rounded-lg overflow-hidden ">
          <iframe
            title="Office Location"
            src={contactInfo.mapSrc}
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            className="border-0 w-full h-96"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
