import React, { useEffect, useState } from "react";
import NavBar from "../../component/Admin/NavBar";
import Footer from "../../component/Footer";
const Logo = "/assets/logo.png";
import { FaPlusCircle, FaTrash } from "react-icons/fa";
import { CiEdit, CiSearch } from "react-icons/ci";
import { Link } from "@/lib/router-compat";
import ApiRequest from "../../Utils/Axios/Axios";
import { toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import DashboardLayout from "../../component/DashboardLayout/DashboardLayout";
import { useSelector } from "react-redux";

const BlogAdmin = () => {
  // State management
  const [category, setCategory] = useState([]);
  const [blogData, setBlogData] = useState([]);
  const [viewAllCategory, setViewAllCategory] = useState(false);
  const [viewAllBlog, setViewAllBlog] = useState(false);
  const [loadingCategory, setLoadingCategory] = useState(false);
  const [loadingBlog, setLoadingBlog] = useState(false);
  const [activeState, setActiveState] = useState("blog");
  const [searchValue, setSearchValue] = useState("");

  // const { auth_token } = useSelector((state) => state?.token?.token);
  const auth_token = useSelector((state) => state?.auth_token?.auth_token);


  // Fetch categories
  const getCategory = async () => {
    try {
      setLoadingCategory(true);
      const response = await ApiRequest.get("/category", {
        headers: {
          "Authorization": `Bearer ${auth_token}`
        }
      });
      if (response.status === 200) {
        setCategory(response.data);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      toast.error("Failed to load categories");
    } finally {
      setLoadingCategory(false);
    }
  };

  // Fetch blogs
  const getAllBloges = async () => {
    try {
      setLoadingBlog(true);
      const response = await ApiRequest.get("/blog/getAllBloges", {
        headers: {
          "Authorization": `Bearer ${auth_token}`
        }
      });
      if (response?.status === 200) {
        setBlogData(response?.data);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      toast.error("Failed to load blogs");
    } finally {
      setLoadingBlog(false);
    }
  };

  // Delete category
  const handleDeleteCategory = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this category?"
    );

    if (confirmDelete) {
      try {
        const response = await ApiRequest.delete(`/category/${id}`, {
          headers: {
            "Authorization": `Bearer ${auth_token}`
          }
        });
        if (response.status === 200) {
          toast.success("Category deleted successfully");
          getCategory();
        }
      } catch (error) {
        console.error("Error deleting category:", error);
        toast.error("Failed to delete category");
      }
    }
  };

  // Delete blog
  const handleDeleteBlog = async (slug) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (confirmDelete) {
      try {
        const response = await ApiRequest.delete(`/blog/delete/${slug}`, {
          headers: {
            "Authorization": `Bearer ${auth_token}`
          }
        });
        if (response.status === 200) {
          toast.success("Blog deleted successfully");
          getAllBloges();
        }
      } catch (error) {
        console.error("Error deleting blog:", error);
        toast.error("Failed to delete blog");
      }
    }
  };

  // Format date
  const getDate = (str) => {
    const newDate = new Date(str);
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return newDate.toLocaleDateString("en-US", options);
  };

  // Remove spaces from slug
  const removeSpace = (str) => {
    return str.replaceAll(" ", "-");
  };

  // Toggle view all
  const handleViewAllCategory = () => setViewAllCategory(!viewAllCategory);
  const handleViewAllBlog = () => setViewAllBlog(!viewAllBlog);

  // Filter data based on search and active state
  const getFilteredData = () => {
    const search = searchValue.toLowerCase().trim();

    if (activeState === "blog") {
      return blogData.filter(
        (item) =>
          item.title?.toLowerCase().includes(search) ||
          item.description?.toLowerCase().includes(search) ||
          item.category?.toLowerCase().includes(search)
      );
    } else {
      return category.filter(
        (item) =>
          item.title?.toLowerCase().includes(search) ||
          item.description?.toLowerCase().includes(search)
      );
    }
  };

  // Get paginated data
  const getDisplayedData = () => {
    const filteredData = getFilteredData();
    if (activeState === "blog") {
      return viewAllBlog ? filteredData : filteredData.slice(0, 8);
    } else {
      return viewAllCategory ? filteredData : filteredData.slice(0, 8);
    }
  };

  // Initial data fetch
  useEffect(() => {
    getCategory();
    getAllBloges();
  }, []);

  const displayData = getDisplayedData();

  return (
    <div>
      
      <DashboardLayout>
        <div className="w-full flex-grow p-4 h-full min-h-screen">
          <div className="container mx-auto">
            <main className="w-full h-full">
              {/* Tab Selection */}
              <section className="w-full h-full py-5">
                <div className="flex justify-start items-center gap-10 mx-5 text-white">
                  <div
                    className={`text-base px-5 py-2 border border-white rounded-md hover:bg-custom-gradient cursor-pointer select-none ${activeState === "blog" ? "bg-custom-gradient" : ""
                      }`}
                    onClick={() => setActiveState("blog")}
                  >
                    Blogs
                  </div>
                  <div
                    className={`text-base px-5 py-2 border border-white rounded-md hover:bg-custom-gradient cursor-pointer select-none ${activeState === "category" ? "bg-custom-gradient" : ""
                      }`}
                    onClick={() => setActiveState("category")}
                  >
                    Categories
                  </div>
                </div>
              </section>

              {/* Search Bar */}
              <div>
                <SearchBar
                  onChange={(e) => setSearchValue(e.target.value)}
                  value={searchValue}
                  placeholder={`Search ${activeState === "blog" ? "blogs" : "categories"
                    }...`}
                  className="my-5 w-full md:w-3/12 md:mx-5"
                />
              </div>

              {/* Category Section */}
              {activeState === "category" && (
                <section className="text-white py-5">
                  <div className="flex justify-between items-center">
                    <h1 className="capitalize font-bold text-2xl underline underline-offset-2 md:mx-5">
                      All Categories
                    </h1>
                    <Link
                      to="/blog-admin/add-category"
                      className="w-40 h-10 rounded-lg"
                    >
                      <button className="w-full bg-white text-content h-full rounded-lg font-semibold">
                        Add Category
                      </button>
                    </Link>
                  </div>

                  {loadingCategory ? (
                    <div className="flex justify-center items-center">
                      <AiOutlineLoading3Quarters
                        className="animate-spin"
                        size={60}
                        color="#4B6BFB"
                      />
                    </div>
                  ) : displayData.length > 0 ? (
                    <div className="w-full h-full gap-4 mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                      {displayData.map((item, i) => (
                        <div
                          key={i}
                          className="w-full max-w-80 h-full max-h-80 flex flex-col gap-2 justify-center items-start text-white mx-auto"
                        >
                          <div className="w-full flex justify-between items-center">
                            <p>
                              {item?.title?.length > 35
                                ? item.title.slice(0, 35) + "..."
                                : item?.title}
                            </p>
                            <div
                              className="bg-custom-gradient w-8 h-8 text-white border-2 border-white text-sm rounded-full p-px flex justify-center items-center hover:text-red-500 hover:border-red-400 cursor-pointer"
                              title="Delete Category"
                              onClick={() => handleDeleteCategory(item?._id)}
                            >
                              <FaTrash size={18} />
                            </div>
                          </div>

                          <figure className="border-2 rounded-lg w-full h-full overflow-hidden relative">
                            <img
                              src={item?.image}
                              alt={item?.title || "Category image"}
                              className="w-full h-full object-contain object-center"
                            />
                            {/* <img
                            src={Logo}
                            alt="Logo"
                            className="absolute bottom-2 left-2 w-32"
                          /> */}
                            <Link to={`/blog-admin/edit-category/${item?._id}`}>
                              <button className="bg-custom-gradient w-28 absolute h-8 top-2 right-2 flex justify-center items-center gap-2 rounded-full border-2 border-white text-sm px-2 hover:border-red-400">
                                <CiEdit size={18} /> <span>Edit Info</span>
                              </button>
                            </Link>
                          </figure>

                          <p className="text-left">
                            {item?.description?.length > 35
                              ? item.description.slice(0, 35) + "..."
                              : item?.description}
                          </p>

                          <div className="flex justify-between w-full text-[10px] md:text-[12px] text-secondary">
                            <p>Kre8ly Team</p>
                            <p>{getDate(item?.createdAt)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex justify-center items-center text-white">
                      <h1 className="text-2xl">No categories found</h1>
                    </div>
                  )}

                  {!loadingCategory && category.length > 8 && (
                    <p
                      className="cursor-pointer w-fit mx-auto mt-20 bg-white px-5 py-2 rounded-lg text-black font-semibold"
                      onClick={handleViewAllCategory}
                    >
                      {viewAllCategory ? "Show Less" : "View All"}
                    </p>
                  )}
                </section>
              )}

              {/* Blog Section */}
              {activeState === "blog" && (
                <section className="text-white py-5">
                  <div className="flex justify-between items-center">
                    <h1 className="capitalize font-bold text-2xl underline underline-offset-2 md:mx-5">
                      All Blogs
                    </h1>
                    <Link
                      to="/blog-admin/upload-blog"
                      className="w-28 h-10 bg-white text-black text-content flex justify-center items-center cursor-pointer rounded-lg font-semibold"
                    >
                      Add Blog
                    </Link>
                  </div>

                  {loadingBlog ? (
                    <div className="flex justify-center items-center">
                      <AiOutlineLoading3Quarters
                        className="animate-spin"
                        size={60}
                        color="#4B6BFB"
                      />
                    </div>
                  ) : displayData.length > 0 ? (
                    <div className="w-full h-full gap-4 gap-y-10 mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                      {displayData.map((item, i) => (
                        <div key={i} className="relative">
                          <Link
                            to={`/blog/${removeSpace(item?.slug)}`}
                            target="_blank"
                          >
                            <div className="w-full max-w-80 h-full max-h-80 flex flex-col gap-2 justify-center items-start text-white mx-auto">
                              <p>{item?.category}</p>

                              <figure className="border-2 rounded-lg w-full h-full overflow-hidden relative">
                                <img
                                  src={item?.image}
                                  alt={item?.title || "Blog image"}
                                  className="w-full h-full object-contain object-center"
                                />
                                {/* <img
                                src={Logo}
                                alt="Logo"
                                className="absolute bottom-2 left-2 w-32"
                              /> */}
                              </figure>

                              <p className="text-left">
                                {item?.title?.length > 35
                                  ? item.title.slice(0, 35) + "..."
                                  : item?.title}
                              </p>

                              <div className="flex justify-between w-full text-[10px] md:text-[12px] text-secondary">
                                <p>Kre8ly Team</p>
                                <p>{getDate(item?.createdAt)}</p>
                                <span>View Details</span>
                              </div>
                            </div>
                          </Link>

                          <div className="absolute top-5 right-8 flex gap-2">
                            <Link to={`/blog-admin/upload-blog/${item?.slug}`}>
                              <button className="bg-custom-gradient w-28 h-8 flex justify-center items-center gap-2 rounded-full border-2 border-white text-sm px-2 hover:border-red-400">
                                <CiEdit size={18} /> <span>Edit Info</span>
                              </button>
                            </Link>
                            <button
                              onClick={() => handleDeleteBlog(item?.slug)}
                              className="bg-custom-gradient w-8 h-8 text-white border-2 border-white text-sm rounded-full p-px flex justify-center items-center hover:text-red-500 hover:border-red-400"
                            >
                              <FaTrash size={18} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex justify-center items-center text-white">
                      <h1 className="text-2xl">No blogs found</h1>
                    </div>
                  )}

                  {!loadingBlog && blogData.length > 8 && (
                    <p
                      className="w-28 h-10 mt-20 text-black mx-auto bg-white text-content flex justify-center items-center cursor-pointer rounded-lg font-semibold"
                      onClick={handleViewAllBlog}
                    >
                      {viewAllBlog ? "Show Less" : "View All"}
                    </p>
                  )}
                </section>
              )}
            </main>
          </div>
        </div>
      </DashboardLayout>
      {/* <Footer /> */}
    </div>
  );
};

const SearchBar = ({
  className = "",
  placeholder = "Search...",
  onChange,
  value,
  iconSize = 25,
  inputStyles = "",
  iconStyles = "",
  ...props
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Search Icon */}
      <CiSearch
        size={iconSize}
        className={`absolute left-2 top-2 text-gray-800 ${iconStyles}`}
      />
      {/* Input Field */}
      <input
        type="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`pl-10 pr-5 py-2 w-full outline-none border-none  rounded-md text-black ${inputStyles}`}
        {...props}
      />
    </div>
  );
};

export default BlogAdmin;
