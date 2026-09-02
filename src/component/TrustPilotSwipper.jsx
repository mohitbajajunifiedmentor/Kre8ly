import React from 'react'
import { trustPilotReview } from "../Utils/TrustPilot";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { IoIosStar } from "react-icons/io";
import { SiTrustpilot } from "react-icons/si";
const TPLogo = "/assets/review_profiles/LogoTp.png";
const TrustPilotSwipper = () => {
    return (
        <div className='w-full px-4 py-10 text-white'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay]}
                className="w-full"
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1, // 1 slide per view on small screens
                        spaceBetween: 10, // Reduced space between slides
                    },
                    768: {
                        slidesPerView: 2, // 2 slides per view on medium screens (tablets)
                        spaceBetween: 20, // Space between slides
                    },
                    1024: {
                        slidesPerView: 3, // 3 slides per view on large screens (desktops)
                        spaceBetween: 30, // Space between slides
                    },
                }}
            >
                {trustPilotReview.map((review, index) => (
                    <SwiperSlide key={index}>
                        <>
                            <div className="flex items-center gap-3 mt-4">
                                {review.testimonial.img ? (
                                    <img
                                        src={review.testimonial.img.src}
                                        alt={review.testimonial.img.alt}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                ) : (
                                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                                )}
                                <div>
                                    <div className="font-bold text-sm">{review.testimonial.name}</div>
                                    <div className="text-xs">{review.testimonial.Date}</div>
                                </div>
                            </div>
                            <div className='bg-white flex flex-col items-start mt-4 justify-start  rounded-bl-xl p-4 rounded-r-xl'>
                                <div className='flex  gap-1'>
                                    {[...Array(review.testimonial.rating)].map((_, i) => (
                                        <SiTrustpilot
                                            key={i}
                                            size={20}
                                            className='bg-[#00B67A] text-white text-lg mb-4'
                                        />
                                    ))}
                                </div>
                                <div className='text-black h-[170px] text-base md:text-lg flex items-start text-start leading-snug'>
                                    <p>"{review.testimonial.text}"</p>
                                </div>
                            </div>
                        </>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="w-full text-white flex flex-col md:flex-row items-center justify-center px-4 py-6 gap-12 md:gap-24">
                {/* Left section */}
                <div className="flex flex-col items-start md:items-start gap-2">
                    {/* Rating and text */}
                    <div className="flex items-start gap-4">
                        <span className="text-6xl font-bold">4.22</span>
                        <div className="flex flex-col text-start">
                            <span className="text-secondary text-base font-medium">Great</span>
                            <div className="flex mt-1">
                                {[...Array(4)].map((_, i) => (
                                    <SiTrustpilot key={i} className="w-5 h-5 bg-[#73CF11] rounded-sm mr-0.5" />
                                ))}
                                <SiTrustpilot className="w-5 h-5 bg-gray-300 rounded-sm" />
                            </div>
                        </div>
                    </div>
                    {/* Review count */}
                    <p className="text-lg ml-12 font-semibold text-secondary mt-2">
                        171 Total Reviews
                    </p>

                    {/* Trustpilot logo */}
                    <figure className="h-10 mt-1 ml-10">
                        <img src={TPLogo} alt="Trustpilot" className="h-full w-auto" />
                    </figure>
                </div>

                {/* Right section - Button */}
                <div className="">
                    <a
                        href='https://www.trustpilot.com/evaluate/unifiedmentor.com'
                        target='_blank'
                        className="border border-white rounded-md px-5 py-2 text-xl font-semibold hover:bg-white hover:text-[#1B0C35] transition">
                        Write a Review
                    </a>
                </div>
            </div>

        </div>
    )
}

export default TrustPilotSwipper