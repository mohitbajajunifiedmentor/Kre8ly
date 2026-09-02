import React from "react";
import Footer from "../component/Footer";
import Query from "../component/Query/Query";
import { press } from "../Utils/Press/Press";
import { Helmet } from "@/lib/helmet-compat";
import MobileFooter from "../component/MobileFooter";
import ChatBot from "@/component/ChatBot/ChatBot";

const PressBg = "/assets/Press/PressBG.png";
const Ellipse = "/assets/Press/EllipsePn.svg";
const Press_Hero = "/assets/Press/press_hero.jpg";

const PressPage = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <Helmet>
        <title>Press Releases & Media Updates - Kre8ly</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Kre8ly press, media coverage, education news, Kre8ly updates, edtech news"
        />
        <meta
          name="description"
          content="Stay updated with the latest press releases, media coverage, and announcements from Kre8ly – your source for learning, growth, and career success."
        />
        <meta name="author" content="Kre8ly" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unifiedmentor.com/press-releases"
        />
      </Helmet>

      <div
        className={`${
          darkMode ? "bg-custom-dark-gradient" : "bg-custom-light-gradient"
        } relative overflow-hidden`}
      >
        <img
          src={Ellipse}
          alt=""
          aria-hidden="true"
          className="absolute -top-44 -left-20 h-[550px] dark:hidden"
        />

        <main style={{ backgroundImage: `url(${PressBg})` }}>
          <section
            id="hero"
            className="relative w-full h-full py-8 p-4 overflow-hidden bg-gradient-to-br from-brand via-brand-active to-brand-hover min-h-[30rem]"
          >
            <div className="w-full h-full">
              <div
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="w-full h-full rounded-2xl flex flex-col md:flex-row justify-between gap-3 items-center md:items-start md:w-[90%] text-brand-fg p-5"
              >
                <div className="gap-4 text-center md:text-left w-full md:w-1/2 relative z-10 p-3">
                  <h1 className="text-4xl lg:text-5xl font-extrabold text-brand-fg mb-6">
                    <span className="capitalize">Press Releases</span>
                  </h1>
                  {/* was an <h3> directly after the <h1>, skipping a level for
                      what is really a subtitle rather than a section heading */}
                  <p className="block text-xl lg:text-2xl text-brand-fg/90 mt-2">
                    Stay updated with the latest announcements, milestones, and
                    media highlights from Kre8ly.
                  </p>
                  <p className="text-sm md:text-base text-brand-fg/90 mt-4">
                    Explore our press releases to see how we are transforming
                    education, empowering students, and shaping careers with
                    cutting-edge AI-driven learning and placement solutions.
                  </p>
                </div>

                <figure
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="800"
                  className="w-1/2 sm:w-3/5 md:w-1/2 lg:w-[30%] relative z-10 select-none"
                >
                  <img
                    className="w-full h-full rounded-lg hover:scale-105 transition-all duration-200"
                    src={Press_Hero}
                    alt="Kre8ly in the press"
                    loading="lazy"
                  />
                </figure>
              </div>
            </div>
          </section>

          <section className="md:p-10 p-4">
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-12 mb-8 md:p-0"
            >
              {press.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl z-20 shadow-lg h-auto hover:scale-105 transition-all duration-200 border-2 border-sky-900 overflow-hidden"
                >
                  {/* bg-surface here went dark in dark mode, and press logos are
                      dark artwork on transparent backgrounds — they vanished.
                      The plate stays white in both themes. */}
                  <img
                    src={item.image}
                    alt={item.image_alt}
                    loading="lazy"
                    className="w-full h-32 md:h-48 object-contain bg-white"
                  />
                  <div className="p-4 text-white bg-gradient-to-br from-slate-900 to-sky-900">
                    <h2 className="text-xs md:text-base font-bold mb-2">
                      {item.title}
                    </h2>
                    <p className="text-xs md:text-sm">{item.description}</p>
                    <p className="text-xs md:text-sm mt-3">{item.Date}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </main>

        <img
          src={Ellipse}
          alt=""
          aria-hidden="true"
          className="absolute bottom-[35%] -right-20 h-[600px] dark:hidden"
        />
        <Footer />
        <Query />
        <ChatBot darkMode={darkMode} />
        <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </>
  );
};

export default PressPage;