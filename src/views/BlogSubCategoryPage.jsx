import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Helmet } from "@/lib/helmet-compat";
import { Link, useParams } from "@/lib/router-compat";
import { BlogCategory } from "../Utils/Blog/BlogCategory";
import { FaSearch } from "react-icons/fa";
import BlogCard from "../component/Blog/BlogCard";
import RecommendedPost from "../component/Blog/RecommendedPost";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const RightCircle = "/assets/Blog/RightCircle.png";
const LeftCircle = "/assets/Blog/LeftCircle.png";
import ApiRequest from "../Utils/Axios/Axios";
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import RecommendedBlog from "../component/Blog/RecommendedBlog";
import Query from "../component/Query/Query";
import { useSelector } from "react-redux";
import ChatBot from "@/component/ChatBot/ChatBot";

const BlogSubCategoryPage = () => {

  // const { auth_token } = useSelector((state) => state?.token?.token);

  const auth_token = useSelector((state) => state?.auth_token?.auth_token);


  const { id } = useParams();
  // console.log(id);

  const [blogData, setBlogData] = useState([]);
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  // console.log(search);

  const getAllBloges = async () => {
    try {
      setLoading(true);
      const response = await ApiRequest.get(`/blog/getAllBloges`, {
        headers: {
          "Authorization": `Bearer ${auth_token}`
        }
      });
      if (response?.status === 200) {
        setBlogData(response?.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryByID = async (id) => {
    try {
      const response = await ApiRequest.get(`/category/${id}`, {
        headers: {
          "Authorization": `Bearer ${auth_token}`
        }
      });
      if (response.status === 200) {
        setCategory(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBloges();
  }, []);

  useEffect(() => {
    getCategoryByID(id);
  }, [id]);

  // console.log(blogData);

  const newFilteredData = (id) => {
    const newData = blogData?.filter((item) => item?.category_id?._id === id);
    // const uniqueIds = newData?.filter((item) => item?._id === id);
    return newData;
  };

  const newBlogData = newFilteredData(id);

  const filteredData = newBlogData.filter((item) => {
    if (search === "") {
      return item;
    } else if (item?.title?.toLowerCase().includes(search.toLowerCase())) {
      return item;
    }
  });

  // console.log("filteredData", filteredData);

  const BlogTitle = category?.title || "";
  const BlogDesc = category?.description || "";

  // console.log(BlogTitle);

  return (
    <div>
      <Helmet></Helmet>
      <div className="w-full h-full flex flex-col min-h-screen justify-start items-center">
        <header className="bg-custom-gradient w-full  p-4 text-white  text-sm md:text-base h-20 relative z-10">
          <div className="flex justify-start  items-center gap-5 container pl-5 h-full">
            <Link to={"/"} className="hover:underline hover:underline-offset-2">
              Home
            </Link>
            <Link
              className="hover:underline hover:underline-offset-2"
              to={"/our-blogs"}
            >
              Blog
            </Link>
            <p className="underline underline-offset-2">{`${BlogTitle}`}</p>
          </div>
        </header>
        <div className="w-full h-full px-5 py-10 container mx-auto relative">
          <img
            src={LeftCircle}
            alt="Circle"
            className="absolute top-0 w-[200px] md:w-[400px] left-0  select-none blur-md"
          />
          <img
            src={RightCircle}
            alt="Circle"
            className="absolute top-0 w-[200px] md:w-[400px] right-0  select-none blur-md"
          />
          <section className="w-full h-full relative z-10">
            <div className="w-full h-full flex flex-col justify-center items-center text-white">
              <h1 className="text-2xl md:text-4xl  font-bold mb-4">{`${BlogTitle}`}</h1>
              <p className="text-sm md:text-lg text-center w-full md:w-[80%]">
                {/* Explore comprehensive {`${BlogTitle}`}, including online
                courses, textbooks, research papers, and tutorials. Enhance your
                skills through practical projects, community forums, and
                hands-on coding platforms for effective learning. */}

                {BlogDesc}
              </p>
            </div>
            {/* line */}
            <div className="w-full h-0.5 bg-white mt-8 mb-8 md:w-[50%] mx-auto "></div>
          </section>
          <section className="w-full h-full flex justify-center items-center relative z-10">
            <div className="w-full md:w-[60%] relative flex">
              <input
                type="search"
                placeholder="Search by Title"
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-3 pl-10  text-white rounded-lg border border-white outline-none"
              />
              <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white" />

              {/* <button className="bg-primary text-black  rounded-full font-bold hover:bg-[#381D76] border hover:text-primary transition duration-300 absolute right-2 top-[5px] w-10 h-10 flex justify-center items-center">
                <FaArrowRight />
              </button> */}
            </div>
          </section>
          <section className="w-full h-full py-10 relative z-10">
            {loading ? (
              <div className="flex justify-center items-center">
                <AiOutlineLoading3Quarters
                  className="animate-spin"
                  size={60}
                  color="#4B6BFB"
                />
              </div>
            ) : filteredData?.length > 0 ? (
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto w-full gap-y-12 gap-x-4">
                {filteredData?.map((item) => {
                  return (
                    <BlogCard
                      key={item.id}
                      id={item._id}
                      BlogCardInfo={item}
                      slug={item?.slug}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="w-full h-full flex justify-center items-center">
                <p className="text-white text-2xl text-center">No Data Found</p>
              </div>
            )}
          </section>

          {/* line */}
          <div className="w-full h-0.5 bg-white mt-8 mb-8 md:w-[50%] mx-auto"></div>
          <RecommendedBlog />
        </div>
        <Query />
        <ChatBot darkMode={darkMode} />
      </div>
      <Footer />
    </div>
  );
};

export default BlogSubCategoryPage;
