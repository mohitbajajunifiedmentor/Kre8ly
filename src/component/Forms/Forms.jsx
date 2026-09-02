import React, { useState } from "react";
// import { IoCloseCircle } from "react-icons/io5";
import { toast } from "react-toastify";
import ApiRequest from "../../Utils/Axios/Axios";
const EmailImage = "/assets/Email-Popup.png";
import { MdClose } from "react-icons/md";
import { useLocation } from "@/lib/router-compat";
import { useSelector } from "react-redux";
const ImagePopUpForm = "/assets/ImagePopUpForm.svg";
import { IoMdClose } from "react-icons/io";
const FormImage = "/assets/Home/FormImage.svg";
// const left_side_image = "/assets/Home/left_side_image.svg";
const tenor_unscreen = "/assets/Home/tenor-unscreen.gif";
// const image1 = "/assets/diwali/image1.svg";
// const image2 = "/assets/diwali/image2.svg";
// const image3 = "/assets/diwali/image3.svg";
// const Chakra = "/assets/diwali/Chakra.gif";
const form_verctor = "/assets/Home/form_verctor.svg";

const Forms = ({ setCloseForm, setShowCurriculum }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    domain: "",
    feedback: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    contact: "",
    domain: "",
    feedback: "",
    checkbox: "",
  });
  const [loading, setLoading] = useState(false);
  const [consent, setConsent] = useState(false);
  const [thanksPopUp, setThanksPopUp] = useState(false);
  const { pathname } = useLocation();
  // console.log(pathname);
  // const [checked, setChecked] = useState(false);

  const auth_token = useSelector((state) => state?.auth_token?.auth_token);

  const curriculamUrls = [
    {
      name: "web-development",
      url: "https://drive.google.com/file/d/1a_nTxLmQpxU0rfrwkdQDP-ueo94hXCHZ/view?usp=sharing",
    },
    {
      name: "digital-marketing",
      url: "https://drive.google.com/file/d/1SGrE8FH6VqXf2r-59Z6eo6xKmXDDgAHT/view?usp=sharing",
    },
    {
      name: "data-science",
      url: "https://drive.google.com/file/d/1Z6zlU_ZVlxqDkKX2Gl-MIeqoDzBwdTNV/view?usp=sharing",
    },
    {
      name: "machine-learning",
      url: "https://drive.google.com/file/d/1mH2e_P7Wvb7-b7V026V13TiQMZT23Xzn/view?usp=sharing",
    },
  ];

  const validatePhone = (contact) => {
    const regex = /^(?:\+1)?\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    return regex.test(contact);
  };
  const validateName = (name) => {
    if (name.length < 3) {
      return false;
    }
    return true;
  };

  const validatefeedback = (feedback) => {
    if (feedback.length < 10) {
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Always update formData
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Phone validation logic
    if (name === "contact") {
      if (!validatePhone(value) && value !== "") {
        setError((prevError) => ({
          ...prevError,
          contact: "Invalid phone number",
        }));
      } else {
        setError((prevError) => ({ ...prevError, contact: "" }));
      }
    }
    // Name validation logic
    if (name === "name") {
      if (!validateName(value) && value !== "") {
        setError((prevError) => ({
          ...prevError,
          name: "Name must be at least 3 characters long!",
        }));
      } else {
        setError((prevError) => ({ ...prevError, name: "" }));
      }
    }
    // feedback validation logic
    if (name === "feedback") {
      if (!validatefeedback(value) && value !== "") {
        setError((prevError) => ({
          ...prevError,
          feedback: "feedback must be at least 10 characters long!",
        }));
      } else {
        setError((prevError) => ({ ...prevError, feedback: "" }));
      }
    }

    // Checkbox validation logic
  };

  // const validateCheckbox = () => {
  //   if (checked === false) {
  //     setError((prevError) => ({
  //       ...prevError,
  //       checkbox: "Please accept the terms and conditions",
  //     }));
  //     return false;
  //   } else {
  //     setError((prevError) => ({ ...prevError, checkbox: "" }));
  //     return true;
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const isCheckboxValid = validateCheckbox();
    // Check for errors before submitting
    if (
      // !isCheckboxValid ||
      error.name ||
      error.email ||
      error.contact ||
      error.domain ||
      error.feedback
    ) {
      toast.error("Please fix the errors before submitting.");
      return;
    }

    // Consent validation
    if (!consent) {
      toast.error("Kindly select the checkbox to continue.");
      return;
    }

    try {
      setLoading(true);
      const response = await ApiRequest.post("/user/create", formData, {
        headers: {
          Authorization: `Bearer ${auth_token}`,
        },
      });

      if (response.status === 201) {
        toast.success("Form submitted successfully!");

        setShowCurriculum(true);
        setCloseForm(false);

        if (pathname !== "/") {
          const selectedDomain = formData?.domain;
          const SelectedLink = curriculamUrls.find(
            (url) => url.name === selectedDomain
          )?.url;
          const curriculamLink = document.createElement("a");
          curriculamLink.href = SelectedLink;
          curriculamLink.target = "_blank";
          curriculamLink.click();
        }
        // Reset form fields after successful submission
        setFormData({
          name: "",
          email: "",
          contact: "",
          domain: "",
          feedback: "",
        });

        // Close the form if required
        setThanksPopUp(true);
        // setCloseForm(false);
      } else {
        toast.error("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(error?.response?.data?.msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {thanksPopUp ? (
        <div className="max-w-3xl w-full mx-auto p-4 sm:p-6 bg-surface rounded-lg shadow-md relative top-0 text-start flex justify-center items-center flex-col h-fit min-h-96">
          <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
            <MdClose
              onClick={() => {
                setThanksPopUp(false);
                setCloseForm(false);
              }}
              className="text-2xl sm:text-3xl cursor-pointer text-[#6439C5] hover:text-[#5b5178] rounded-md"
            />
          </div>

          <figure className="w-full h-full flex items-center justify-center">
            <img
              src={EmailImage}
              alt="EmailImage"
              className="w-[90%] sm:w-[80%] h-auto object-cover mx-auto"
            />
          </figure>

          <h2 className="text-xl sm:text-2xl font-bold mb-3 text-center mt-6">
            Thank You for Applying!
          </h2>

          <p className="text-base sm:text-lg text-center text-content/70 px-4 sm:px-0  mx-auto">
            Your application has been received successfully. We&apos;ll review
            it <br /> and get in touch with you soon.
          </p>

          <button
            className="bg-custom-card-gradient py-2 px-10 text-white rounded-md mt-5"
            onClick={() => {
              setThanksPopUp(false);
              setCloseForm(false);
            }}
          >
            Close
          </button>
        </div>
      ) : (
        <div className="flex flex-row bg-surface w-full max-w-5xl mx-auto rounded-xl shadow-lg overflow-hidden relative max-h-[100vh] sm:max-h-[95vh]">
            <div className="absolute top-2 right-2 md:top-4 md:right-4 z-50">
              <IoMdClose
                onClick={() => setCloseForm(false)}
                className="text-2xl md:text-3xl cursor-pointer text-content-secondary hover:text-content bg-surface/80 rounded-full shadow-sm"
              />
            </div>
          {/* Left Side - Image */}
          <figure className="hidden md:flex items-center justify-center relative md:w-1/2 bg-surface">
            <img
              src={FormImage}
              alt="Internship Banner"
              className="h-full w-full object-contain p-4 lg:p-8"
            />
          </figure>
          {/* Right Side - Form */}
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="relative w-full md:w-1/2 p-4 pt-8 md:py-6 lg:py-8 md:px-10 lg:px-16 flex flex-col gap-3 lg:gap-4 justify-center z-10 bg-surface overflow-y-auto"
          >
            <h2 className="md:text-3xl text-2xl text-center font-semibold text-content mt-4">
              Apply for a program
            </h2>

            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder=" "
                className="block w-full text-sm border border-line rounded px-4 py-3 lg:py-4 focus:outline-none text-content bg-transparent appearance-none  dark:focus:border-blue-500  focus:ring-0 focus:border-blue-600 peer"
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-content-muted  duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-surface px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
              >
                Name
              </label>
              {error.name && (
                <p className="text-error text-sm">{error.name}</p>
              )}
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder=" "
                className="block w-full text-sm border border-line rounded px-4 py-3 lg:py-4 focus:outline-none text-content bg-transparent appearance-none  dark:focus:border-blue-500  focus:ring-0 focus:border-blue-600 peer"
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-content-muted  duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-surface px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
              >
                Email Id
              </label>
            </div>

            <div className="relative">
              <input
                type="tel"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder=" "
                required
                className="block w-full text-sm border border-line rounded px-4 py-3 lg:py-4 focus:outline-none text-content bg-transparent appearance-none  dark:focus:border-blue-500  focus:ring-0 focus:border-blue-600 peer"
              />
              <label
                htmlFor="contact"
                className="absolute text-sm text-content-muted  duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-surface px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
              >
                Phone No
              </label>
              {error.contact && (
                <p className="text-error text-sm">{error.contact}</p>
              )}
            </div>

            <select
              id="domain"
              name="domain"
              value={formData.domain}
              onChange={handleChange}
              required
              className="border border-line rounded px-4 py-3 lg:py-4 focus:outline-none text-sm"
            >
              <option className="text-content-muted" value="">
                Select Domain
              </option>
              <option value="web-development">Web Development</option>
              <option value="data-science">Data Science</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="machine-learning">Machine Learning</option>
              <option value="ui-ux-design">UI/UX Design</option>
              <option value="graphic-design">Graphic Design</option>
            </select>

            <div className="relative mt-3">
              <textarea
                id="message"
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                rows={4}
                required
                className="block w-full text-base text-content bg-transparent border border-line rounded px-4 pt-3 lg:pt-4 pb-2 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute text-xl text-content-muted duration-300 transform -translate-y-4 scale-75 -top-0 z-10 origin-[0] bg-surface px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
              >
                Message
              </label>
              {error.feedback && (
                <p className="text-error text-sm">{error.feedback}</p>
              )}
            </div>
              {/* Consent Checkbox (Mandatory UI only, not stored) */}
            <div className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                id="consent"
                checked={consent}
                onChange={() => setConsent(!consent)}
                className="h-4 w-4 cursor-pointer"
                required
              />
              <label htmlFor="consent" className="text-xs text-left text-content-secondary cursor-pointer">
                I acknowledge and agree to receive communication from Kre8ly related to my query via WhatsApp, phone calls, SMS, email, and RCS messaging.
              </label>
            </div>

            <div className="flex items-center justify-center z-10">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-900 text-white bg-brand mb-3 md:mb-0 w-[80%] hover:bg-transparent hover:text-content py-3 px-2 rounded-md font-semibold hover:bg-blue-800 transition-all border border-line-strong text-xs md:text-sm"
              >
                {loading ? "Submitting..." : "Request a Callback"}
              </button>
            </div>

            {/* <img
              src={form_verctor}
              alt=""
              className="absolute top-0 right-0 h-[55vh] object-cover z-0 pointer-events-none"
            /> */}
          </form>
        </div>
      )}
    </>
  );
};

export default Forms;