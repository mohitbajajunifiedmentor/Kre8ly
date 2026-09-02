import React from "react";
const Logo = "/assets/logo.png";
import { Link } from "@/lib/router-compat";

const RecommendedPost = ({ RecommendedPostInfo }) => {
  const getDate = (str) => {
    const newDate = new Date(str);
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return newDate.toLocaleDateString("en-US", options);
  };
  // console.log("RecommendedPostInfo", RecommendedPostInfo);

  // http://localhost:5173/blog/670d0b503c13c43affed5936/Using-Data-to-Drive-Marketing-Automation-Success

  const removeSpace = (str) => {
    const newStr = str?.replaceAll(" ", "-");
    return newStr;
  };

  return (
    <Link
      to={`/blog/${RecommendedPostInfo?.slug}`}
      className="flex flex-col items-center gap-4 md:gap-6"
    >
      <figure className="w-full h-full max-w-96 max-h-52 border-2 rounded-2xl overflow-hidden relative">
        <img
          src={RecommendedPostInfo?.image}
          alt={RecommendedPostInfo?.title || "Blog image"}
          className="w-full h-full object-cover object-center"
        />
        <img
          src={Logo}
          alt="Kre8ly Logo"
          className="absolute bottom-2 left-2 w-16 md:w-32"
        />
      </figure>
      <div className="flex flex-col gap-2 md:gap-3  md:max-w-96">
        <h5 className="text-start text-content  text-2xl font-semibold">
          {RecommendedPostInfo?.title?.length > 45
            ? RecommendedPostInfo.title.slice(0, 45) + "..."
            : RecommendedPostInfo?.title}
        </h5>
        <div className="flex w-full text-[10px] md:text-sm justify-between text-start gap-3 md:gap-5 text-content">
          <p>Kre8ly Team</p>
          <p>{getDate(RecommendedPostInfo?.createdAt)}</p>
        </div>
      </div>
    </Link>
  );
};

export default RecommendedPost;
