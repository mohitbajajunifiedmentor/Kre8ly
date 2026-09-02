import { useEffect, useState } from "react";
import NavBar from "../../component/Admin/NavBar";
import { Link, useParams, useNavigate } from "@/lib/router-compat";
import ApiRequest from "../../Utils/Axios/Axios";
const UploadImg = "/assets/Blog/Admin/Upload.png";
import { toast } from "react-toastify";
import DashboardLayout from "../../component/DashboardLayout/DashboardLayout";
import { useSelector } from "react-redux";

const EditCategory = () => {
  const { id } = useParams();
  // console.log(id);
  const navigate = useNavigate();
  const [category, setCategory] = useState({});
  const [fileName, setFileName] = useState("");
  const [filePreview, setFilePreview] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null); // File to upload
  const [loading, setLoading] = useState(false);
  // const auth_token = useSelector((state) => state?.auth_token.auth_token);
  const auth_token = useSelector((state) => state?.auth_token?.auth_token);

  const getCategoryByID = async (id) => {
    try {
      const response = await ApiRequest.get(`/category/${id}`, {
        headers: {
          "Authorization": `Bearer ${auth_token}`
        }
      });
      if (response.status === 200) {
        const data = response.data;
        setCategory(data);
        setTitle(data.title); // Populate title
        setDescription(data.description); // Populate description
        setFilePreview(data.image); // Use existing image as preview
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      if (title === "" || description === "" || file === null) {
        toast.error("All fields are required");
        return;
      }
      // Create a new FormData object to handle file uploads
      const formData = {
        title: title,
        description: description,
        image: file,
      };

      const response = await ApiRequest.post("/category/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",// Ensure the correct content type
          "Authorization": `Bearer ${auth_token}`,
        },
      });

      if (response.status === 201) {
        toast.success("Category added successfully.");
        navigate("/blog-admin");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to add category. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getCategoryByID(id);
    }
  }, [id]);

  const MAX_FILE_SIZE = 2 * 1024 * 1024;

  // Handle file upload for single image
  const uploadFile = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      const selectedFile = files[0];
      if (selectedFile.size > MAX_FILE_SIZE) {
        toast.warning("File size exceeds 2 MB. Please choose a smaller file.");
        e.target.value = "";
        return;
      }
      setFileName(selectedFile.name);
      setFile(selectedFile);
      const reader = new FileReader();

      reader.onloadend = () => {
        setFilePreview(reader.result); // Set base64 image preview
      };
      reader.readAsDataURL(selectedFile); // Convert file to base64
    } else {
      // console.log("No file selected");
    }
  };

  // Handle category update
  const handleUpdateCategory = async (e) => {
    e.preventDefault();

    const formData = {
      title: title,
      description: description,
      image: file,
    };

    try {
      setLoading(true);
      const response = await ApiRequest.put(`/category/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${auth_token}`,
        },
      });
      if (response.status === 200) {
        toast.success("Category updated successfully");
        navigate("/blog-admin");
      }
    } catch (error) {
      console.error("Error updating category", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      
      <DashboardLayout>
        <div className="w-full flex-grow p-4 h-full min-h-screen">
          <header className="bg-custom-gradient w-full p-4 text-white text-sm md:text-base h-20 relative z-10">
            <div className="flex justify-start items-center gap-5 container mx-auto pl-5 h-full">
              {/* <Link
              to={"/superadmin/dashboard"}
              className="hover:underline hover:underline-offset-2"
            >
              Home
            </Link> */}
              <Link
                className="hover:underline hover:underline-offset-2"
                to={"/blog-admin"}
              >
                Category /
              </Link>
              {id && <p>{category?.title}</p>}
            </div>
          </header>

          <form onSubmit={id ? handleUpdateCategory : handleAddCategory}>
            <section className="w-full md:w-[90%] min-h-80 h-full bg-custom-card-gradient mx-auto rounded-3xl border-[3px] border-dashed border-white flex justify-center items-center flex-col gap-2 p-5 my-10">
              <div className="w-52 h-auto">
                {filePreview ? (
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
                {fileName.length === 0 ? (
                  <p className="text-white">
                    Browse and choose the file you want to upload
                  </p>
                ) : (
                  <p className="text-white">Selected File: {fileName}</p>
                )}

                <div className="relative flex justify-center gap-2 flex-col text-white">
                  <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    accept=".png, .jpg, .jpeg"
                    onChange={uploadFile} // Single file handling
                  />
                  <label
                    htmlFor="fileInput"
                    className="bg-custom-gradient text-white py-1 rounded-full cursor-pointer hover:bg-custom-card-gradient h-10 flex items-center justify-center px-5 w-60 mx-auto border border-white"
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
                  className="w-full px-4 py-2 border-b-2 border-white  outline-none text-white"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="w-full h-full flex flex-col gap-5">
                <label htmlFor="main_description" className="text-white text-3xl">
                  Main Content
                </label>

                <textarea
                  name="main_description"
                  id="main_description"
                  placeholder="Enter the content here"
                  className="w-full px-4 py-2 border-b-2 border-white outline-none text-white placeholder-gray-300 overflow-x-hidden overflow-y-scroll h-full max-h-80"
                  cols={10}
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="bg-custom-gradient text-white py-2 px-5 rounded-full hover:bg-custom-card-gradient w-60 mx-auto"
              >
                {id
                  ? loading
                    ? "Updating..."
                    : "Update Category"
                  : loading
                    ? "Adding..."
                    : "Add Category"}
              </button>
            </section>
          </form>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default EditCategory;
