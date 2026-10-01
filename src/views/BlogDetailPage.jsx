import React, { useEffect, useRef, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Link, useParams } from "@/lib/router-compat";
import { Helmet } from "@/lib/helmet-compat";
import Query from "../component/Query/Query";
const Logo = "/assets/logo.png";
import ApiRequest from "../Utils/Axios/Axios";
import { toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import RecommendedBlog from "../component/Blog/RecommendedBlog";
import { useSelector } from "react-redux";
import { motion, useInView } from "framer-motion";
import MobileFooter from "../component/MobileFooter";
import ChatBot from "@/component/ChatBot/ChatBot";

const BlogDetailPage = ({ darkMode, setDarkMode }) => {
  const auth_token = useSelector((state) => state?.auth_token?.auth_token);
  const { slug } = useParams();
  const [screenSizeforMobile, setScreenSizeforMobile] = useState(false);
  const [blogInfo, setBlogInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loadingBlog, setLoadingBlog] = useState(false);
  const [loadingRelated, setLoadingRelated] = useState(false);

  const removeDashfromText = (text) => {
    const newStr = text.replaceAll("-", " ");
    return newStr;
  };

  const shortTitle = (text) => {
    const newStr = removeDashfromText(text);
    if (screenSizeforMobile) {
      return newStr.slice(0, 25) + "...";
    }
    return newStr;
  };

  const getBlogDetail = async (slug) => {
    try {
      setLoadingBlog(true);
      const response = await ApiRequest.get(`/blog/${slug}`);
      if (response.status === 200) {
        setBlogInfo(response.data);
        // Call relatedBlogs fetch here directly
        if (response?.data?.category_id?._id) {
          await getRelatedBlogs(response?.data.category_id._id, response?.data.slug);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to load blog detail. Please try again later.");
    } finally {
      setLoadingBlog(false);
    }
  };

  const getRelatedBlogs = async (categoryId) => {
    try {
      setLoadingRelated(true);
      const response = await ApiRequest.get(`/blog/getAllBloges`);
      if (response?.status === 200) {
        const data = response?.data;
        // Filter blogs by category ID, excluding the current blog
        const filteredData = data.filter(
          (blog) =>
            blog?.category_id?._id === categoryId && blog?.slug !== slug
        );
        // Sort by createdAt date (optional)
        const sortedData = filteredData.sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateB - dateA;
        });
        setRelatedBlogs(sortedData);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to load related blogs. Please try again later.");
    } finally {
      setLoadingRelated(false);
    }
  };

  useEffect(() => {
    getBlogDetail(slug);
  }, [slug]);

  // useEffect(() => {
  //   if (blogInfo?.category_id?._id) {
  //     getRelatedBlogs(blogInfo.category_id._id);
  //   }
  // }, [blogInfo]);

  const getScreenSize = () => {
    const width = window.innerWidth;
    setScreenSizeforMobile(width < 460);
  };

  useEffect(() => {
    getScreenSize();
    window.addEventListener("resize", getScreenSize);
    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", getScreenSize);
  }, []);

  const getDate = (str) => {
    const newDate = new Date(str);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return newDate.toLocaleDateString("en-US", options);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        ease: [0.6, -0.05, 0.01, 0.99],
        staggerChildren: 0.15,
      },
    },
    exit: { opacity: 0, y: 80, transition: { duration: 0.5, ease: "easeIn" } },
  };

  const headingVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
        staggerChildren: 0.2,
      },
    },
  };

  const refs = {
    details: useRef(null),
    detailsfull: useRef(null),
  };


  const isLoading = loadingBlog || loadingRelated;


  return (
    <>
      <Helmet>
        <title>{blogInfo?.title || "Kre8ly"}</title>
        <meta name="description" content={blogInfo?.meta_description || ""} />
        <meta name="keywords" content={blogInfo?.meta_keywords || ""} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={blogInfo?.canonical_url || ""} />
        <meta property="og:title" content={blogInfo?.title || "Kre8ly"} />
        <meta property="og:description" content={blogInfo?.meta_description || ""} />
        <meta property="og:image" content={blogInfo?.image || ""} />
        <meta property="og:url" content={blogInfo?.canonical_url || ""} />
        <meta property="og:type" content="article" />
        <meta name="twitter:title" content={blogInfo?.title || "Kre8ly"} />
        <meta name="twitter:description" content={blogInfo?.meta_description || ""} />
        <meta name="twitter:image" content={blogInfo?.image || ""} />
        <meta name="author" content="Kre8ly" />
      </Helmet>

      <div className={`flex flex-col min-h-screen ${darkMode ? "bg-custom-dark-gradient" : "bg-custom-light-gradient"} `}>
        <div className="w-full h-full">
          <header
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="bg-gradient-to-r from-[#1D2B45] to-[#486BAB] w-full p-4 text-white text-sm md:text-base h-20 relative z-10">
            <div className="flex justify-start items-center gap-5 container pl-5 h-full mx-auto">
              <Link to={"/"} className="hover:underline hoverunderline-offset offset-2">
                Home
              </Link>
              <Link to={"/our-blogs"} className="hover:underline hover:underline-offset-2">
                Blog
              </Link>
              <p className="underline underline-offset-2 capitalize">
                {shortTitle(slug)}
              </p>
            </div>
          </header>
          {isLoading ? (
            <div className="w-full h-screen flex justify-center items-center">
              <AiOutlineLoading3Quarters className="animate-spin" size={60} color="#4B6BFB" />
            </div>
          ) : (
            <>
              <main className="container max-w-[720px] mx-auto flex flex-col items-center justify-center text-center p-4 w-full h-full md:mb-10">
                <section className="w-full h-full my-5">
                  <div
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="800"
                    className="text-lg md:text-4xl w-full font-bold text-content flex justify-center items-center flex-col gap-10">
                    <figure className="w-full h-auto mx-auto rounded-xl overflow-hidden border-2 relative">
                      <img src={blogInfo?.image} alt="" className="w-full h-full object-cover" />
                    </figure>
                    <h1 className="text-lg md:text-3xl font-bold text-content text-left">
                      {blogInfo?.title}
                    </h1>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="800"
                    className="flex flex-col md:flex-row w-full mx-auto mt-5 gap-5 text-content-secondary">
                    <p className="text-xs md:text-sm text-start text-content">Kre8ly Team</p>
                    <p className="text-xs md:text-sm text-start">{getDate(blogInfo?.createdAt)}</p>
                  </div>
                </section>
                <section className="w-full h-full my-5">
                  <div className="flex justify-between flex-col md:flex-row items-start gap-5 w-full h-full text-white"></div>
                </section>
                <article
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="800"
                  className="w-full h-full">
                  <div
                    dangerouslySetInnerHTML={{ __html: blogInfo?.content }}
                    className="w-full h-full text-left text-content blog-detail  [&_a]:text-[#4a96f1]  [&_a]:dark:text-[#61a2f1]  [&_a]:duration-300 [&_a]:no-underline [&_a]:hover:underline"
                  />
                </article>
              </main>
              <section className="px-4 py-8 w-full h-full overflow-hidden">
                <RecommendedBlog blogs={relatedBlogs} />
              </section>
            </>
          )}
        </div>
      </div>
      <Query />
      <ChatBot darkMode={darkMode} />
      <Footer />
      <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
};

export default BlogDetailPage;