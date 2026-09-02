import React, { useEffect, useRef, useState } from "react";
import NavBar from "../../component/Admin/NavBar";
import Footer from "../../component/Footer";
import { Link, useNavigate, useParams } from "@/lib/router-compat";
const UploadImg = "/assets/Blog/Admin/Upload.png";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "ckeditor5/ckeditor5.css";
import DOMPurify from "dompurify";
import TurndownService from "turndown";
import { marked } from "marked";
import ApiRequest from "../../Utils/Axios/Axios";
import { IoOptionsOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import DashboardLayout from "../../component/DashboardLayout/DashboardLayout";
import { useSelector } from "react-redux";
import JoditEditor from "jodit-react";

const UploadBlog = () => {
  const [fileName, setFileName] = useState("");
  const [filePreview, setFilePreview] = useState("");
  const [htmlContent, setHtmlContent] = useState("");
  const [mainTitle, setMainTitle] = useState("");
  const [category, setCategory] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const [picture, setPicture] = useState(null);
  const [slugName, setSlugName] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");
  const [canonicalUrl, setCanonicalUrl] = useState("");
  const selectRef = useRef(null);
  const editor = useRef(null);
  const [loading, setLoading] = useState(false);
  const { slug } = useParams();
  // console.log(id);
  const navigate = useNavigate();
  // const { auth_token } = useSelector((state) => state?.token?.token);
  const auth_token = useSelector((state) => state?.auth_token?.auth_token);
  const editorRef = useRef(null);

  const getBlogByID = async (id) => {
    try {
      const response = await ApiRequest.get(`/blog/${id}`, {
        headers: {
          Authorization: `Bearer ${auth_token}`,
        },
      });
      if (response.status === 200) {
        setCategory(response.data.category_id);
        setMainTitle(response.data.title);
        setHtmlContent(response.data.content);
        setFilePreview(response.data.image);
        setPicture(response.data.image);
        setSlugName(response.data.slug);
        setMetaDescription(response.data.meta_description);
        setMetaKeywords(response.data.meta_keywords);
        setCanonicalUrl(response.data.canonical_url);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Function to convert oEmbed tags to iframe
  const convertOembedToIframe = (htmlContent) => {
    return htmlContent.replace(
      /<oembed url="https:\/\/www\.youtube\.com\/watch\?v=([^"&]+)".*?<\/oembed>/g,
      `<iframe width="500" height="281" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );
  };
  // Sanitize the HTML data
  const sanitizeHtmlContent = (htmlContent) => {
    return DOMPurify.sanitize(htmlContent, {
      ALLOWED_TAGS: [
        "b",
        "i",
        "em",
        "strong",
        "a",
        "p",
        "img", // ← MISSING - Essential for images!
        "iframe",
        "figure",
        "figcaption", // ← Add this for image captions
        "table",
        "thead",
        "tbody",
        "tr",
        "th",
        "td",
        "ul",
        "ol",
        "li",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "blockquote",
        "br",
        "div", // ← Often needed for CKEditor structure
        "span", // ← Often needed for styling
      ],
      ALLOWED_ATTR: [
        "href",
        "target",
        "rel",
        "src", // ← Essential for images
        "title",
        "alt", // ← Essential for images
        "allowfullscreen",
        "url",
        "width",
        "height",
        "frameborder",
        "style",
        "class",
        "id",
        "data-*", // ← CKEditor sometimes uses data attributes
      ],
      // Allow data URLs for base64 images if you're using them
      ALLOWED_URI_REGEXP:
        /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp|data):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
    });
  };

  const newHtml = convertOembedToIframe(htmlContent);
  const sanitizedHtmlContent = sanitizeHtmlContent(newHtml);
  const MAX_FILE_SIZE = 2 * 1024 * 1024;

  const getCategory = async () => {
    try {
      const response = await ApiRequest.get("/category", {
        headers: {
          Authorization: `Bearer ${auth_token}`,
        },
      });
      if (response.status === 200) {
        setCategoryData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const uploadFile = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setPicture(file);
  //     setFileName(file.name);
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setFilePreview(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   } else {
  //     console.log("No file selected");
  //   }
  // };

  const uploadFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        toast.warning("File size exceeds 2 MB. Please choose a smaller file.");
        e.target.value = "";
        return;
      }

      setPicture(file);
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      // console.log("No file selected");
    }
  };

  useEffect(() => {
    getCategory();
  }, []);
  useEffect(() => {
    if (slug) {
      getBlogByID(slug);
    }
  }, [slug]);

  // console.log("blogDetails", blogDetails);

  const handlePublish = async () => {
    if (!category) {
      toast.error("Please select a category");
      return;
    }

    if (!picture) {
      toast.error("Please select an image");
      return;
    }

    if (!mainTitle) {
      toast.error("Please enter a title");
      return;
    }

    if (!slugName) {
      toast.error("Please enter a slug");
      return;
    }

    // if (!metaKeywords) {
    //   toast.error("Please enter meta keywords");
    //   return;
    // }

    // const urlRegex =
    //   /^(https?:\/\/)([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

    // if (!canonicalUrl) {
    //   toast.error("Please enter a canonical URL");
    //   return;
    // } else if (!urlRegex.test(canonicalUrl)) {
    //   toast.error("Please enter a valid canonical URL");
    //   return;
    // }

    // if (!metaDescription) {
    //   toast.error("Please enter meta description");
    //   return;
    // } else if (metaDescription.length < 50) {
    //   toast.error("Meta description should be at least 50 characters");
    //   return;
    // }

    if (!sanitizedHtmlContent) {
      toast.error("Please enter content");
      return;
    }
    const removeSpaces = (slug) => {
      const newStr = slug.replaceAll(" ", "-");
      return newStr;
    };

    const formData = {
      title: mainTitle,
      category_id: category,
      content: sanitizedHtmlContent,
      image: picture,
      slug: removeSpaces(slugName),
      meta_description: metaDescription,
      meta_keywords: metaKeywords,
      canonical_url: canonicalUrl,
    };

    console.log("formData=============>", formData);

    try {
      setLoading(true);
      let response;
      if (slug) {
        response = await ApiRequest.put(`/blog/edit/${slug}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${auth_token}`,
          },
        });
      } else {
        response = await ApiRequest.post("/blog/addblog", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${auth_token}`,
          },
        });
      }

      if (response.status === 200 || response.status === 201) {
        toast.success(
          slug ? "Blog updated successfully" : "Blog added successfully"
        );
        resetForm();
        navigate("/blog-admin");
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error publishing blog:", error);
      toast.error(
        `Failed to ${slug ? "update" : "add"} blog. Please try again later.`
      );
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setHtmlContent("");
    setMainTitle("");
    setCategory("");
    setFilePreview("");
    setPicture(null);
    setFileName("");
    if (selectRef.current) {
      selectRef.current.value = "";
    }
  };

  const config = {
    readonly: false,
    height: 800,
    toolbarButtonSize: "middle",
    buttons: ["bold", "italic", "underline", "link", "unlink", "source"],
    uploader: {
      insertImageAsBase64URI: true,
    },
  };

  // Simple upload adapter function
  function MyCustomUploadAdapterPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return {
        upload() {
          return loader.file.then((file) => {
            return new Promise((resolve, reject) => {
              const formData = new FormData();
              formData.append("image", file);
              formData.append("upload_preset", "ml_default"); // Replace with your preset

              // Replace 'demo' with your Cloudinary cloud name
              fetch(
                "https://official-website-mern-backend-1023229424452.asia-south2.run.app/api/blog/imgUpload",
                {
                  method: "POST",
                  body: formData,
                }
              )
                .then((response) => {
                  if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                  }
                  return response.json();
                })
                .then((result) => {
                  if (result.url) {
                    resolve({
                      default: result.url,
                    });
                  } else {
                    reject(new Error("No URL in response"));
                  }
                })
                .catch((error) => {
                  console.error("Upload failed:", error);
                  reject(error);
                });
            });
          });
        },
        abort() {
          console.log("Upload aborted");
        },
      };
    };
  }

  // Cleanup to prevent memory leaks
  useEffect(() => {
    return () => {
      if (editorRef.current) {
        try {
          editorRef.current.destroy();
        } catch (error) {
          console.warn("Editor cleanup error:", error);
        }
      }
    };
  }, []);

  const handleEditorReady = (editor) => {
    editorRef.current = editor;
    console.log("Editor is ready!", editor);
  };

  const handleEditorChange = (event, editor) => {
    try {
      if (editor && typeof editor.getData === "function") {
        const data = editor.getData();
        setHtmlContent(data);
      }
    } catch (error) {
      console.error("Error in onChange:", error);
    }
  };

  const handleEditorError = (error, { willEditorRestart }) => {
    console.error("CKEditor error:", error);

    if (willEditorRestart) {
      editorRef.current = null;
    }
  };

  return (
    <div>
      
      <DashboardLayout>
        <div className="w-full flex-grow p-4 h-full min-h-screen">
          <header className="bg-custom-gradient w-full  p-4 text-white  text-sm md:text-base h-20 relative z-10">
            <div className="flex justify-start  items-center gap-5 container mx-auto pl-5 h-full">
              {/* <Link
              to={"/superadmin/dashboard"}
              className="hover:underline hover:underline-offset-2"
            >
              Home /
            </Link> */}
              <Link
                className="hover:underline hover:underline-offset-2"
                to={"/blog-admin"}
              >
                Blog /
              </Link>
            </div>
          </header>
          <div className="container mx-auto">
            <main className="w-full h-full">
              <section className="w-full h-full">
                <div className="w-full max-w-4xl bg-white h-full md:h-16 mx-auto rounded-xl md:rounded-full my-10 flex justify-start items-center px-4 sm:px-6 lg:px-10 flex-row p-5">
                  {/* Select Dropdown */}
                  <IoOptionsOutline size={25} />
                  <select
                    name="category"
                    id="category"
                    ref={selectRef}
                    className="mx-2 pl-2 pr-8 bg-transparent border-none outline-none w-full md:w-60 flex-1"
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                  >
                    <option value="">Select Category</option>
                    {categoryData.map((category, index) => (
                      <option key={index} value={category._id}>
                        {category.title}
                      </option>
                    ))}
                  </select>

                  {/* Divider Line */}
                  {/* <div className="hidden md:block w-px h-10 bg-black mx-2 sm:mx-4 lg:mx-6"></div> */}

                  {/* divide line */}
                  {/* <div className=" block md:hidden h-px w-full bg-black my-5"></div> */}
                  {/* Search Input */}
                  {/* <div className="flex-grow relative w-full">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    className="w-full h-11 border border-black rounded-full pl-4 pr-24 outline-none focus:border-blue-500"
                    placeholder="Add new category"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-custom-gradient text-white px-3 py-1 rounded-full hover:bg-custom-card-gradient">
                    Done
                  </button>
                </div> */}
                </div>
              </section>

              <section className="w-full md:w-[90%] min-h-80 h-full bg-custom-card-gradient mx-auto rounded-3xl border-[3px] border-dashed border-white flex justify-center items-center flex-col gap-2 p-5 my-10">
                <div className="w-52 h-auto">
                  {filePreview.length > 0 ? (
                    <img
                      src={filePreview}
                      alt="Preview"
                      className="w-full h-full my-4"
                    />
                  ) : (
                    <img
                      src={UploadImg}
                      alt="Upload placeholder"
                      className="w-full h-full"
                    />
                  )}
                </div>

                <div className="w-full h-full flex flex-col justify-center items-center gap-4">
                  {fileName ? (
                    <p className="text-white">Selected File: {fileName}</p>
                  ) : (
                    <p className="text-white">
                      Browse and choose the file you want to upload
                    </p>
                  )}

                  <div className="relative flex justify-center gap-2 flex-col">
                    <input
                      type="file"
                      id="fileInput"
                      className="hidden"
                      accept=".png, .jpg, .jpeg"
                      onChange={uploadFile} // Single file handling
                    />
                    <label
                      htmlFor="fileInput"
                      className="bg-custom-gradient text-black py-1 rounded-full cursor-pointer hover:bg-custom-card-gradient h-10 flex items-center justify-center px-5 w-60 mx-auto border border-white"
                    >
                      {fileName.length > 0 ? "Change File" : "Browse File"}
                    </label>
                  </div>
                </div>
              </section>

              <section className="w-full md:w-[90%] mx-auto h-full my-10 flex flex-col justify-center items-center gap-10">
                <div className="w-full h-full flex flex-col gap-5">
                  <label htmlFor="main_title" className="text-white text-3xl ">
                    Main Title
                  </label>
                  <input
                    type="text"
                    name="main_title"
                    id="main_title"
                    placeholder="Enter the title here"
                    className="w-full px-4 py-2 border-b-2 border-white  outline-none text-black"
                    onChange={(e) => setMainTitle(e.target.value)}
                    defaultValue={mainTitle}
                  />
                </div>

                <div className="w-full h-full flex flex-col gap-5">
                  <label htmlFor="slug" className="text-white text-3xl ">
                    Slug (SEO)
                  </label>
                  <input
                    type="text"
                    name="slug"
                    id="slug"
                    placeholder="Enter the Slug here"
                    className="w-full px-4 py-2 border-b-2 border-white  outline-none text-black"
                    onChange={(e) => setSlugName(e.target.value)}
                    defaultValue={slugName}
                  />
                </div>
                <div className="w-full h-full flex flex-col gap-5">
                  <label
                    htmlFor="meta_keyword"
                    className="text-white text-3xl "
                  >
                    Meta KeyWord (SEO)
                  </label>
                  <input
                    type="text"
                    name="meta_keyword"
                    id="meta_keyword"
                    placeholder="Enter the Meta Keyword here"
                    className="w-full px-4 py-2 border-b-2 border-white  outline-none text-black"
                    onChange={(e) => setMetaKeywords(e.target.value)}
                    defaultValue={metaKeywords}
                  />
                </div>
                <div className="w-full h-full flex flex-col gap-5">
                  <label
                    htmlFor="canonical_url"
                    className="text-white text-3xl "
                  >
                    Canonical URL (SEO)
                  </label>
                  <input
                    type="text"
                    name="canonical_url"
                    id="canonical_url"
                    placeholder="Enter the Canonical URL here"
                    className="w-full px-4 py-2 border-b-2 border-white  outline-none text-black"
                    onChange={(e) => setCanonicalUrl(e.target.value)}
                    defaultValue={canonicalUrl}
                  />
                </div>
                <div className="w-full h-full flex flex-col gap-5">
                  <label
                    htmlFor="Meta_Description"
                    className="text-white text-3xl "
                  >
                    Meta Description (SEO)
                  </label>
                  <textarea
                    name="Meta_Description"
                    id="Meta_Description"
                    placeholder="Enter the Meta Description here"
                    className="w-full px-4 py-2 border-b-2 border-white  outline-none text-black"
                    onChange={(e) => setMetaDescription(e.target.value)}
                    defaultValue={metaDescription}
                    rows="4"
                    cols="50"
                  />
                </div>

                <div className="w-full h-full flex flex-col gap-5">
                  <label
                    htmlFor="main_description"
                    className="text-white text-3xl"
                  >
                    Main Content
                  </label>

                  <CKEditor
                    editor={ClassicEditor}
                    data={htmlContent}
                    config={{
                      extraPlugins: [MyCustomUploadAdapterPlugin],
                      toolbar: {
                        items: [
                          "heading",
                          "|",
                          "bold",
                          "italic",
                          "link",
                          "|",
                          "bulletedList",
                          "numberedList",
                          "|",
                          "outdent",
                          "indent",
                          "|",
                          "imageUpload",
                          "blockQuote",
                          "insertTable",
                          "|",
                          "undo",
                          "redo",
                        ],
                      },
                      image: {
                        toolbar: [
                          "imageTextAlternative",
                          "imageStyle:inline",
                          "imageStyle:block",
                          "imageStyle:side",
                        ],
                      },
                    }}
                    onReady={handleEditorReady}
                    onChange={handleEditorChange}
                    onError={handleEditorError}
                  />

                  {/* <JoditEditor
                    ref={editor}
                    value={htmlContent}
                    config={config}
                    tabIndex={1} // tabIndex of textarea
                    // onBlur={(newContent: string) => setContent(newContent)}
                    onBlur={(newContent) => setHtmlContent(newContent)}
                    onChange={(newContent) => {
                      // setHtmlContent(newContent);
                      // console.log("newContent:=============>",newContent );
                    }}
                  /> */}

                  <button
                    onClick={handlePublish}
                    className="bg-custom-gradient text-white px-4 py-2  mt-4 hover:bg-custom-card-gradient w-32 mx-auto border-white border rounded-full"
                    disabled={loading}
                  >
                    {loading ? "Publishing..." : "Publish"}
                  </button>
                  <div className="w-full h-full">
                    <p className="text-white text-center text-3xl py-5">
                      Preview
                    </p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: sanitizedHtmlContent,
                      }}
                      className="text-white blog-detail border border-dashed p-5"
                    />
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </DashboardLayout>
      {/* <Footer /> */}
    </div>
  );
};

export default UploadBlog;
