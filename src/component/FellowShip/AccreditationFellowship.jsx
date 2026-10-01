import React from "react";
const Accreditation1 = "/assets/Accreditation1.png";
const Accreditation2 = "/assets/Accreditation2.png";
const Accreditation3 = "/assets/Accreditation3.png";
const Accreditation4 = "/assets/Accreditation4.png";
const Accreditation5 = "/assets/nasscomF.png";

const AccreditationFellowship = () => {
  return (
    <div className="w-full h-full hidden md:block">
      <div className="md:grid hidden grid-cols-4 gap-4 md:gap-6 relative z-20 max-w-4xl mx-auto">
        <div
          data-aos="flip-right"
          // data-aos-delay="700"
          className="flex items-center text-primary w-full max-w-xs bg-[#75B5F5]  p-4  max-h-24 rounded-lg"
        >
          <figure className="w-1/3">
            <img
              src={Accreditation1}
              alt="ISO 9001 Certified – Approved by MSME"
              className="w-full"
            />
          </figure>
          <figcaption className="ml-4 flex flex-col text-white">
            <p className="text-sm font-medium">
              International Organisation for Standardization
            </p>
            <p className="text-sm">Approved by MSME</p>
          </figcaption>
        </div>
        {/* <div
          data-aos="flip-right"
          className="flex items-center text-primary bg-[#7ED48C] w-full max-w-xs  p-4  max-h-24 rounded-lg">
          <figure className="w-1/3">
            <img src={Accreditation2} alt="All India Council for Technical Education (AICTE) Approved" className="w-full" />
          </figure>
          <figcaption className="ml-4 flex flex-col text-white">
            <p className="text-sm font-medium">
              All India Council for Technical Education
            </p>
          </figcaption>
        </div> */}
        <div
          data-aos="flip-right"
          // data-aos-delay="700"
          className="flex items-center justify-center bg-[#705FC3] text-primary w-full max-w-xs max-h-24 p-4 rounded-lg"
        >
          <figure className="w-1/2">
            <img
              src={Accreditation3}
              alt="Ministry of Corporate Affairs, Government of India"
              className="w-full "
            />
          </figure>
        </div>
        <div
          data-aos="flip-right"
          // data-aos-delay="700"
          className="flex items-center text-primary overflow-hidden justify-center max-h-24 w-full max-w-xs bg-[#FFE68C]  p-4 rounded-lg"
          id="certificate"
        >
          <figure className="">
            <img
              src={Accreditation4}
              alt="Startup India Initiative"
              className="w-full "
            />
          </figure>
        </div>
        <div
          data-aos="flip-right"
          // data-aos-delay="700"
          className="flex items-center text-primary overflow-hidden justify-center max-h-24 w-full max-w-xs bg-[#FFE6D3]  p-4  rounded-lg"
          id="certificate"
        >
          <figure className="">
            <img
              src={Accreditation5}
              alt="NASSCOM Membership Certificate – Kre8ly"
              className="w-full "
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default AccreditationFellowship;
