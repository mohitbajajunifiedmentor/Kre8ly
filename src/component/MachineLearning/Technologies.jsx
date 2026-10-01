import React, { useRef, useState } from "react";
const Ellipse = "/assets/Ellipse.webp";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaLinkedin,
} from "react-icons/fa";

const Technologies = ({ Technology, varient }) => {
  console.log("Technology", Technology);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const Styles = {
    backDropImageShadow:
      "w-32 cursor-pointer transition-all duration-300 hover:scale-110 hover:filter hover:drop-shadow-[0px_0px_15px_rgba(255,217,0,0.8)]",
  };
  // TechCard Component
  const TechCard = ({ technology, index, isVisible }) => {
    console.log("technology", technology);

    const delay = (index + 1) * 100;

    const handleCardClick = () => {
      console.log(`Clicked on ${technology.name}`);
      // Handle card click - could show more details, navigate, etc.
    };

    return (
      <div className={`transition-all duration-600 `}>
        <div
          className="group bg-surface rounded-xl p-10 text-center shadow-md border border-line cursor-pointer hover:shadow-lg hover:-translate-y-1 hover:scale-102 transition-all duration-300"
          onClick={handleCardClick}
        >
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <img src={technology.img} alt={technology.alt} />
          </div>
          <h3 className="text-sm font-medium text-content">
            {technology.name}
          </h3>
        </div>
      </div>
    );
  };

  return (
    <div
      data-aos="zoom-out-up"
      data-aos-delay="0"
      data-aos-duration="800"
      className="w-full relative "
    >
      {/* <figure className={Styles.backDropImageShadow} className="hidden md:block relative z-20">
        <img src={Frames} alt="Frame" />
      </figure> */}
      {varient === "graphic-design" ? (
        // <div
        //   data-aos-delay="0"
        //   data-aos-duration="800"
        //   className="relative z-20 hidden xl:block">
        //   <div
        //     data-aos="fade-up"
        //     data-aos-delay="0"
        //     data-aos-duration="800"
        //     className="flex justify-around md:mx-96">
        //     <figure className={Styles.backDropImageShadow}>
        //       <img src={Technology[0]?.img} alt={Technology[0].alt} />
        //       <p className="text-center text-content text-lg font-bold">
        //         {Technology[0]?.name}
        //       </p>
        //     </figure>

        //     <figure className={Styles.backDropImageShadow}>
        //       <img src={Technology[1]?.img} alt={Technology[1].alt} />
        //       <p className="text-center text-content text-lg font-bold">
        //         {Technology[1]?.name}
        //       </p>
        //     </figure>
        //     <figure className={Styles.backDropImageShadow}>
        //       <img src={Technology[2]?.img} alt={Technology[2].alt} />
        //       <p className="text-center text-content text-lg font-bold">
        //         {Technology[2]?.name}
        //       </p>
        //     </figure>
        //   </div>
        //   <div className="flex justify-around md:mx-96">
        //     <figure className={Styles.backDropImageShadow}>
        //       <img src={Technology[3]?.img} alt={Technology[3].alt} />
        //       <p className="text-center text-content text-lg font-bold">
        //         {Technology[3]?.name}
        //       </p>
        //     </figure>

        //     <figure className={Styles.backDropImageShadow}>
        //       <img src={Technology[4]?.img} alt={Technology[4].alt} />
        //       <p className="text-center text-content text-lg font-bold">
        //         {Technology[4]?.name}
        //       </p>
        //     </figure>
        //   </div>
        // </div>
        <h1>-</h1>
      ) : (
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          className="relative"
        >
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="text-center mb-4"
          >
            <h2 className="text-3xl lg:text-4xl font-semibold text-content mb-4">
              Technologies & Tools You Will Learn
            </h2>
            <p className="text-lg text-content-secondary max-w-2xl mx-auto">
              Master industry-leading technologies and practical tools that
              prepare you for real-world development challenges.
            </p>
          </div>
          <div className="max-w-7xl mx-auto">
            {/* Header */}

            {/* MOBILE Swiper */}
            <div className="block md:hidden mt-10">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={15}
                autoplay={{ delay: 2000 }}
                pagination={{ clickable: true }}
                breakpoints={{
                  0: { slidesPerView: 2 },
                  500: { slidesPerView: 3 },
                }}
              >
                {Technology.map((tech, index) => (
                  // Technology entries have no `id` field; `name` is unique.
                  <SwiperSlide key={tech.name ?? index}>
                    <div className="bg-surface rounded-xl p-4 shadow-md flex flex-col items-center">
                      <img
                        src={tech.img}
                        alt={tech.alt}
                        className="w-16 h-16 mb-2"
                      />
                      <h3 className="text-xs font-semibold text-content-secondary">
                        {tech.name}
                      </h3>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Technologies Grid */}
            <div className="hidden md:block">
              <div
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="flex flex-wrap justify-center gap-10"
              >
                {Technology.map((tech, index) => (
                  <TechCard
                    key={tech.name ?? index}
                    technology={tech}
                    index={index}
                    isVisible={isVisible}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* <div className="xl:hidden grid grid-cols-3 gap-4 px-4">
        {Technology?.map((item, index) => (
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            key={item.name}
            className=" rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-110 hover:filter hover:drop-shadow-[0px_0px_15px_rgba(255,217,0,0.8)] "
          >
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="relative w-full h-16"
            >
              <img
                src={item.img}
                alt={item.name + ", " + item.alt}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-center text-[10px] md:text-xs font-bold text-content p-2">
              {item.name}
            </div>
          </div>
        ))}
      </div> */}
      {/* <div
        data-aos="fade-up"
        data-aos-delay="1000"
        className="px-4 lg:px-8 my-8 block relative z-20 md:hidden">
        <div
          data-aos="fade-up"
          data-aos-delay="1000"
          className="grid grid-cols-2 sm:grid-cols-3  gap-6">
          {Technology?.map((item) => (
            <div
              key={item.name}
              className=" rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-110 hover:filter hover:drop-shadow-[0px_0px_15px_rgba(255,217,0,0.8)] "
            >
              <div className="relative w-full h-28">
                <img
                  src={item.img}
                  alt={item.name + ", " + item.alt}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center text-sm text-content p-2">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <figure className={Styles.backDropImageShadow}>
        <img
          src={Ellipse}
          alt={Technology[0].alt}
          className="absolute -bottom-16 w-[250px] md:w-[450px] right-0 z-10 hidden dark:block dark:blur-md"
        />
      </figure>
    </div>
  );
};

export default Technologies;