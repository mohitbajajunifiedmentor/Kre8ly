import React, { useEffect, useRef, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import MobileFooter from "../component/MobileFooter";
import Query from "../component/Query/Query";
import ChatBot from "@/component/ChatBot/ChatBot";

import { Section, SectionHeader, Eyebrow } from "@/component/ui/Section";
import Reveal from "@/component/ui/Reveal";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import {
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaLinkedin,
  FaStar,
  FaTimes,
  FaArrowRight,
  FaCheckCircle
} from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import ReactPlayer from "react-player";
import { Helmet } from "@/lib/helmet-compat";
import { Link } from "@/lib/router-compat";
import { LinkedinPosts } from "../Utils/SuccessStoriesInfo";

const Heroimage = "/assets/Ourstories/Heroimage.png";

// Compact Interactive Video Card
const VideoCard = ({ videoId, onPlay }) => {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div
      onClick={() => onPlay(`https://www.youtube.com/watch?v=${videoId}`)}
      className="group relative w-full aspect-video rounded-card overflow-hidden border border-line bg-surface-sunken cursor-pointer shadow-sm hover:shadow-xl hover:border-brand/40 transition-all duration-300"
    >
      <img
        src={thumbnailUrl}
        alt="Student Story Video Preview"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors flex items-center justify-center">
        <div className="w-13 h-13 rounded-full bg-brand text-brand-fg flex items-center justify-center shadow-lg group-hover:scale-110 active:scale-95 transition-all">
          <FaPlay className="text-base ml-1" />
        </div>
      </div>
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white/90 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-control">
        <span className="font-medium truncate">Student Career Journey</span>
        <span className="text-brand font-semibold shrink-0">Watch Now &rarr;</span>
      </div>
    </div>
  );
};

export default function OurStories({ darkMode, setDarkMode }) {
  const [modalVideoUrl, setModalVideoUrl] = useState(null);
  const [videos, setVideos] = useState([]);
  const [isPopUp, setIsPopUp] = useState(false);

  const swiperRef = useRef(null);
  const studentSwiperRef = useRef(null);

  const fetchVideos = async () => {
    try {
      const res = await fetch(
        "https://official-website-mern-backend-1023229424452.asia-south2.run.app/api/youtube-videos"
      );
      const data = await res.json();
      if (data && data.videos) {
        setVideos(data.videos);
      }
    } catch (err) {
      console.error("Failed to fetch videos", err);
    }
  };

  useEffect(() => {
    fetchVideos();
    const interval = setInterval(fetchVideos, 300000);
    return () => clearInterval(interval);
  }, []);

  // Static fallback if API is slow or empty
  const defaultVideoIds = [
    "nCvkn4ksyAA",
    "agkdM4x3cKw",
    "CBJIBgRR7yg",
    "e0nU44_qK-4",
    "mY6fFVZyGhE",
    "t7zzqEOIKB8",
  ];

  const displayVideos =
    Array.isArray(videos) && videos.length > 0
      ? videos.map((v) => v.videoId)
      : defaultVideoIds;

  return (
    <>
      <Helmet>
        <title>Our Stories | Inspiring Success Stories at Kre8ly</title>
        <meta
          name="description"
          content="Discover inspiring success stories from Kre8ly students who have achieved remarkable career growth."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.unifiedmentor.com/our-stories" />
      </Helmet>

      {/* Video Modal Player */}
      {modalVideoUrl && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-card overflow-hidden shadow-2xl border border-line">
            <ReactPlayer
              url={modalVideoUrl}
              width="100%"
              height="100%"
              controls
              playing
            />
            <button
              onClick={() => setModalVideoUrl(null)}
              className="absolute top-3 right-3 text-white bg-black/60 hover:bg-error p-2 rounded-full transition-colors z-20"
            >
              <FaTimes className="text-sm" />
            </button>
          </div>
        </div>
      )}

      {/* Feedback Modal */}
      {isPopUp && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <FeedBackForm setIsPopUp={setIsPopUp} />
        </div>
      )}

      <main className="w-full bg-canvas text-content min-h-screen">
        {/* ================= HERO SECTION ================= */}
        <Section tone="canvas" space="lg" className="overflow-hidden pt-8 md:pt-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-5 text-left">
              <Reveal direction="up">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-subtle border border-line text-brand text-xs sm:text-sm font-semibold">
                  <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                  Real Learners. Measurable Impact.
                </div>
              </Reveal>

              <Reveal direction="up" delay={70}>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-content">
                  Inspiring Stories of{" "}
                  <span className="text-brand">Growth & Transformation</span>
                </h1>
              </Reveal>

              <Reveal direction="up" delay={140}>
                <p className="text-sm sm:text-base lg:text-lg text-content-secondary leading-relaxed max-w-2xl">
                  Hear directly from graduates who leveled up their skills, cracked
                  interviews at top tier companies, and completely redefined their career trajectory.
                </p>
              </Reveal>

              {/* Action Buttons */}
              <Reveal direction="up" delay={200}>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="#videoStories"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-control bg-brand px-6 text-sm font-semibold text-brand-fg shadow-sm transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus"
                  >
                    Watch Videos <FaPlay className="text-xs ml-0.5" />
                  </a>
                  <button
                    onClick={() => setIsPopUp(true)}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-control border border-line bg-surface px-6 text-sm font-semibold text-content hover:bg-surface-sunken transition-colors"
                  >
                    Share Your Story
                  </button>
                </div>
              </Reveal>

              {/* Fast Stats Pill */}
              <Reveal direction="up" delay={260}>
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-line mt-2">
                  <div className="p-3 rounded-card border border-line bg-surface text-left">
                    <div className="text-lg sm:text-xl font-bold text-content leading-tight">
                      94%
                    </div>
                    <div className="text-[11px] text-content-secondary font-medium">
                      Career Switch Rate
                    </div>
                  </div>
                  <div className="p-3 rounded-card border border-line bg-surface text-left">
                    <div className="text-lg sm:text-xl font-bold text-content leading-tight">
                      120%
                    </div>
                    <div className="text-[11px] text-content-secondary font-medium">
                      Avg Salary Hike
                    </div>
                  </div>
                  <div className="p-3 rounded-card border border-line bg-surface text-left">
                    <div className="text-lg sm:text-xl font-bold text-content leading-tight">
                      10k+
                    </div>
                    <div className="text-[11px] text-content-secondary font-medium">
                      Success Stories
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Graphic */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <Reveal direction="fade" className="w-full max-w-md lg:max-w-none">
                <div className="relative rounded-panel border border-line bg-surface p-4 sm:p-5 shadow-sm">
                  <img
                    src={Heroimage}
                    alt="Kre8ly Student Success Stories"
                    className="w-full h-auto object-contain rounded-card"
                  />
                  <div className="absolute -bottom-4 -left-2 sm:left-4 rounded-card border border-line bg-surface p-3 shadow-md flex items-center gap-3">
                    <div className="w-9 h-9 rounded-control bg-brand-subtle text-brand flex items-center justify-center text-lg shrink-0">
                      <FaStar className="text-warning text-sm" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-content">4.9/5 Average Review</p>
                      <p className="text-[10px] text-content-secondary">
                        From 3,000+ verified graduates
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </Section>

        {/* ================= VIDEO STORIES SLIDER ================= */}
        <Section id="videoStories" tone="sunken" space="lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <SectionHeader
              eyebrow="Video Testimonials"
              title="Straight from Our Graduates"
              lead="Watch unedited journeys, interview tips, and how our mentorship made the difference."
            />
            {/* Swiper Controls */}
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <button
                onClick={() => swiperRef.current?.swiper?.slidePrev()}
                className="w-10 h-10 rounded-control border border-line bg-surface text-content flex items-center justify-center hover:bg-surface-sunken hover:border-brand/40 transition-colors shadow-sm"
              >
                <FaChevronLeft className="text-xs" />
              </button>
              <button
                onClick={() => swiperRef.current?.swiper?.slideNext()}
                className="w-10 h-10 rounded-control border border-line bg-surface text-content flex items-center justify-center hover:bg-surface-sunken hover:border-brand/40 transition-colors shadow-sm"
              >
                <FaChevronRight className="text-xs" />
              </button>
            </div>
          </div>

          <div className="w-full overflow-hidden">
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination, EffectCoverflow]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={1.15}
              spaceBetween={16}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1.5,
                slideShadows: false,
              }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 28 },
              }}
              pagination={{ clickable: true }}
              className="pb-10"
            >
              {displayVideos.map((id, index) => (
                <SwiperSlide key={index}>
                  <VideoCard videoId={id} onPlay={(url) => setModalVideoUrl(url)} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Section>

        {/* ================= STUDENT PROJECTS & SOCIAL PROOF ================= */}
        <Section id="projects" tone="canvas" space="lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <SectionHeader
              eyebrow="Showcase & Portfolios"
              title="Real-World Projects Built by Students"
              lead="Explore end-to-end production systems and LinkedIn achievements shared by learners."
            />
            {/* Student Swiper Controls */}
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <button
                onClick={() => studentSwiperRef.current?.swiper?.slidePrev()}
                className="w-10 h-10 rounded-control border border-line bg-surface text-content flex items-center justify-center hover:bg-surface-sunken hover:border-brand/40 transition-colors shadow-sm"
              >
                <FaChevronLeft className="text-xs" />
              </button>
              <button
                onClick={() => studentSwiperRef.current?.swiper?.slideNext()}
                className="w-10 h-10 rounded-control border border-line bg-surface text-content flex items-center justify-center hover:bg-surface-sunken hover:border-brand/40 transition-colors shadow-sm"
              >
                <FaChevronRight className="text-xs" />
              </button>
            </div>
          </div>

          <div className="w-full overflow-hidden">
            <Swiper
              ref={studentSwiperRef}
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1.15}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
              }}
              pagination={{ clickable: true }}
              className="pb-10"
            >
              {LinkedinPosts.map((post, i) => (
                <SwiperSlide key={i}>
                  <Link
                    to={post?.url || "#"}
                    target="_blank"
                    className="group flex flex-col justify-between h-full rounded-card border border-line bg-surface p-4 shadow-sm hover:shadow-md hover:border-brand/40 transition-all duration-300"
                  >
                    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-control bg-surface-sunken mb-4 border border-line">
                      <img
                        src={post?.image}
                        alt={post?.image_alt || "Student project showcase"}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur-sm text-blue-600 shadow-sm">
                        <FaLinkedin className="text-sm" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-line text-xs font-semibold text-brand">
                      <span>View on LinkedIn</span>
                      <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Section>

        {/* Global Components */}
        <Query darkMode={darkMode} />
        <ChatBot darkMode={darkMode} />
      </main>

      <Footer />
      <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
}

// Redesigned Clean Feedback Form
const FeedBackForm = ({ setIsPopUp }) => {
  const [formData, setFormData] = useState({
    name: "",
    linkedinUrl: "",
    youtubeUrl: "",
    desc: "",
    currentStatus: {
      currentCompany: "",
      currentRole: "",
    },
  });

  const [error, setError] = useState({});

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setError((prev) => ({ ...prev, [name]: "" }));
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNestedInputChange = (e) => {
    const { name, value } = e.target;
    setError((prev) => ({
      ...prev,
      currentStatus: { ...prev.currentStatus, [name]: "" },
    }));
    setFormData((prev) => ({
      ...prev,
      currentStatus: { ...prev.currentStatus, [name]: value },
    }));
  };

  const validateForm = () => {
    let newErrors = { currentStatus: {} };
    let isValid = true;
    const httpRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b/;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!formData.linkedinUrl.trim()) {
      newErrors.linkedinUrl = "LinkedIn URL is required";
      isValid = false;
    } else if (!httpRegex.test(formData.linkedinUrl)) {
      newErrors.linkedinUrl = "Invalid URL format";
      isValid = false;
    }
    if (!formData.desc.trim()) {
      newErrors.desc = "Feedback is required";
      isValid = false;
    }
    if (!formData.currentStatus.currentCompany.trim()) {
      newErrors.currentStatus.currentCompany = "Company name is required";
      isValid = false;
    }
    if (!formData.currentStatus.currentRole.trim()) {
      newErrors.currentStatus.currentRole = "Role is required";
      isValid = false;
    }

    setError(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsPopUp(false);
  };

  return (
    <div className="relative w-full max-w-lg bg-surface rounded-panel border border-line shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
      <button
        onClick={() => setIsPopUp(false)}
        className="absolute top-4 right-4 text-content-muted hover:text-content p-1.5 rounded-full hover:bg-surface-sunken transition-colors"
      >
        <FaTimes className="text-base" />
      </button>

      <div className="text-left mb-6">
        <Eyebrow>Alumni Review</Eyebrow>
        <h3 className="text-2xl font-bold text-content mt-1">
          Share Your Success Story
        </h3>
        <p className="text-xs text-content-secondary mt-1">
          Your journey helps inspire thousands of aspiring learners.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
        <div>
          <label className="block text-xs font-semibold text-content mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChangeInput}
            placeholder="e.g. Rahul Sharma"
            className="w-full px-3.5 py-2.5 rounded-control border border-line bg-surface text-content text-sm focus:outline-none focus:border-brand transition-colors"
          />
          {error.name && <p className="text-[11px] text-error mt-1">{error.name}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-content mb-1.5">
              Current Company *
            </label>
            <input
              type="text"
              name="currentCompany"
              value={formData.currentStatus.currentCompany}
              onChange={handleNestedInputChange}
              placeholder="e.g. Amazon"
              className="w-full px-3.5 py-2.5 rounded-control border border-line bg-surface text-content text-sm focus:outline-none focus:border-brand transition-colors"
            />
            {error.currentStatus?.currentCompany && (
              <p className="text-[11px] text-error mt-1">{error.currentStatus.currentCompany}</p>
            )}
          </div>
          <div>
            <label className="block text-xs font-semibold text-content mb-1.5">
              Current Role *
            </label>
            <input
              type="text"
              name="currentRole"
              value={formData.currentStatus.currentRole}
              onChange={handleNestedInputChange}
              placeholder="e.g. SDE-1"
              className="w-full px-3.5 py-2.5 rounded-control border border-line bg-surface text-content text-sm focus:outline-none focus:border-brand transition-colors"
            />
            {error.currentStatus?.currentRole && (
              <p className="text-[11px] text-error mt-1">{error.currentStatus.currentRole}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-content mb-1.5">
            LinkedIn Profile URL *
          </label>
          <input
            type="text"
            name="linkedinUrl"
            value={formData.linkedinUrl}
            onChange={handleChangeInput}
            placeholder="https://linkedin.com/in/username"
            className="w-full px-3.5 py-2.5 rounded-control border border-line bg-surface text-content text-sm focus:outline-none focus:border-brand transition-colors"
          />
          {error.linkedinUrl && (
            <p className="text-[11px] text-error mt-1">{error.linkedinUrl}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-content mb-1.5">
            YouTube Video URL (Optional)
          </label>
          <input
            type="text"
            name="youtubeUrl"
            value={formData.youtubeUrl}
            onChange={handleChangeInput}
            placeholder="https://youtube.com/watch?v=..."
            className="w-full px-3.5 py-2.5 rounded-control border border-line bg-surface text-content text-sm focus:outline-none focus:border-brand transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-content mb-1.5">
            Your Experience / Review *
          </label>
          <textarea
            name="desc"
            rows="3"
            value={formData.desc}
            onChange={handleChangeInput}
            placeholder="Describe your mentorship experience, placement support, etc."
            className="w-full px-3.5 py-2.5 rounded-control border border-line bg-surface text-content text-sm focus:outline-none focus:border-brand transition-colors"
          />
          {error.desc && <p className="text-[11px] text-error mt-1">{error.desc}</p>}
        </div>

        <button
          type="submit"
          className="mt-2 w-full h-11 rounded-control bg-brand text-brand-fg font-semibold text-sm hover:bg-brand-hover transition-colors shadow-sm focus-visible:outline-none focus-visible:shadow-focus"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};