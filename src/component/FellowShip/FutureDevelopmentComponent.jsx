// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination, Autoplay } from "swiper/modules";

// import { FutureDevelopment } from "../../Utils/FellowShip/CommonJson/Common";

// const FutureDevelopmentComponent = ({ swiperColor }) => {
//   return (
//     <div className="w-full h-full py-10 ">
//       <Swiper
//         modules={[Pagination, Autoplay]}
//         spaceBetween={30}
//         slidesPerView={1.5}
//         // pagination={{ clickable: true }}
//         breakpoints={{
//           768: { slidesPerView: 3 },
//           1024: { slidesPerView: 4 },
//         }}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//       >
//         {FutureDevelopment?.map((item, index) => (
//           <SwiperSlide key={index}>
//             <Cards
//               i={index}
//               icons={item?.img}
//               icon_alt={item?.alt}
//               headings={item?.title}
//               description={item?.description}
//               swiperColor={swiperColor}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// const Cards = ({ i, icons, icon_alt, headings, description, swiperColor }) => {
//   return (
//     <div
//       data-aos="flip-left"
//       data-aos-delay="0"
//       data-aos-duration="800"
//       className={`max-w-sm shadow-customSoft shadow-slate-500 min-h-52 md:min-h-72 ${swiperColor?.[i]} p-3 md:p-5 rounded-lg mx-auto h-8 mb-4`}
//     >
//       <div

//         className="flex flex-col gap-5 w-full h-full justify-center items-center">
//         <img src={icons} alt={icon_alt} className="w-12 h-12 md:w-16 md:h-16" />
//         <p className="font-semibold text-sm md:text-xl text-content">
//           {headings}
//         </p>
//         <p className="text-xs md:text-sm text-content text-center">{description}</p>
//       </div>
//     </div>
//   );
// };

// export default FutureDevelopmentComponent;



import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import { FutureDevelopment } from "../../Utils/FellowShip/CommonJson/Common";

/**
 * Future Development slider (redesign).
 *
 *   - Cards are light (surface + border + soft shadow) instead of a coloured
 *     fill with a heavy slate shadow. Works in light and dark mode.
 *   - `swiperColor` still works: each item's class is now applied to the
 *     icon tile only, so the colour stays as an accent instead of flooding
 *     the whole card. If it is missing, the tile falls back to `bg-brand-subtle`.
 *   - Every card is the same height. The old card had a stray `h-8` and
 *     `mb-4`; both are gone.
 *   - `flip-left` AOS on slides inside a Swiper tends to glitch while
 *     sliding, so it is now a plain `fade-up`.
 */

const FutureDevelopmentComponent = ({ swiperColor }) => {
  return (
    <div className="h-full w-full py-10">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1.5}
        // pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // padding so the hover lift and shadow are not clipped by Swiper
        className="!px-1 !pb-4 !pt-2"
      >
        {FutureDevelopment?.map((item, index) => (
          <SwiperSlide key={index} className="!h-auto">
            <Cards
              i={index}
              icons={item?.img}
              icon_alt={item?.alt}
              headings={item?.title}
              description={item?.description}
              swiperColor={swiperColor}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const Cards = ({ i, icons, icon_alt, headings, description, swiperColor }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="0"
      data-aos-duration="800"
      className="group mx-auto flex h-full min-h-52 max-w-sm flex-col items-center rounded-card border border-line bg-surface p-4 text-center shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg md:min-h-72 md:p-6"
    >
      <div
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-control transition-transform duration-300 group-hover:scale-110 md:h-[4.5rem] md:w-[4.5rem] ${
          swiperColor?.[i] ?? "bg-brand-subtle"
        }`}
      >
        <img
          src={icons}
          alt={icon_alt}
          loading="lazy"
          className="h-8 w-8 object-contain md:h-11 md:w-11"
        />
      </div>

      <h3 className="mt-4 text-sm font-semibold leading-snug text-content md:mt-5 md:text-xl">
        {headings}
      </h3>

      <p className="mt-2 text-xs leading-relaxed text-content-secondary md:text-sm">
        {description}
      </p>

      {/* accent bar that grows on hover, pinned to the bottom */}
      <span
        aria-hidden="true"
        className="mt-auto h-1 w-8 rounded-full bg-brand/60 transition-all duration-300 group-hover:w-16 group-hover:bg-brand"
      />
    </div>
  );
};

export default FutureDevelopmentComponent;