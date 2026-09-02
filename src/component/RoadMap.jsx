import React, { useEffect, useState, useRef } from "react";
const Road = "/assets/Road.png";
const RoadmapElem1 = "/assets/RoadmapElem1.png";
const RoadmapElem2 = "/assets/RoadmapElem2.png";
const RoadmapElem3 = "/assets/RoadmapElem3.png";
const RoadmapElem4 = "/assets/RoadmapElem4.png";
const RoadmapElem5 = "/assets/RoadmapElem5.png";
const Airplane = "/assets/Airplane2.png";
const RoadmapVideo = "/assets/RoadmapVideo.mp4"; // moved to /public

const RoadMap = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const trackPath = useRef(null);
  const [trackHeight, setTrackHeight] = useState(0);
  const [trackTop, setTrackTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (trackPath.current) {
      setTrackHeight(trackPath.current.offsetHeight);
      const rect = trackPath.current.getBoundingClientRect();
      setTrackTop(rect.top + window.pageYOffset);
    }
  }, []);

  const calculateAirplanePosition = () => {
    if (trackHeight === 0) return 0;

    const viewportHeight = window.innerHeight;
    const scrollPercentage =
      (scrollPosition + viewportHeight - trackTop) /
      (trackHeight + viewportHeight);
    const clampedPercentage = Math.max(0, Math.min(1, scrollPercentage));

    return clampedPercentage * trackHeight;
  };

  const RoadMapMobile = [
    {
      id: 1,
      title: "Registration",
      alt: "Registration",
      description:
        "Register at Kre8ly VIP Program to transform your journey.",
      image: RoadmapElem1,
    },
    {
      id: 2,
      title: "Offer Letter & Projects",
      alt: "Offer Letter & Projects",
      description:
        "Receive Offer letter next day after registration and select projects on batch start date.",
      image: RoadmapElem2,
    },
    {
      id: 3,
      title: "Hands on Projects & Learning",
      alt: "Hands on Projects & Learning",
      description:
        "Work on projects on your own practice skill set get help from modules and mentor support.",
      image: RoadmapElem3,
    },
    {
      id: 4,
      title: "Projects evaluation & Certification",
      alt: "Projects evaluation & Certification",
      description:
        "Projects you have worked on will be evealuted by industry team and verified certificate will be provided in a week.",
      image: RoadmapElem4,
    },
    {
      id: 5,
      title: "Get Placement Oppportnities",
      alt: "Get Placement Oppportnities",
      description:
        "Top performer will get dedicated job portal access with LOR and CV’s will be forwarded to tir-up companies resume builder and cv checker.",
      image: RoadmapElem5,
    },
  ];
  return (
    <div>
      {/* Desktop Roadmap Image */}
      {/* <figure className="hidden sm:block w-full mb-6">
        <img
          src={Roadmap}
          alt="Roadmap"
          className="w-full h-auto object-cover rounded-lg"
        />
      </figure> */}

      <div className=" mx-auto hidden sm:block w-full h-full -md:mb-16 mb-4  ">
        <video
          src={RoadmapVideo}
          className="w-full h-full object-cover"
          preload="auto"
          autoPlay={true}
          loop={true}
          muted={true}
          controlsList="nodownload"
          disablePictureInPicture
        ></video>
      </div>

      {/* Desktop View */}
      <div
        className="sm:hidden flex flex-row items-start gap-2 relative"
        ref={trackPath}
      >
        <figure className="">
          <img
            src={Airplane}
            alt="Airplane"
            className="w-16 h-16 -left-4 sm:w-20 sm:h-20 absolute "
            style={{
              top: `${calculateAirplanePosition()}px`,
              transition: "top 0.5s ease-out",
            }}
          />
        </figure>
        <figure className="w-16  homePageRoad">
          <img
            src={Road}
            alt="Road to Success"
            className="w-full h-full RoadTrack"
          />
        </figure>

        <div className="flex flex-col gap-4">
          {RoadMapMobile.map((item) => (
            <div
              key={item.id}
              className="flex items-start flex-col gap-8 bg-custom-card-gradient p-4 rounded-lg shadow-lg"
            >
              <div className="flex gap-5 items-center">
                <img src={item.image} alt={item.alt} className="w-6 h-6" />
                <p className="text-sm font-semibold text-secondary">
                  {item.title}
                </p>
              </div>
              <p className="text-secondary mt-2 text-left text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
