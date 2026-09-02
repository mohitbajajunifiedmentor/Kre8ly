import { useState } from "react";
import Navbar from "../../component/Admin/NavBar";
import Footer from "../../component/Footer";
const Log1 = "/assets/Login/Log1.png";
const Log2 = "/assets/Login/Log2.png";
const Log3 = "/assets/Login/Log3.png";
const Log4 = "/assets/Login/Log4.png";
const Log5 = "/assets/Login/Log5.png";
const Log6 = "/assets/Login/Log6.png";
const Globe = "/assets/Login/Globe2.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "@/lib/helmet-compat";
import Query from "../../component/Query/Query";
import ApiRequest from "../../Utils/Axios/Axios";
import { useNavigate } from "@/lib/router-compat";
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";
import {
  setCookies,
  setRole,
  setToken,
  setUserId,
} from "../../Redux-setup/slice";
import { useSelector } from "react-redux";
import ChatBot from "@/component/ChatBot/ChatBot";

const Login = ({ darkMode }) => {
  // const [active, setActive] = useState("Login");

  // const handleClick = () => {
  //   setActive((prev) => (prev === "Login" ? "Signup" : "Login"));
  // };
  return (
    <>
      <Helmet>
        <title>Kre8ly Login – Access Your Account</title>
        <meta
          name="description"
          content="Securely log in to Kre8ly to access your personalized dashboard, continue your learning journey, and manage your enrolled courses."
        />
        <meta name="keywords" content="Kre8ly | Admin Login" />
        <meta name="author" content="Kre8ly | Admin Login" />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://unifiedmentor.com/login" />
      </Helmet>
      <div
        className={`min-h-screen flex items-center justify-center p-4  ${
          darkMode ? "bg-custom-dark-gradient" : "bg-custom-light-gradient"
        }`}
      >
        <main className="w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-start justify-between gap-8">
          <section className="w-full lg:w-1/2 relative">
            <h1 className="hidden lg:block text-3xl lg:text-5xl font-bold dark:text-white text-content mb-8 text-center lg:text-left">
              Welcome To Kre8ly
            </h1>
            <div className="relative w-full max-w-[35rem] h-[35rem] mx-auto">
              <img
                src={Globe}
                alt="Globe"
                className="w-full h-full object-contain"
              />
              {[Log1, Log2, Log3, Log4, Log5, Log6].map((Log, index) => (
                <img
                  key={index}
                  src={Log}
                  alt={`Logo ${index + 1}`}
                  className={`absolute w-16 lg:w-24 h-auto animate-float ${getPositionClass(
                    index
                  )}`}
                />
              ))}
            </div>
          </section>
          <section className="w-full lg:w-1/2 max-w-md mx-auto flex flex-col items-center h-full px-4 pt-8">
            {/* <div
              className="flex items-center justify-between bg-[#EEEEEE] rounded-full py-2 px-2 cursor-pointer relative w-full max-w-[300px] mb-8"
              onClick={handleClick}
            >
              <div
                className={`absolute top-0 bottom-0 left-0 w-1/2 bg-[#3C1F7D] rounded-full transition-transform duration-300 ${
                  active === "Signup" ? "transform translate-x-full" : ""
                }`}
              ></div>
              {["Login", "Signup"].map((type) => (
                <div key={type} className="relative z-10 w-1/2 text-center">
                  <p
                    className={`text-sm font-medium ${
                      active === type ? "text-white" : "text-black"
                    }`}
                  >
                    {type}
                  </p>
                </div>
              ))}
            </div> */}
            <div className="w-full">
              <h2 className="block lg:hidden text-3xl lg:text-5xl font-bold dark:text-content text-content mb-8 text-center lg:text-left">
                Welcome To Kre8ly
              </h2>
              {/* {active === "Login" ? <LoginComponent /> : <SignupComponent />} */}
              <LoginComponent />
            </div>
          </section>
          <Query />
          <ChatBot darkMode={darkMode} />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Login;

const getPositionClass = (index) => {
  const positions = [
    "top-[6%] left-[38%]",
    "top-[30%] right-[5%]",
    "top-[30%] left-[5%]",
    "bottom-[10%] left-1/3",
    "top-[60%] left-0",
    "top-[60%] right-[5%]",
  ];
  return positions[index] || "";
};

const LoginComponent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const auth_token = useSelector((state) => state?.auth_token?.auth_token);

  // console.log("authtoken", auth_token)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (name === "password") {
      validatePassword(value);
    }
  };

  const validatePassword = (value) => {
    if (value.length < 8) {
      setError((prevState) => ({
        ...prevState,
        password: "Password must be at least 8 characters long",
      }));
    } else {
      setError((prevState) => ({
        ...prevState,
        password: "",
      }));
    }
  };

  // const handleCreateCookies = (name, value) => {
  //   const thirtyDaysFromNow = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
  //   const cookies = new Cookies();
  //   cookies.set(name, value, { expires: thirtyDaysFromNow });
  //   setCustomCookies(value);
  // };

  // console.log("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your login logic here
    if (error.username || error.password) {
      return false;
    }
    try {
      setIsLoading(true);
      const response = await ApiRequest.post(
        "/auth/login",
        {
          email: formData.username,
          password: formData.password,
        },
        {
          headers: {
            Authorization: `Bearer ${auth_token}`,
          },
        }
      );

      // console.log(response?.data);
      if (response.status === 200) {
        dispatch(setRole(response?.data.role));
        dispatch(setUserId(response?.data.userId));
        dispatch(setCookies(response?.data.token));
        dispatch(setToken(response?.data.token));
        // console.log({
        //   cookies: response?.data.token,
        //   role: response?.data.role,
        //   userId: response?.data.userId,
        // });
        console.log("response", response?.data.role);

        switch (response?.data.role) {
          case "superadmin":
            navigate("/dashboard");
            break;
          case "admin":
            navigate("/dashboard");
            break;
          case "marketer":
            navigate("/blog-admin");
            break;
          case "sales":
            navigate("/dashboard/students-applied");
            break;
          default:
            navigate("/login");
            break;
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="dark:bg-primary  bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-6 lg:p-8 shadow-xl">
      <h2 className="text-2xl lg:text-3xl font-semibold text-content mb-2">
        Login
      </h2>
      <p className=" mb-6 text-content">Glad you're back!</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block  mb-2 text-content mt-5">
            Username
          </label>
          <input
            type="email"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            placeholder="Enter your username"
            autoComplete="on"
            className="w-full bg-primary bg-opacity-20 border rounded-lg px-4 py-2 text-content focus:outline-none focus:ring-2 focus:ring-blue"
          />
        </div>
        <div className="mb-4 relative">
          <label htmlFor="password" className="block  mb-2 text-content mt-5">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
            autoComplete="on"
            className="w-full bg-primary bg-opacity-20 border rounded-lg px-4 py-2 text-content focus:outline-none focus:ring-2 focus:ring-blue"
          />
          <button
            type="button"
            className="absolute right-4 top-11"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <FaEyeSlash className="text-content" />
            ) : (
              <FaEye className="text-content" />
            )}
          </button>
          {error.password && (
            <p className="text-red-500 mt-2">{error.password}</p>
          )}
        </div>
        <button
          className="w-full  text-white bg-brand   hover:text-white hover:bg-brand-hover  font-semibold py-2 px-4 rounded-lg transition duration-300 mt-5"
          type="submit"
          disabled={error.password || isLoading}
          title={error.password ? "Please enter a valid password" : "Login"}
        >
          {isLoading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
};

const SignupComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    password: "",
    confirmPassword: "",
    username: "",
    phone: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // Check password length

    if (name === "password" || name === "confirmPassword") {
      validatePasswords(name, value);
    }

    if (name === "phone") {
      validatePhoneNumber(name, value);
    }
  };

  const validatePasswords = (field, value) => {
    let newErrors = { ...error };
    // console.log(newErrors);

    if (field === "password") {
      if (value.length < 8) {
        newErrors.password = "Password must be at least 8 characters long!";
      } else {
        newErrors.password = "";
      }

      // Check if passwords match
      if (formData.confirmPassword && value !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match!";
      } else {
        newErrors.confirmPassword = "";
      }
    } else if (field === "confirmPassword") {
      // Check if passwords match
      if (value !== formData.password) {
        newErrors.confirmPassword = "Passwords do not match!";
      } else {
        newErrors.confirmPassword = "";
      }
    }

    setError(newErrors);
  };
  const validatePhoneNumber = (field, value) => {
    // console.log(field, value, "phone");
    let newErrors = { ...error };
    const phoneRegex =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    if (!phoneRegex.test(value)) {
      newErrors.phone = "Invalid phone number!";
    } else {
      newErrors.phone = "";
    }

    setError(newErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      error.password ||
      error.confirmPassword ||
      error.username ||
      error.phone
    ) {
      return;
    }
    // Add form submission logic here
    // console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-primary bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-6 lg:p-8 shadow-xl">
      <h2 className="text-2xl lg:text-3xl font-semibold text-content mb-2">
        Sign Up
      </h2>
      <p className="mb-6 text-content">Glad you're here!</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2 text-content">
            Name
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            autoComplete="on"
            className="w-full bg-primary bg-opacity-20 rounded-lg px-4 py-2 text-content focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-content mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            autoComplete="on"
            className="w-full bg-primary bg-opacity-20 rounded-lg px-4 py-2 text-content focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block  mb-2 text-content">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Enter your phone number"
            autoComplete="on"
            className="w-full bg-primary bg-opacity-20 rounded-lg px-4 py-2 text-content focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {error.phone && <p className="text-red-500 mt-2">{error.phone}</p>}
        </div>
        <div className="mb-6 relative">
          <label htmlFor="password" className="block text-content mb-2 ">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
            autoComplete="on"
            className="w-full bg-primary bg-opacity-20 rounded-lg px-4 py-2 text-content focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
          />
          <button
            type="button"
            className="absolute right-3 top-11"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <FaEyeSlash className="text-content" />
            ) : (
              <FaEye className="text-content" />
            )}
          </button>
        </div>
        <div className="mb-6 relative">
          <label htmlFor="confirm-password" className="block mb-2 text-content">
            Confirm Password
          </label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirm-password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            placeholder="Confirm your password"
            autoComplete="on"
            className="w-full bg-primary bg-opacity-20 rounded-lg px-4 py-2 text-content focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="button"
            className="absolute right-3 top-11"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <FaEyeSlash className="text-content" />
            ) : (
              <FaEye className="text-content" />
            )}
          </button>
          {error.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">{error.confirmPassword}</p>
          )}
          {error.password && (
            <p className="text-red-500 text-sm mt-1">{error.password}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-custom-gradient hover:bg-custom-card-gradient text-content font-semibold py-2 px-4 rounded-lg transition duration-300"
          title={
            error.password || error.confirmPassword || error.username
              ? "Please fill in all fields Correctly before submitting!"
              : "Sign Up"
          }
          disabled={error.password || error.confirmPassword || error.username}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};
