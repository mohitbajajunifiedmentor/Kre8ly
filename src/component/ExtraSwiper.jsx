// import React from "react";
// import { Navigation, A11y } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";

// const ExtraSwiper = ({ Extra, CourseName }) => {
//   return (
//     <div
//       data-aos="fade-up"
//       data-aos-delay="0"
//       data-aos-duration="800"
//       className="w-full"
//     >
//       <div className="text-center mb-4">
//         <h2 className="text-3xl lg:text-4xl font-semibold text-content mb-4">
//           Why Join Best {CourseName} at Kre8ly
//         </h2>
//         <p className="text-lg text-content-secondary max-w-2xl mx-auto">
//           Unlock valuable industry experience, expert mentorship, skill
//           development, and career growth opportunities through your internship
//           at Kre8ly.
//         </p>
//       </div>

//       <Swiper
//         data-aos="fade-up"
//         data-aos-delay="0"
//         data-aos-duration="800"
//         modules={[Navigation, A11y]}
//         spaceBetween={20}
//         slidesPerView={1.5}
//         navigation
//         loop={Extra?.length > 3}
//         breakpoints={{
//           640: { slidesPerView: 2, spaceBetween: 20 },
//           768: { slidesPerView: 2, spaceBetween: 30 },
//           1024: { slidesPerView: 3, spaceBetween: 30 },
//         }}
//         // Swiper's arrows default to its own blue. Binding them to currentColor
//         // makes them follow `text-content` in both themes.
//         className="py-10 text-content"
//         style={{
//           "--swiper-navigation-color": "currentColor",
//           "--swiper-navigation-size": "28px",
//         }}
//       >
//         {Extra?.map((highlight, index) => (
//           <SwiperSlide
//             key={index}
//             className="group !flex min-h-72 bg-white dark:bg-surface border border-transparent dark:border-line-strong shadow-lg dark:shadow-none rounded-xl p-8 md:px-16 md:py-8 flex flex-col items-center text-center relative overflow-hidden hover:shadow-2xl dark:hover:border-line-strong hover:-translate-y-2 transition-all duration-300"
//           >
//             <img
//               src={highlight.icon}
//               alt={highlight.icon_alt}
//               loading="lazy"
//               className="mx-auto object-contain w-24 h-24 hover:scale-105 transition-all duration-300"
//             />
//             <h4 className="text-content text-sm md:text-xl leading-relaxed text-center mt-3 font-semibold">
//               {highlight.title}
//             </h4>
//             <p className="text-content-secondary text-xs md:text-sm leading-relaxed text-center w-full md:w-[80%]">
//               {highlight.subtitle}
//             </p>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default ExtraSwiper;

import React from "react";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

/**
 * "Why join" slider (redesign).
 *
 *   - Light cards (surface + border + soft shadow) instead of a white/dark
 *     pair chosen by hand. Illustration sits in a round tint, and a small
 *     accent bar grows on hover, matching the other sections.
 *   - The card is now a div INSIDE each slide. Before, the slide itself was
 *     the card, so `hover:-translate-y-2` moved the whole slide and Swiper's
 *     overflow clipped its top and its shadow.
 *   - All cards are the same height, whatever the text length.
 *   - No wide side padding (it made cards look cut off at the edges). Arrows
 *     are small round buttons on md+ screens and hidden on phones; top/bottom
 *     padding leaves room for the hover lift.
 *   - Removed the second data-aos on <Swiper>; the wrapper already animates.
 *
 * Props, copy and Swiper settings (slides per view, loop rule) are unchanged.
 */

const ExtraSwiper = ({ Extra, CourseName }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="0"
      data-aos-duration="800"
      className="mx-auto w-full max-w-7xl px-2 md:px-6"
    >
      <div className="mb-4 text-center">
        <h2 className="mb-4 text-3xl font-semibold tracking-tight text-content lg:text-4xl">
          Why Join Best {CourseName} at Kre8ly
        </h2>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-content-secondary lg:text-lg">
          Unlock valuable industry experience, expert mentorship, skill
          development, and career growth opportunities through your internship
          at Kre8ly.
        </p>
      </div>

      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={20}
        slidesPerView={1.5}
        navigation
        loop={Extra?.length > 3}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        // No big side padding: it shrank the visible area and made the next
        // card look cut off at the edge. Only 4px on the sides (so the border
        // and shadow aren't clipped), room above/below for the hover lift.
        // Arrows are small round buttons over the card edges on md+ screens,
        // and hidden on phones, where people swipe.
        className="w-full !px-1 !pb-10 !pt-6 text-brand
          [&_.swiper-button-prev]:!left-1 [&_.swiper-button-next]:!right-1
          [&_.swiper-button-prev]:!h-10 [&_.swiper-button-next]:!h-10
          [&_.swiper-button-prev]:!w-10 [&_.swiper-button-next]:!w-10
          [&_.swiper-button-prev]:rounded-full [&_.swiper-button-next]:rounded-full
          [&_.swiper-button-prev]:border [&_.swiper-button-next]:border
          [&_.swiper-button-prev]:border-line [&_.swiper-button-next]:border-line
          [&_.swiper-button-prev]:bg-surface [&_.swiper-button-next]:bg-surface
          [&_.swiper-button-prev]:shadow-md [&_.swiper-button-next]:shadow-md
          max-md:[&_.swiper-button-prev]:!hidden max-md:[&_.swiper-button-next]:!hidden"
        style={{
          "--swiper-navigation-color": "currentColor",
          "--swiper-navigation-size": "16px",
        }}
      >
        {Extra?.map((highlight, index) => (
          <SwiperSlide key={index} className="!h-auto">
            <div className="group flex h-full min-h-72 flex-col items-center rounded-card border border-line bg-surface p-6 text-center shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-lg md:px-10 md:py-8">
              <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-brand-subtle transition-transform duration-300 group-hover:scale-105">
                <img
                  src={highlight.icon}
                  alt={highlight.icon_alt || ""}
                  loading="lazy"
                  className="h-20 w-20 object-contain"
                />
              </div>

              <h4 className="mt-5 text-base font-semibold leading-snug text-content md:text-xl">
                {highlight.title}
              </h4>
              <p className="mt-2 w-full text-xs leading-relaxed text-content-secondary md:w-[85%] md:text-sm">
                {highlight.subtitle}
              </p>

              <span
                aria-hidden="true"
                className="mt-auto h-1 w-8 rounded-full bg-brand/60 pt-0 transition-all duration-300 group-hover:w-16 group-hover:bg-brand"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ExtraSwiper;