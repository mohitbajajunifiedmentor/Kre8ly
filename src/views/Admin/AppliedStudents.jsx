import { useEffect, useState } from "react";
import NavBar from "../../component/Admin/NavBar";
import Footer from "../../component/Footer";
import { toast } from "react-toastify";
import ApiRequest from "../../Utils/Axios/Axios";
import { CiSearch } from "react-icons/ci";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import DashboardLayout from "../../component/DashboardLayout/DashboardLayout";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetAllStudentsQuery,
  useUpdateStudentStatusMutation,
} from "../../Redux-setup/api";
import { setStudentData } from "../../Redux-setup/slice";
const NotesImage = "/assets/NotesImage.png";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ToggleComponent from "../../component/MicroComponents/ToggleComponent";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AppliedStudents = () => {
  // const [allStudentsData, setAllStudentsData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [selectedColors, setSelectedColors] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [finalStudentData, setFinalStudentData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 20;
  const dispatch = useDispatch();
  const allStudentsData = useSelector((state) => state.fetchedData.studentData);
  const {
    isLoading: isLoading,
    error: studentError,
    data: students,
  } = useGetAllStudentsQuery();

  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;
  const currentRecords = finalStudentData?.slice(startIndex, endIndex);
  const totalPages = Math.ceil(
    (finalStudentData?.length || 0) / recordsPerPage
  );
  const [toggle, setToggle] = useState(true);
  const toggleComponent = () => {
    setToggle(!toggle);
  };

  // Get visible page numbers
  const getVisiblePageNumbers = () => {
    let pages = [];
    let maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      // If total pages are less than max, show all pages
      pages = [...Array(totalPages)].map((_, i) => i + 1);
    } else {
      // Always show first page
      pages.push(1);

      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      // Add dots after first page if there's a gap
      if (startPage > 2) {
        pages.push("...");
      }

      // Add pages around current page
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      // Add dots before last page if there's a gap
      if (endPage < totalPages - 1) {
        pages.push("...");
      }

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  };

  // const handleStatusChange = async (id, value) => {
  //   try {
  //     if (!value) {
  //       toast.error("Please select a status");
  //       return;
  //     }

  //     const selectedOption = options.find((opt) => opt.value === value);
  //     setSelectedColors((prev) => ({
  //       ...prev,
  //       [id]: selectedOption.bgColor,
  //     }));

  //     await ApiRequest.put(`/admin/user/status/${id}`, {
  //       status: value,
  //     });

  //     dispatch(
  //       setStudentData((prevData) =>
  //         prevData.map((student) =>
  //           student._id === id ? { ...student, status: value } : student
  //         )
  //       )
  //     );

  //     toast.success("Status submitted successfully");
  //   } catch (error) {
  //     console.error("Error submitting status:", error);
  //     toast.error("Failed to submit status. Please try again.");
  //   }
  // };

  // const getStudentsData = async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = await ApiRequest.get("/user/users");
  //     if (response.status === 200) {
  //       const sortedData = response.data.sort(
  //         (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  //       );
  //       setAllStudentsData(sortedData);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching student data:", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getStudentsData();
  // }, []);

  const [updateStudentStatus] = useUpdateStudentStatusMutation();

  const handleStatusChange = async (id, value) => {
    try {
      if (!value) {
        toast.error("Please select a status");
        return;
      }

      const selectedOption = options.find((opt) => opt.value === value);
      setSelectedColors((prev) => ({
        ...prev,
        [id]: selectedOption.bgColor,
      }));

      await updateStudentStatus({ id, status: value }).unwrap();

      const updatedStudentData = allStudentsData.map((student) =>
        student._id === id ? { ...student, status: value } : student
      );
      dispatch(setStudentData(updatedStudentData));

      toast.success("Status submitted successfully");
    } catch (error) {
      console.error("Error submitting status:", error);
      toast.error("Failed to submit status. Please try again.");
    }
  };

  useEffect(() => {
    if (students && (!allStudentsData || allStudentsData.length === 0)) {
      const sortedStudentData = [...students].sort(
        (a, b) => new Date(b?.createdAt) - new Date(a?.createdAt)
      );
      dispatch(setStudentData(sortedStudentData));
    }
  }, [students, dispatch, allStudentsData]);

  useEffect(() => {
    if (studentError) {
      toast.error("Failed to load student data. Please try again.");
      console.error("Error loading student data:", studentError);
    }
  }, [studentError]);

  const getData = (data, filterName) => {
    return Array.isArray(data)
      ? data.filter((item) => item.status === filterName).length
      : 0;
  };

  const statusData = [
    {
      label: "Total",
      color: "#2171b5",
      percentage: allStudentsData.length || 0,
    },
    {
      label: "No Action",
      color: "#9E9E9E",
      percentage: getData(allStudentsData, "select-status"),
    },
    {
      label: "Follow Up",
      color: "#A5F3FC",
      percentage: getData(allStudentsData, "follow-up"),
    },
    {
      label: "Second Follow Up",
      color: "#06B6D4",
      percentage: getData(allStudentsData, "second-follow-up"),
    },
    {
      label: "Registered",
      color: "#4ADE80",
      percentage: getData(allStudentsData, "registered"),
    },
    {
      label: "Interested",
      color: "#16A34A",
      percentage: getData(allStudentsData, "interested"),
    },
    {
      label: "DNP",
      color: "#FB923C",
      percentage: getData(allStudentsData, "dnp"),
    },
    {
      label: "Not Interested",
      color: "#EE5D50",
      percentage: getData(allStudentsData, "not-interested"),
    },
  ];

  const structuredDate = (usersDate) => {
    const dateTime = new Date(usersDate);
    const year = dateTime.getUTCFullYear();
    const month = dateTime.getUTCMonth() + 1;
    const day = dateTime.getUTCDate();
    const hours = dateTime.getUTCHours();
    const minutes = dateTime.getUTCMinutes();
    const seconds = dateTime.getUTCSeconds();

    return `${day}-${month}-${year} ${hours % 12 || 12}:${minutes}:${seconds} ${
      hours >= 12 ? "PM" : "AM"
    }`;
  };

  const options = [
    {
      value: "select-status",
      label: "Select Status",
      bgColor: "bg-white",
      textColor: "text-black",
    },
    {
      value: "follow-up",
      label: "Follow Up",
      bgColor: "bg-cyan-200",
      textColor: "text-black",
    },
    {
      value: "second-follow-up",
      label: "Second Follow Up",
      bgColor: "bg-cyan-500",
      textColor: "text-white",
    },
    {
      value: "registered",
      label: "Registered",
      bgColor: "bg-green-400",
      textColor: "text-white",
    },
    {
      value: "interested",
      label: "Interested",
      bgColor: "bg-green-600",
      textColor: "text-white",
    },
    {
      value: "dnp",
      label: "DNP",
      bgColor: "bg-orange-400",
      textColor: "text-white",
    },
    {
      value: "not-interested",
      label: "Not Interested",
      bgColor: "bg-red-400",
      textColor: "text-white",
    },
  ];

  const handleChangeColor = (value) => {
    const selectedOption = options.find((option) => option.value === value);
    if (selectedOption) {
      return selectedOption.bgColor;
    }
  };

  function filterData(allStudentsData, searchValue) {
    if (!searchValue) return allStudentsData;

    const searchValueLower = searchValue.toLowerCase().trim();

    return allStudentsData.filter((data) => {
      return [data?.name, data?.contact, data?.email]
        .filter(Boolean)
        .some((field) => field.toLowerCase().includes(searchValueLower));
    });
  }

  function filterByStatus(arr, selectedStatus) {
    return selectedStatus
      ? arr.filter((field) => field.status === selectedStatus)
      : arr;
  }

  useEffect(() => {
    let processedData = filterData(allStudentsData, searchValue);
    processedData = filterByStatus(processedData, selectedStatus);
    setFinalStudentData(processedData);
  }, [searchValue, selectedStatus, allStudentsData]);

  return (
    <DashboardLayout>
      <div className="w-full h-full container mx-auto flex  flex-col gap-4">
        <ToggleComponent toggleComponent={toggleComponent} toggle={toggle} />
        {toggle && (
          <section className="w-full h-full flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-4">
            {/* Left Section - Cards */}
            <div className="w-full lg:w-1/2 flex justify-center ">
              <div className="grid grid-cols-1 sm:grid-cols-2   lg:grid-cols-2 gap-5 w-full">
                {statusData?.map((item) => (
                  <Cards key={item.label} data={item} />
                ))}
              </div>
            </div>

            {/* Right Section - Graph */}
            <div className="w-full lg:w-1/2 bg-cardColor  flex  justify-between items-center rounded-md flex-col ">
              <div className="bg-graphBackground py-4 w-[95%] rounded-md px-4 mt-4 ">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-2 gap-x-2">
                  {statusData.map((status, index) => (
                    <div
                      key={index}
                      className="flex items-start justify-start rounded-md w-full gap-2"
                    >
                      <span
                        className="w-3 h-3 block rounded-full"
                        style={{ backgroundColor: status.color }}
                      />
                      <div className="flex items-start gap-1 flex-col">
                        <p className="text-xs text-white font-medium">
                          {status.label}
                        </p>
                        {/* <strong className="text-sm text-white">
                        {status.percentage}
                      </strong> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Graph statusData={statusData} />
            </div>
          </section>
        )}

        <section className="w-full bg-cardColor p-4 rounded-md">
          {/* <h1 className="text-2xl font-bold mb-6 text-center">
            Students Applied For Internship Through Website
          </h1> */}
          <div className="mb-4 flex md:justify-between flex-col md:flex-row gap-y-5">
            <SearchBar
              className="w-full md:w-2/4 "
              inputStyles="bg-darkInput text-white"
              placeholder="Search..."
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
              iconSize={25}
              iconStyles="text-white/70"
            />
            {/* filter btn  */}
            <select
              className=" text-white  font-semibold py-2 px-4 rounded-md bg-darktableOddRows outline-none border-none"
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="">Sort Data Status</option>
              <option value="select-status">Not Selected Status</option>
              <option value="dnp">Dnp</option>
              <option value="registered">Registered</option>
              <option value="interested">Interested</option>
              <option value="not-interested">Not Interested</option>
              <option value="follow-up">Follow Up</option>
              <option value="second-follow-up">Second Follow Up</option>
            </select>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-full  w-full">
              <div className="flex flex-col items-center gap-6 text-white w-full">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
                <p className="text-lg font-semibold">Loading, please wait...</p>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full rounded-lg">
                {/* Table Header */}
                <thead className="bg-darktableOddRows text-white text-left text-sm border-b ">
                  <tr>
                    <th className="px-5 py-4 text-nowrap">S No.</th>
                    <th className="px-5 py-4 text-nowrap">Submitted At</th>
                    <th className="px-5 py-4">Name</th>
                    <th className="px-5 py-4">Email</th>
                    <th className="px-5 py-4">Contact</th>
                    <th className="px-5 py-4">Domain</th>
                    <th className="px-5 py-4">Status</th>
                    <th className="px-5 py-4">Feedback</th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="text-sm">
                  {currentRecords.length === 0 ? (
                    <tr>
                      <td colSpan="8" className="text-center text-white py-4">
                        No Data Found
                      </td>
                    </tr>
                  ) : (
                    currentRecords.map((data, index) => (
                      <tr
                        key={data.id || index}
                        className={`border-b border-gray-300  bg-darktableOddRows even:bg-darktableEvenRows text-white`}
                      >
                        <td className="px-4 py-2">{index + 1}</td>
                        <td className="px-4 py-2">
                          {structuredDate(data?.createdAt)}
                        </td>
                        <td className="px-4 py-2 w-48 max-w-[180px] overflow-hidden text-ellipsis break-words">
                          {data?.name}
                        </td>
                        <td className="px-4 py-2 w-48 overflow-hidden  text-nowrap">
                          {data?.email}
                        </td>
                        <td className="px-4 py-2">{data?.contact}</td>
                        <td className="px-4 py-2">{data?.domain}</td>
                        <td className="px-4 py-2">
                          <select
                            className={` border border-gray-700 rounded-sm w-32 outline-none border-none text-black
                  ${selectedColors[data._id] || handleChangeColor(data?.status)}
                  transition-colors duration-200
                `}
                            name="status"
                            id={`status-${data._id}`}
                            onChange={(e) =>
                              handleStatusChange(data._id, e.target.value)
                            }
                            value={data?.status || "select-status"}
                            required
                          >
                            {options.map((option) => (
                              <option
                                key={option.value}
                                value={option.value}
                                className={`${option.bgColor} ${option.textColor}`}
                              >
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="px-4 py-2 w-64 max-w-xs">
                          <div className="h-20 overflow-y-auto text-sm overflow-x-hidden">
                            {data?.feedback}
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}

          <div className="flex w-full justify-center md:justify-end items-center md:items-end">
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 p-4">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-1.5 py-2 rounded disabled:opacity-50  text-white bg-purple  duration-200 transition-colors disabled:cursor-not-allowed"
                >
                  <FaChevronLeft />
                </button>

                {getVisiblePageNumbers().map((pageNum, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      typeof pageNum === "number"
                        ? setCurrentPage(pageNum)
                        : null
                    }
                    disabled={typeof pageNum !== "number"}
                    className={`px-3 py-1 rounded-sm ${
                      currentPage === pageNum
                        ? "bg-purple text-white"
                        : "bg-white text-black duration-200 transition-colors"
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}

                <button
                  onClick={() =>
                    setCurrentPage(Math.min(totalPages, currentPage + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="px-1.5 py-2 rounded disabled:opacity-50  text-white bg-purple  duration-200 transition-colors disabled:cursor-not-allowed"
                >
                  <FaChevronRight />
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default AppliedStudents;

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
        className={`pl-10 pr-5 py-2 w-full  outline-none border-none  rounded-md text-black ${inputStyles}`}
        {...props}
      />
    </div>
  );
};

const Cards = ({ data }) => {
  // const { label, color, percentage } = data;
  return (
    <div className="w-full min-h-24 bg-cardColor rounded-md flex justify-start items-center gap-5 p-4">
      <figure
        style={{
          backgroundColor: data?.color,
        }}
        className="w-16 h-16 flex justify-center items-center rounded-full"
      >
        <img src={NotesImage} alt="" className="w-8 h-8" />
      </figure>
      <div className="flex flex-col gap-1 text-white text-sm">
        <p className="text-base font-semibold text-white/70">{data?.label}</p>
        <p className="font-semibold text-xl">{data?.percentage}</p>
      </div>
    </div>
  );
};

const Graph = ({ statusData }) => {
  const percentage = statusData?.map((status) => status?.percentage);
  const allLables = statusData?.map((status) => status?.label);
  const allColors = statusData?.map((status) => status?.color);

  const data = {
    labels: [...allLables],
    datasets: [
      {
        label: "Value",
        data: [...percentage],
        backgroundColor: [...allColors],
        borderColor: [...allColors],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="w-full h-full md:h-2/3 flex justify-center items-center p-2">
      <Bar
        data={data}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "none",
            },
          },
          scales: {
            x: {
              grid: {
                color: "#606060",
                display: false,
              },
              ticks: {
                display: true,
                color: "#FFFFFF",
                font: {
                  size: 10,
                },
              },
            },
            y: {
              grid: {
                color: "#606060",
              },
              ticks: {
                display: true,
                color: "#FFFFFF",
                font: {
                  size: 10,
                },
              },
            },
          },
        }}
      />
    </div>
  );
};
