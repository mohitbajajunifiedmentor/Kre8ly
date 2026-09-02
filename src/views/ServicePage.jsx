import React from "react";
import Footer from "../component/Footer";
import { Helmet } from "@/lib/helmet-compat";
import Query from "../component/Query/Query";
import { Link } from "@/lib/router-compat";
import MobileFooter from "../component/MobileFooter";
import ChatBot from "@/component/ChatBot/ChatBot";

const ServiceGif = "/assets/ServicePage/ServiceImage.svg";
const SoftwareGif = "/assets/ServicePage/Image1.svg";
const WebGif = "/assets/ServicePage/Image%202.svg";
const MobileGif = "/assets/ServicePage/Image%203.svg";
const DigitalGif = "/assets/ServicePage/Image%204.svg";

// The alt text used to be shifted one row down the list — Web Development
// carried the digital-marketing description, Mobile carried Web's, and so on.
const SERVICES = [
  {
    id: 1,
    title: "Software Development",
    description:
      "Our software development team specializes in creating tailored solutions to address your unique business requirements. Whether you need robust enterprise software or sleek, user-friendly applications, we have the expertise to deliver. We understand that technology is at the core of your business, and we're here to help you stay ahead of the curve with cutting-edge software solutions that drive success.",
    img: SoftwareGif,
    img_alt:
      "Kre8ly Software Development – Offering tailored software solutions that ensure flawless mobile and web application performance",
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Our web development experts build responsive, user-friendly websites that leave a lasting impression. From corporate sites to e-commerce platforms, we create stunning online experiences for your audience. We focus on delivering websites that not only look great but also function seamlessly, ensuring that your online presence is a true asset to your business. Let us transform your web presence and elevate your brand.",
    img: WebGif,
    img_alt:
      "Kre8ly Web Development – Providing responsive and visually stunning website solutions using CSS, HTML, and JavaScript",
  },
  {
    id: 3,
    title: "Mobile Development",
    description:
      "We specialize in creating mobile apps for both iOS and Android platforms. Our apps are designed to enhance user experience, boost engagement, and help you connect with your target audience. Mobile apps have become essential tools for businesses, and we're here to provide you with innovative solutions that set you apart in the mobile landscape. Whether it's a consumer-facing app or a business tool, we have the expertise to make it a success.",
    img: MobileGif,
    img_alt:
      "Kre8ly Mobile Development – Delivering responsive mobile app solutions with modern UI and seamless functionality",
  },
  {
    id: 4,
    title: "Digital Marketing",
    description:
      "We specialize in crafting digital marketing strategies that elevate your brand's online presence across multiple platforms. Our services are designed to enhance visibility, boost engagement, and help you connect with your target audience effectively. In today's digital age, a strong online presence is essential for business success, and we're here to provide innovative solutions that set you apart in the digital landscape. Whether it's SEO, social media marketing, or content creation, we have the expertise to drive your business forward.",
    img: DigitalGif,
    img_alt:
      "Kre8ly Digital Marketing – Delivering strategic digital marketing solutions to grow your brand and online presence",
  },
];

const sectionStylings = {
  title: "text-2xl sm:text-3xl lg:text-4xl font-semibold text-content mb-4",
  subTitle: "text-base sm:text-lg text-content-secondary max-w-2xl mx-auto",
};

const ServicePage = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <Helmet>
        <title>Kre8ly | Full-Service Digital Solutions</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <link rel="canonical" href="https://www.unifiedmentor.com/services" />
        <meta
          name="keywords"
          content="web development services, software development, mobile app development, digital marketing services"
        />
        <meta
          name="description"
          content="Get top-notch Web, Software, Mobile App Development & Digital Marketing services from Kre8ly. Scalable, smart, and tailored to your business needs."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content="Kre8ly: Welcome to Kre8ly" />
        <meta
          property="og:image"
          content="https://www.unifiedmentor.com/img/logo-blue.png"
        />
        <meta
          property="og:description"
          content="At Kre8ly, we are dedicated to helping businesses thrive in the digital age. Our mission is to empower you with innovative solutions, designed to transform your online presence and drive success."
        />
      </Helmet>

      {/* `text-white` used to sit on this wrapper, so in light mode every
          descendant that didn't set its own colour rendered white on a light
          background. Colour now comes from the tokens on each element. */}
      <div
        className={`w-full h-full flex flex-col justify-center items-center text-center overflow-hidden ${
          darkMode ? "bg-custom-dark-gradient" : "bg-custom-light-gradient"
        }`}
      >
        <main className="w-full">
          <section
            id="hero"
            className="w-full flex flex-col justify-center items-center text-center h-full gap-4 md:gap-6 bg-gradient-to-br from-brand via-brand-active to-brand-hover md:min-h-[35rem]"
          >
            <div className="flex flex-col-reverse lg:flex-row justify-start items-center gap-6 md:gap-8 w-full min-h-[28rem] h-full px-4 sm:px-10">
              {/* Text Section */}
              <div
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="flex flex-col w-full lg:w-1/2 items-start text-left md:px-0"
              >
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-brand-fg mb-4 sm:mb-6">
                  Welcome to Kre8ly
                </h1>
                <p className="block text-lg sm:text-xl lg:text-2xl text-brand-fg/90">
                  Your Partner in Digital Excellence
                </p>
                <p className="text-sm sm:text-base md:text-lg text-brand-fg/90 mt-4 sm:mt-8 md:mt-10">
                  At Kre8ly, our mission is to empower businesses to thrive in
                  the digital age through innovative, cutting-edge solutions. We
                  specialize in transforming your online presence to drive
                  growth and success. By partnering with us, you’ll gain the
                  expertise needed to navigate the digital landscape confidently
                  and achieve your business goals effectively. Let’s make your
                  digital ambitions a reality.
                </p>
              </div>

              {/* Image Section */}
              <div
                data-aos="zoom-in"
                data-aos-delay="0"
                data-aos-duration="800"
                className="w-full lg:w-1/2 flex items-center justify-center"
              >
                <figure className="w-10/12 sm:w-8/12 md:w-10/12 max-w-lg">
                  <img
                    src={ServiceGif}
                    alt="Kre8ly – Your Partner in Digital Excellence, delivering expert digital solutions to help businesses grow online"
                    className="rounded-2xl w-full h-auto object-cover"
                  />
                </figure>
              </div>
            </div>
          </section>

          <section className="text-center mt-10 px-4 sm:px-6 lg:px-8">
            <h2
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className={`${sectionStylings.title} p-4`}
            >
              Our Top <span className="text-brand">Services</span>
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className={`${sectionStylings.subTitle} pb-4`}
            >
              We are your trusted partner for a wide range of IT services.
              Discover how we can empower your business:
            </p>

            {/* Four near-identical blocks used to be written out by hand, which
                is how the alt-text drift went unnoticed. */}
            {SERVICES.map((service, index) => {
              const imageFirst = index % 2 === 1;
              return (
                <div
                  key={service.id}
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="800"
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8"
                >
                  <div
                    className={`flex justify-center ${
                      imageFirst ? "order-2 md:order-1" : "md:order-2"
                    }`}
                  >
                    <figure className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                      <img
                        src={service.img}
                        alt={service.img_alt}
                        loading="lazy"
                        className="w-full h-auto rounded-lg object-cover shadow-lg hover:scale-105 transition-all duration-200"
                      />
                    </figure>
                  </div>

                  <div
                    className={`flex flex-col justify-center items-start text-start ${
                      imageFirst ? "order-1 md:order-2" : "md:order-1"
                    }`}
                  >
                    <h3 className={`${sectionStylings.title} text-start`}>
                      {service.title}
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl text-content">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </section>

          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="flex flex-col justify-center text-start items-center mb-8 px-4 md:px-10"
          >
            <h2 className={`${sectionStylings.title} text-start`}>
              Why Choose Us?
            </h2>
            <p className="text-base md:text-lg text-start text-content">
              With a strong commitment to quality and innovation, we are your
              ideal partner for all your IT service needs. Join us in achieving
              excellence in the digital world.
            </p>
            <Link
              to="/contact-us"
              className="bg-brand text-brand-fg hover:bg-brand-hover px-4 text-xs md:text-sm py-3 flex items-center font-bold w-fit justify-center rounded-md mt-3 hover:scale-105 transition-all duration-200"
            >
              Get Started
            </Link>
          </section>

          <Query />
          <ChatBot darkMode={darkMode} />
        </main>
      </div>
      <Footer />
      <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
};

export default ServicePage;