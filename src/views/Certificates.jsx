import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useParams } from "@/lib/router-compat";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
const ArrowUpIcon = "/assets/Certification/Arrow.png";
const Tick = "/assets/Certification//Tick.gif";
const Logo = "/assets/Certification//Logo2.png";
const Ellipse = "/assets/Ellipse.webp";
import certificateAxios from "../Utils/Axios/CertificatesAxios";
import { toast } from "react-toastify";
const IsoIcon = "/assets/Certification/Iso.png";
import axios from "axios";
import Query from "../component/Query/Query";
import MobileFooter from "../component/MobileFooter";
import ChatBot from "@/component/ChatBot/ChatBot";

const Certificates = ({ darkMode, setDarkMode }) => {
  const { umid } = useParams();
  const [data, setData] = useState(null);
  const [numberOfWeeks, setNumberOfWeeks] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const parseDate = useCallback((dateString) => {
    if (!dateString || typeof dateString !== "string") {
      throw new Error("Invalid date format");
    }
    const parts = dateString.split("-");
    if (parts.length !== 3) {
      throw new Error("Date format must be DD-MM-YYYY");
    }

    const [day, month, year] = parts.map(Number);
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      throw new Error("Invalid date components");
    }

    return new Date(year, month - 1, day);
  }, []);

  const formatDate = (inputDate) => {
    if (!inputDate) return "";
    try {
      const date = inputDate.split("T")[0];
      const [year, month, day] = date.split("-");
      return `${day}-${month}-${year}`;
    } catch (error) {
      console.error("Invalid date format:", inputDate);
      return "";
    }
  };

  const calculateWeeks = useCallback(
    (startDate, endDate) => {
      try {
        const start = parseDate(startDate);
        const end = parseDate(endDate);
        const msPerWeek = 1000 * 60 * 60 * 24 * 7;
        return Math.max(0, Math.floor((end - start) / msPerWeek));
      } catch (error) {
        console.error("Error calculating weeks:", error);
        return 0;
      }
    },
    [parseDate]
  );

  // console.log(endPoints);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     setError(null);

  //     try {
  //       const response = await certificateAxios.get(endPoints);
  //       if (response.data) {
  //         setData(response.data);
  //         const weeks = calculateWeeks(
  //           response.data.startdate,
  //           response.data.enddate
  //         );
  //         setNumberOfWeeks(weeks);
  //       } else {
  //         toast.error("No data received! Please try again later.");
  //         throw new Error("No data received");
  //       }
  //     } catch (error) {
  //       setError(error.message || "An error occurred while fetching data");
  //       toast.error(error.message || "An error occurred while fetching data");
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [umid, calculateWeeks]);




  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const isNewId = umid?.includes("UMID");
        let endpoint;
        let response;

        if (isNewId) {
          endpoint = `https://achieve-portal-um-1023229424452.asia-south2.run.app/api/offerletter-and-certificates/users/${umid}`;
          response = await axios.get(endpoint, {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          });
        } else {
          endpoint = `trainingCert/${umid}`;
          response = await certificateAxios.get(endpoint);
        }

        if (!response.data) throw new Error("No data received");

        setData(response.data);

        let weeks = 0;
        if (isNewId) {
          const startDate = formatDate(response.data.start_date);
          const endDate = formatDate(response.data.end_date);
          weeks = calculateWeeks(startDate, endDate);
        } else {
          weeks = calculateWeeks(
            response.data.startdate,
            response.data.enddate
          );
        }
        setNumberOfWeeks(weeks);
      } catch (error) {
        console.log(error?.response?.status === 404);
        if (error?.response?.status === 404) {
          toast.error("No data found for the given UMID.");
        } else {
          toast.error(error?.response?.data?.message || "Error fetching data");
        }
        setError(error?.response?.data?.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (umid) fetchData();
  }, [umid, calculateWeeks]);

  const getDesc = () => {
    if (!data) return "No description available";

    const domain = data?.sales_app_sale?.internship || data?.domain;
    const domainDesc = domainDescription.find(
      (desc) => desc.name.toLowerCase() === domain?.toLowerCase()
    );

    return domainDesc?.desc || "No description available";
  };

  const domainDescription = [
    {
      id: 1,
      name: "Data Analyst Intern",
      desc: "Kre8ly’s Data Analytics Course in India is tailored for professionals, covering essential skills like Excel, SQL, Python, R, ETL, Tableau, Generative AI, and ethical data practices. With over 8,000 students trained and a 95% satisfaction rate, this course offers valuable, hands-on experience. Join us to gain practical expertise and stand out in the competitive field of data analytics.",
    },
    {
      id: 2,
      name: "Data Science Intern",
      desc: "In today’s digital age, the value of data is unmatched, making skilled data scientists indispensable. Kre8ly’s Data Science Course in India delivers a comprehensive introduction to data science, meeting the growing need for data-driven insights. With personalized coaching from experienced data scientists, you’ll be equipped to handle real-world challenges effectively.",
    },
    {
      id: 3,
      name: "Web Development Intern",
      desc: "Kre8ly’s Web Development Course covers HTML, CSS, JavaScript, and frameworks like React and Vue.js, along with responsive design, UX/UI principles, backend development, web security, and deployment. This comprehensive training equips you with the skills needed for various career paths in web development, including roles in companies, startups, and freelancing.",
    },
    {
      id: 4,
      name: "Digital Marketing Intern",
      desc: "At Kre8ly, we recognize that digital marketing blends art and science. Our comprehensive course dives into SEO, social media marketing, content creation, email marketing, and PPC advertising. By joining, you'll gain essential skills, in-depth knowledge, and practical experience. This training will empower you to excel in the evolving digital marketing landscape and achieve your full potential.",
    },
    {
      id: 5,
      name: "Machine Learning Intern",
      desc: "Kre8ly's Machine Learning Course in India provides a solid foundation in machine learning, covering supervised and unsupervised learning, MLOps, and Excel. Emphasizing Python, the industry-standard tool, this top course offers hands-on practice suitable for beginners and those with some experience, equipping you with practical skills for real-world applications.",
    },
    {
      id: 6,
      name: "Fullstack Web Development Intern",
      desc: "Kre8ly's Fullstack Web Development Course in India offers a comprehensive learning experience, covering frontend and backend technologies such as HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. This top-rated course emphasizes hands-on projects and industry best practices, making it ideal for beginners and those with prior knowledge, equipping you with the skills to build modern, responsive, and scalable web applications.",
    },
    {
      id: 7,
      name: "Business Analyst Intern",
      desc: "Kre8ly's Business Analyst Course in India provides a strong foundation in data analysis, business strategy, and problem-solving techniques. Covering key topics like business intelligence tools, Excel, SQL, and data visualization with Power BI or Tableau, this course is tailored for beginners and professionals, equipping you with the analytical skills and practical knowledge required to drive data-driven business decisions.",
    },
  ];

  // new data
  //   {
  //     "id": 2,
  //     "sales_id": 19792,
  //     "internship_id": "UMVIP2502202519792",
  //     "start_date": "2025-02-25T00:00:00.000Z",
  //     "end_date": "2025-08-25T00:00:00.000Z",
  //     "months": 6,
  //     "offerletter_sent": false,
  //     "certificate_sent": false,
  //     "createdAt": "2025-02-24T06:34:02.905Z",
  //     "updatedAt": "2025-02-24T06:34:02.905Z",
  //     "sales_app_sale": {
  //         "id": 19792,
  //         "payment_id": "pay_PzRyMhyWG0ukHM",
  //         "order_id": "order_PzRyG24u4TUvON",
  //         "invoice_id": null,
  //         "amount": "999.00",
  //         "date_and_time": "2025-02-24T06:33:58.944Z",
  //         "payment_method": "upi",
  //         "customer_email": "chaitanyasalunke2002@gmail.com",
  //         "customer_phone": "8928660703",
  //         "customer_name": "Chaitanya Mangesh Salunke",
  //         "batch": "25 February",
  //         "occupation": "Fresher",
  //         "registration_code": null,
  //         "internship": "Fullstack Web Development Intern",
  //         "recording_file": null,
  //         "invoice_sent": false,
  //         "approval_status": "approved",
  //         "address": "Kasturi park, wayle nagar, kalyan west.",
  //         "state": "Maharashtra ",
  //         "payment_status": "captured"
  //     }
  // }

  // old Data
  // {
  //   "name": "Lavish",
  //   "domain": "Data Analyst Intern",
  //   "enddate": "05-11-2024",
  //   "startdate": "05-09-2024"
  // }

  // console.log(getDesc());

  return (
    <div className="flex flex-col min-h-screen">
      
      <div className="flex-grow w-full">
        <main className="container mx-auto px-4 py-8 md:py-16 ">
          {/* ... (keep your existing JSX structure) */}

          {isLoading ? (
            <div className="flex justify-center items-center h-full bg-[#FCFCFC] dark:w-full">
              <div className="flex flex-col items-center gap-6 text-content w-full">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid border-yellow-500 dark:border-gray-200"></div>
                <p className="text-lg font-semibold">Loading...</p>
              </div>
            </div>
          ) : error ? (
            <div className="w-full h-full flex justify-center items-center bg-custom-card-gradient md:w-1/2 mx-auto p-5 min-h-48 rounded-lg  outline-1 outline-white outline-dashed">
              <h1 className="text-3xl md:text-5xl font-bold text-[#FF647C] capitalize">
                {error}!
              </h1>
            </div>
          ) :
            (
              <>
                <div
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="800"
                  className="w-full flex flex-col items-center justify-center text-center gap-6 md:gap-10 mb-12 md:mb-20 relative z-20">
                  <div className="w-full">
                    <div
                      data-aos="fade-up"
                      data-aos-delay="0"
                      data-aos-duration="800"
                      className="flex flex-col lg:flex-row  items-center md:items-center justify-center  w-full ">
                      <h1 className="w-fit text-sm  md:text-3xl font-bold text-content capitalize break-words mr-2">
                        Verified Certificate <br /> from Kre8ly
                      </h1>
                      <img
                        src={ArrowUpIcon}
                        alt="arrow"
                        className="w-12 h-12 md:w-16 md:h-16 lg:w-28 lg:h-28 mx-auto lg:mx-0"
                      />
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="0"
                      data-aos-duration="800"
                      className="w-3/5 h-[1px] bg-brand dark:bg-white mt-4 mx-auto"></div>
                  </div>
                </div>
                <section
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="800"
                  className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 md:gap-16 py-4 px-4 relative z-20">
                  <div className="w-full lg:w-1/2 relative">
                    <figure className="absolute -top-60 w-[250px] md:w-[450px] -left-10 md:-left-20 select-none blur-md hidden dark:block">
                      <img
                        src={Ellipse}
                        alt="Blured Effect"
                        className="w-full h-full"
                      />
                    </figure>
                    <div className="w-full bg-gradient-to-br from-brand to-brand-active rounded-lg border border-white shadow-lg relative z-20">
                      <div className="p-6 md:p-8 flex flex-col items-center gap-4 text-primary relative">
                        <figure className="w-24 h-24 md:w-28 md:h-28 absolute -top-[60px] z-20">
                          <div className="w-full h-full relative">
                            <img src={Logo} alt="" className="w-full h-full" />
                            <img
                              src={Tick}
                              alt="Tick"
                              className=" absolute w-8 h-8 top-1 -right-2"
                            />
                          </div>
                        </figure>
                        <h2
                          data-aos="fade-up"
                          data-aos-delay="0"
                          data-aos-duration="800"
                          className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mt-8">
                          Completed by{" "}
                          {data?.name || data?.sales_app_sale?.customer_name}{" "}
                        </h2>
                        <p
                          data-aos="fade-up"
                          data-aos-delay="0"
                          data-aos-duration="800"
                          className="text-base md:text-lg text-left sm:text-center w-full">
                          Domain:{" "}
                          {data?.domain || data?.sales_app_sale?.internship}
                        </p>
                        <p
                          data-aos="fade-up"
                          data-aos-delay="0"
                          data-aos-duration="800"
                          className="text-base md:text-lg text-left sm:text-center w-full">
                          Start date:{" "}
                          {data?.startdate || formatDate(data?.start_date)}
                        </p>
                        <p
                          data-aos="fade-up"
                          data-aos-delay="0"
                          data-aos-duration="800"
                          className="text-base md:text-lg text-left sm:text-center w-full">
                          End date: {data?.enddate || formatDate(data?.end_date)}
                        </p>
                        <p className="text-base md:text-lg text-left sm:text-center w-full">
                          Duration: {numberOfWeeks} weeks
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="800"
                    className="w-full lg:w-1/2 mt-8 lg:mt-0 relative">
                    <figure className="absolute -bottom-36 w-[250px] md:w-[450px] right-0 select-none blur-md">
                      <img
                        src={Ellipse}
                        alt="Blured Effect"
                        className="w-full h-full hidden dark:block"
                      />
                    </figure>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="0"
                      data-aos-duration="800"
                      className="flex flex-col items-start gap-6 text-content relative z-20">
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                        {data?.domain || data?.sales_app_sale?.internship}
                      </h2>
                      <p className="text-lg md:text-xl font-semibold">
                        {data?.name || data?.sales_app_sale?.customer_name} has
                        successfully completed the internship as a{" "}
                        {data?.domain || data?.sales_app_sale?.internship} at
                        Kre8ly.
                      </p>
                      <p className="text-base md:text-lg text-content-secondary">
                        {getDesc()}
                      </p>
                      <p
                        data-aos="fade-up"
                        data-aos-delay="0"
                        data-aos-duration="800"
                        className="text-lg md:text-xl font-semibold flex justify-start items-center gap-3 flex-wrap">
                        <img
                          src={IsoIcon}
                          alt="ico icon"
                          className="w-16 h-auto"
                        />
                        This certificate is ISO-certified and AICTE-approved**
                      </p>
                    </div>
                  </div>
                </section>
              </>
            )
          }
        </main>
      </div>
      <Query />
      <ChatBot darkMode={darkMode} />
      <Footer />
      <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default Certificates;
