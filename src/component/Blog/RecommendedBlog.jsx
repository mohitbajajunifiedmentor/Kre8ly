import { useEffect, useState } from "react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const RightCircle = "/assets/Blog/RightCircle.png";
const LeftCircle = "/assets/Blog/LeftCircle.png";
import RecommendedPost from "./RecommendedPost";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ApiRequest from "../../Utils/Axios/Axios";
import { useSelector } from "react-redux";

const RecommendedBlog = ({ blogs }) => {

  const [loading, setLoading] = useState(false);

  return (
    <section className="px-4 py-8 relative ">
      {/* <img
        src={LeftCircle}
        alt="Circle"
        className="absolute top-0 w-[200px] md:w-[400px] left-0  select-none blur-md"
      />
      <img
        src={RightCircle}
        alt="Circle"
        className="absolute top-0 w-[200px] md:w-[400px] right-0  select-none blur-md"
      /> */}
      <h3
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="800"
        className="text-content text-3xl font-bold text-center pb-6 relative z-10">
        Related Posts
      </h3>
      {!loading ? (
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          className=" h-full mx-auto relative z-10">
          <Swiper
            navigation={true}
            modules={[Navigation, Pagination, A11y, Autoplay]}
            // pagination={{ clickable: true }}
            loop={true}
            spaceBetween={20}
            autoplay={{
              delay: 2000,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 10
              },
            }}
            className="w-full md:w-1/2"
          >
            {blogs?.map((item, i) => (
              <SwiperSlide key={i}>
                <RecommendedPost key={item.id} RecommendedPostInfo={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <AiOutlineLoading3Quarters
            className="animate-spin"
            size={60}
            color="#4B6BFB"
          />
        </div>
      )}
    </section>
  );
};

export default RecommendedBlog;
