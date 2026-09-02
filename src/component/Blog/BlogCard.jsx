import React from "react";
import { Link } from "@/lib/router-compat";
import { FaEye } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
const Logo = "/assets/logo.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const BlogCard = ({ BlogCardInfo, index, id, varient, slug }) => {
  const removeSpace = (str) => {
    const newStr = str.replaceAll(" ", "-");
    return newStr;
  };

  const stripHtml = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  // console.log("slug", slug);

  const getDate = (str) => {
    const newDate = new Date(str);
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return newDate.toLocaleDateString("en-US", options);
  };

  return (
    <Link
      data-aos="fade-up"
      data-aos-delay="0"
      data-aos-duration="800"
      to={`${varient ? `/our-blogs/${id}` : `/blog/${slug}`}`}
      className="w-full h-full group"
    >
      <div className="w-full max-w-md hover:shadow-lg rounded-2xl p-4 md:p-4  hover:scale-105 transition-all duration-200">
        {/* Image */}
        <figure className="w-full h-72  rounded-lg overflow-hidden">
          <img
            src={BlogCardInfo?.image}
            className="object-fill h-full w-full"
          />
        </figure>

        {/* Date */}
        <p className="text-start text-content-muted dark:text-content-muted font-semibold mt-8">
          {getDate(BlogCardInfo?.createdAt)}
        </p>

        {/* Title */}
        <div className="relative w-full text-start mt-8">
          <h3 className="text-content text-2xl text-content  font-semibold leading-snug pr-7">
            {BlogCardInfo?.title}
          </h3>
          <IoIosArrowRoundForward className="absolute -top-1 right-0 text-3xl text-content group-hover:rotate-0 group-hover:text-content-muted  -rotate-45 transition-all duration-300" />
        </div>

        <p className="text-left text-[#3E3E3E] dark:text-[#F2F2F2] font-normal text-base leading-relaxed line-clamp-3">
          {stripHtml(BlogCardInfo?.content)}
        </p>

        <p className="bg-[#D9DFF2] w-fit rounded-full px-4 py-1.5 items-start text-content-muted font-semibold mt-3 text-sm">
          {BlogCardInfo?.category_id?.title || "General"}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
