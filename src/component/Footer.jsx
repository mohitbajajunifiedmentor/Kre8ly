import { useState, useEffect } from "react";
const Image = "/assets/logo.png";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaAngleRight,
} from "react-icons/fa6";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "@/lib/router-compat";
// const Logo = "/assets/NavBar/White%20Logo.png";
const Logo3 = "/assets/Logo3.gif";
// const Logo = "/assets/LogoChristmas.png";
const Logo = "/assets/NavBar/White%20Logo.png";
// The animated mark was drawn for the old always-dark footer. Now that the
// footer follows the theme, it needs a light-mode counterpart or it disappears
// on the pale surface.
const LogoLight = "/assets/NavBar/Colored%20Logo.png";
// const DiwaliLogo = "/assets/DiwaliLogo.gif";
// const DiwaliLogo = "/assets/LogoDark.mp4";
// const DiwaliLogo = "/assets/DiwaliLogo2.gif";

const OurCourse = [
  { name: "Full Stack Developer Course", url: "/web-development" },
  { name: "Data Science Course", url: "/data-science" },
  { name: "Digital Marketing Course", url: "/digital-marketing" },
  { name: "Machine Learning Course", url: "/machine-learning" },
  { name: "UX/UI Designer Course", url: "/ui-ux-designer" },
  {
    name: "Graphic Design Course",
    url: "/graphic-design",
  },
  // { name: "Data Analyst Course", url: "/data-analyst" },
];

const socialLinks = [
  { icon: FaLinkedinIn, url: "https://www.linkedin.com/company/unifiedmentor" },
  { icon: FaFacebookF, url: "https://www.facebook.com/Unifiedmentor" },
  { icon: FaTwitter, url: "https://twitter.com/unifiedmentor" },
  { icon: FaInstagram, url: "https://instagram.com/_unifiedmentor" },
  { icon: FaYoutube, url: "https://www.youtube.com/@_Unifiedmentor" },
];

const onlineCourse = [
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Careers",
    url: "/careers",
  },
  {
    name: "Placement",
    url: "/placement",
  },
  {
    name: "Hire From Us",
    url: "/hire-from-us",
  },
  {
    name: "Press Releases",
    url: "/press-releases",
  },
  {
    name: "About Us",
    url: "/about",
  },
];

const jobPortal = [
  { name: "Interview Questions", url: "#" },
  { name: "Portfolio Examples", url: "#" },
  { name: "Books, Newsletters & Podcasts", url: "#" },
  { name: "Job Board", url: "#" },
  { name: "Resume Builder", url: "#" },
  { name: "All Resources", url: "#" },
];

const Footer = ({ darMode }) => {
  // Was a bare `localStorage.getItem("role")` during render. Deferred to an
  // effect so it is not evaluated on the server.
  const [getLocalStorageRole, setGetLocalStorageRole] = useState(null);
  useEffect(() => {
    setGetLocalStorageRole(localStorage.getItem("role"));
  }, []);
  // console.log("getLocalStorageRole", getLocalStorageRole);
  const QuickLinks = [
    { name: "Blog", url: "https://blogs.unifiedmentor.com/" },
    // { name: "Blog", url: "https://blog.unifiedmentor.com/" },
    { name: "Services", url: "/services" },
    { name: "Careers", url: "/careers" },
    {
      name: "Privacy Policy",
      url: "/privacy-policy",
    },
    {
      name: "Terms and Conditions",
      url: "/terms-and-conditions",
    },
    {
      name: "Grievance Officer",
      url: "/grievance-officer",
    },
    // {
    //   name: "Internship Terms of Conditions",
    //   url: "/internship-terms-and-conditions",
    // },
    {
      name: "Cancellation and Refund Policy",
      url: "/cancellation-and-refund",
    },
    {
      name: "Placement",
      url: "/placement",
    },
    {
      name: "Shipping and Delivery",
      url: "/shipping-and-delivery",
    },

    { name: "Contact Us", url: "/contact-us" },
    // {
    //   name: `${getLocalStorageRole !== null ? "Dashboard" : "Admin Login"}`,
    //   url: `${
    //     getLocalStorageRole === null
    //       ? "/login"
    //       : getLocalStorageRole === "admin"
    //       ? "/admin/dashboard"
    //       : "/superadmin/dashboard"
    //   }`,
    // },
  ];

  //

  return (
    <footer className="bg-surface-sunken text-content border-t border-line py-12 px-4 relative z-20">
      <div className="w-full px-4 ">
        <div className=" w-full">
          <Link to="/" className="w-1/2 md:w-auto ">
            <figure className="relative w-fit md:h-[5rem] -ml-1.5 md:ml-auto md:mb-10 inline-block">
              {/* <img
                src={Logo1}
                alt="Company Logo"
                className="h-auto object-contain w-16 sm:w-20"
              />
              <img
                src={Logo2}
                alt="Company Logo"
                className="h-auto object-contain w-[150px] "
              /> */}

              {/* Swapped with CSS rather than JS so the mark cannot flash
                  on load or during a theme change. */}
              <img
                src={LogoLight}
                alt="Kre8ly Logo"
                className="w-24 md:w-[11.3rem] object-contain logo-float dark:hidden"
              />
              <img
                src={Logo}
                alt=""
                aria-hidden="true"
                className="hidden w-24 md:w-[11.3rem] object-contain logo-float dark:block"
              />
              {/* <img
                src={DiwaliLogo}
                alt="Kre8ly Logo"
                className="w-72 object-contain"
              /> */}

              {/* <video
                src={DiwaliLogo}
                muted
                autoPlay
                loop
                playsInline
                controls={false}
                className="w-72"
              ></video> */}
            </figure>
          </Link>
          <p className="mb-4 text-[10px] md:text-base text-content-secondary">
            Join thousands who have transformed their lives with our
            high-quality online Courses. Whether you're acquiring new skills,
            enhancing your career, or pursuing a passion, we have the perfect
            Course for you. Benefit from expert instructors, flexible learning
            options, and a supportive community. Start your journey to success
            today with our comprehensive and engaging programs.
          </p>
        </div>
        <div className="grid  mx-auto grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-sm md:text-xl font-bold mb-4">Our Courses</h4>
            <ul className="grid grid-cols-1  gap-2">
              {OurCourse.map((Course) => (
                <li key={Course.name} className="flex items-center">
                  <FaAngleRight className="w-4 h-4 mr-1" />
                  <Link
                    to={Course.url}
                    className="text-content-secondary hover:text-brand transition-colors text-xs md:text-sm"
                  >
                    {Course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm md:text-xl font-bold mb-4">Courses</h4>
            {/* <ul className="grid grid-cols-1  gap-2">
              {onlineCourse.map((link) => (
                <li key={link.name} className="flex items-center">
                  <FaAngleRight className="w-4 h-4 mr-1" />
                  <Link
                    to={link.url}
                    className="text-content-secondary hover:text-brand transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul> */}
            <ul className="grid grid-cols-1 gap-2">
              {onlineCourse.map((course) => (
                <li key={course.name} className="flex items-center">
                  <Link to={course.url}>
                    <div className="flex items-center gap-2">
                      <FaAngleRight className="w-4 h-4 mr-1" />
                      <span className="text-content-secondary text-xs md:text-sm mt-1">
                        {course.name}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm md:text-xl font-bold mb-4">Quick Links</h4>
            <ul className="grid grid-cols-1  gap-2">
              {QuickLinks.map((link) => (
                <li key={link.name} className="flex items-center">
                  <FaAngleRight className="w-4 h-4 mr-1" />
                  <Link
                    to={link.url}
                    className="text-content-secondary hover:text-brand transition-colors text-xs md:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid mx-auto grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Job Portal Section */}
          {/* <div>
            <h2 className="text-xl font-bold mb-4">Job Portal</h2>
            <ul className="grid grid-cols-1 gap-2">
              {jobPortal.map((link) => (
                <li key={link.name} className="flex items-center">
                  <FaAngleRight className="w-4 h-4 mr-1" />
                  <a
                    key={link.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={link.url}
                    className="text-content-secondary hover:text-brand transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Get In Touch Section */}
          <div className="flex flex-col items-start justify-start gap-4">
            <h4 className="text-sm md:text-xl font-bold mb-4">Get In Touch</h4>

            <p className="flex items-center gap-4 mb-2 text-xs md:text-sm">
              <FaPhone className="w-5 h-5 text-brand shrink-0" />
              {/* +9108645322947 */}
              +919518856261
            </p>
            <p className="flex items-center gap-4 mb-2 text-xs md:text-sm">
              <FaEnvelope className="w-5 h-5 text-brand shrink-0" />
              hello@kre8ly.com
            </p>
            <p className="flex items-center gap-4 mb-2 text-xs md:text-sm">
              <FaLocationDot className="w-5 h-5 text-brand shrink-0" />
              Cyber City, WeWork DLF Forum, DLF Phase 3, Gurugram, Haryana
              122002
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="w-5 h-5 text-content-muted hover:text-brand transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className="md:w-[400px]  2xl:w-[750px]  h-64  overflow-hidden rounded-lg shadow-lg  lg:ml-40">
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.5374202223784!2d77.08581590490853!3d28.493474418181087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f176bec9d11%3A0xacd51075ba4f4a4c!2sUnified%20Mentor!5e0!3m2!1sen!2sin!4v1722236519270!5m2!1sen!2sin"
              className=" w-full h-full border-0 rounded-lg outline-none shadow-lg"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe> */}
            <iframe
              title="Kre8ly office location"
              className="w-[800px] h-[450px] border-0 rounded-lg shadow-lg"
              src="https://www.google.com/maps?q=Kre8ly%2C%20DLF%20Cyber%20City%2C%20DLF%20Phase%203%2C%20Gurugram%2C%20Haryana%20122002&output=embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="mb-6 md:mt-10">
          <p className="text-content-muted text-left mt-8 text-xs md:text-sm">
            © 2025-2026, Kre8ly Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
