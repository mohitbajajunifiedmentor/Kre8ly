import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { toast } from "react-toastify";
import ApiRequest from "../../Utils/Axios/Axios";
import { useParams } from "@/lib/router-compat";
import DashboardLayout from "../../component/DashboardLayout/DashboardLayout";
import {
  useAddMembersMutation,
  useGetMembersByIdQuery,
  useUpdateMembersMutation,
} from "../../Redux-setup/api";
import { useDispatch, useSelector } from "react-redux";
import { setUsersData } from "../../Redux-setup/slice";

const AddMembers = () => {
  const { id } = useParams();
  const usersData = useSelector((state) => state?.fetchedData?.usersData);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
  });

  const [addMembers] = useAddMembersMutation();

  const [updateMembers] = useUpdateMembersMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate fields
    let fieldError = "";
    if (name === "password" && value) {
      fieldError = validatePassword(value)
        ? ""
        : "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character";
    } else if (name === "email") {
      fieldError = validateEmail(value)
        ? ""
        : "Please enter a valid email address";
    }

    setError((prev) => ({
      ...prev,
      [name]: fieldError,
    }));

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const getUserData = async (userId) => {
  //   const endpoint = `/admin/admin/${userId}`;
  //   try {
  //     const response = await ApiRequest.get(endpoint);
  //     if (response.data) {
  //       const filterUser = response.data;
  //       if (filterUser) {
  //         setFormData({
  //           name: filterUser.name,
  //           email: filterUser.email,
  //           role: filterUser.role,
  //           password: "",
  //         });
  //       } else {
  //         toast.error("User not found");
  //       }
  //     }
  //   } catch (error) {
  //     toast.error("Error fetching user data");
  //     console.error("Error fetching user data:", error);
  //   }
  // };

  const {
    data: membersData,
    isLoading: isLoadingUser,
    error: userError,
  } = useGetMembersByIdQuery(id, {
    skip: !id,
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (id && !isLoadingUser) {
      if (membersData) {
        setFormData({
          name: membersData.name,
          email: membersData.email,
          role: membersData.role,
          password: "",
        });
      }
    }
  }, [id, isLoadingUser, membersData]);

  const validateForm = () => {
    const newErrors = {
      name: !formData.name ? "Name is required" : "",
      email: !formData.email
        ? "Email is required"
        : !validateEmail(formData.email)
          ? "Invalid email format"
          : "",
      role: !formData.role ? "Role is required" : "",
      password:
        !id && !formData.password
          ? "Password is required"
          : formData.password && !validatePassword(formData.password)
            ? "Invalid password format"
            : "",
    };

    setError(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      if (id) {
        const tempData = {
          name: formData.name,
          email: formData.email,
          role: formData.role,
          password: formData.password,
        };
        // Update existing admin
        await updateMembers({
          id,
          ...tempData,
        })
          .unwrap()
          .then((payload) => {
            // console.log(payload);
            const newArr = usersData?.map((user) => {
              return user._id === id ? { ...user, ...payload?.user } : user;
            });
            dispatch(setUsersData(newArr));
            toast.success("User updated successfully!");
          });

        toast.success("Admin updated successfully!");
      } else {
        // Create new admin
        await addMembers(formData)
          .unwrap()
          .then((payload) => {
            // console.log(payload);
            const newArr = [...usersData, payload].sort(
              (a, b) =>
                new Date(b?.createdAt || 0) - new Date(a?.createdAt || 0)
            );
            dispatch(setUsersData(newArr));
            toast.success("User added successfully!");
          });
      }

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        role: "",
        password: "",
      });
    } catch (error) {
      toast.error(error?.data?.msg || "An error occurred");
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const validatePassword = (value) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(value);
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  return (
    <DashboardLayout>
      <main className="container mx-auto w-full  h-[calc(100vh-4.5rem)]">
        <section className="w-full h-full px-4 md:px-0 max-w-md mx-auto flex justify-center items-center flex-col">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-6  text-center">
            {id ? "Edit Member" : "Add Member"}
          </h1>
          <form
            onSubmit={handleSubmit}
            className="bg-blue-200 shadow-xl rounded-lg px-4 py-4 md:px-8 md:py-8 w-full"
          >
            <div className="space-y-5">
              {/* Name Field */}
              <div>
                <label
                  className="block text-white text-sm md:text-base font-semibold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full py-2.5 px-4 bg-white/95 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none transition-all"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {error.name && (
                  <p className="text-red-400 text-sm mt-1">{error.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  className="block text-white text-sm md:text-base font-semibold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full py-2.5 px-4 bg-white/95 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none transition-all"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {error.email && (
                  <p className="text-red-400 text-sm mt-1">{error.email}</p>
                )}
              </div>

              {/* Role Field */}
              <div>
                <label
                  className="block text-white text-sm md:text-base font-semibold mb-2"
                  htmlFor="role"
                >
                  Role
                </label>
                <select
                  className="w-full py-2.5 px-4 bg-white/95 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none transition-all appearance-none"
                  name="role"
                  id="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Role</option>
                  <option value="admin">Admin</option>
                  <option value="superadmin">Super Admin</option>
                  <option value="marketer">Marketer</option>
                </select>
                {error.role && (
                  <p className="text-red-400 text-sm mt-1">{error.role}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="relative">
                <label
                  className="block text-white text-sm md:text-base font-semibold mb-2"
                  htmlFor="password"
                >
                  Password{" "}
                  {id && (
                    <span className="text-gray-300 text-sm">
                      (Leave blank to keep current)
                    </span>
                  )}
                </label>
                <input
                  className="w-full py-2.5 px-4 bg-white/95 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none transition-all pr-12"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  autoComplete="off"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required={!id}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-[38px] p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                >
                  {showPassword ? (
                    <FaEye className="w-5 h-5 text-gray-600" />
                  ) : (
                    <FaEyeSlash className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                {error.password && (
                  <p className="text-red-400 text-sm mt-1">{error.password}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  className="w-full bg-white text-black font-semibold py-3 px-6 rounded-lg  disabled:opacity-70 disabled:hover:scale-100"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
                      Processing...
                    </span>
                  ) : id ? (
                    "Update Member"
                  ) : (
                    "Add Member"
                  )}
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>
    </DashboardLayout>
  );
};

export default AddMembers;
