import { useEffect, useState } from "react";
import DashboardLayout from "../../component/DashboardLayout/DashboardLayout";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { toast } from "react-toastify";
import {
  useGetAllContactsQuery,
  useGetAllStudentsQuery,
  useGetAllUsersQuery,
} from "../../Redux-setup/api";
import { useDispatch, useSelector } from "react-redux";
import {
  setContactData,
  setStudentData,
  setUsersData,
} from "../../Redux-setup/slice";
import { FaPlus } from "react-icons/fa";
import { Link } from "@/lib/router-compat";

ChartJS.register(ArcElement, Tooltip, Legend);

const DashboardHome = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("blogs");

  // Redux selectors
  const studentData = useSelector((state) => state?.fetchedData.studentData);
  const contactData = useSelector((state) => state?.fetchedData.contactData);
  const role = useSelector((state) => state.role?.role);
  const allUsersData = useSelector((state) => state?.fetchedData?.usersData);
  const token = useSelector((state) => state?.auth_token?.auth_token);

  // console.log("TOKEN", token);

  // RTK Query hooks with proper dependencies
  const {
    isLoading: studentLoading,
    error: studentError,
    data: students,
  } = useGetAllStudentsQuery();

  // console.log("STUDENTS", students);

  const {
    isLoading: contactLoading,
    error: contactError,
    data: contacts,
  } = useGetAllContactsQuery();

  const isSuperAdmin = role === "superadmin";
  const {
    data: usersData,
    isLoading: usersDataLoading,
    isError: usersDataError,
  } = useGetAllUsersQuery(undefined, { skip: !isSuperAdmin });

  // Helper functions
  const contactDataCount = contactData?.length || 0;

  const getData = (data, filterName) => {
    return Array.isArray(data)
      ? data.filter((item) => item?.status === filterName).length
      : 0;
  };

  const calculatePercentage = (total, count) => {
    if (total === 0) return 0;
    const percentage = (count / total) * 100;
    return Math.round(percentage);
  };

  // Process data once when it's available
  useEffect(() => {
    try {
      // Only dispatch if new data is available and current data is empty
      if (
        students &&
        Array.isArray(students) &&
        (!studentData || studentData.length === 0)
      ) {
        const sortedStudentData = [...students].sort(
          (a, b) => new Date(b?.createdAt || 0) - new Date(a?.createdAt || 0)
        );
        dispatch(setStudentData(sortedStudentData));
      }
    } catch (error) {
      console.error("Error processing student data:", error);
    }
  }, [students, dispatch, studentData]);

  useEffect(() => {
    try {
      if (
        contacts &&
        Array.isArray(contacts) &&
        (!contactData || contactData.length === 0)
      ) {
        const sortedContactData = [...contacts].sort(
          (a, b) => new Date(b?.createdAt || 0) - new Date(a?.createdAt || 0)
        );
        dispatch(setContactData(sortedContactData));
      }
    } catch (error) {
      console.error("Error processing contact data:", error);
    }
  }, [contacts, dispatch, contactData]);

  useEffect(() => {
    try {
      if (
        usersData &&
        Array.isArray(usersData) &&
        (!allUsersData || allUsersData.length === 0)
      ) {
        const sortedUsersData = [...usersData].sort(
          (a, b) => new Date(b?.createdAt || 0) - new Date(a?.createdAt || 0)
        );
        dispatch(setUsersData(sortedUsersData));
      }
    } catch (error) {
      console.error("Error processing users data:", error);
    }
  }, [usersData, dispatch, allUsersData]);

  // Handle errors
  useEffect(() => {
    if (studentError) {
      toast.error("Failed to load student data");
      console.error("Student data error:", studentError);
    }
    if (contactError) {
      toast.error("Failed to load contact data");
      console.error("Contact data error:", contactError);
    }
    if (usersDataError && isSuperAdmin) {
      toast.error("Failed to load users data");
      console.error("Users data error:", usersDataError);
    }
  }, [studentError, contactError, usersDataError, isSuperAdmin]);

  // Prepare card data
  const cardsInfo = [
    {
      title: "Resolved",
      count: getData(contactData, "resolved"),
      percentage: calculatePercentage(
        contactDataCount,
        getData(contactData, "resolved")
      ),
    },
    {
      title: "Pending",
      count: getData(contactData, "pending"),
      percentage: calculatePercentage(
        contactDataCount,
        getData(contactData, "pending")
      ),
    },
    {
      title: "Rejected",
      count: getData(contactData, "rejected"),
      percentage: calculatePercentage(
        contactDataCount,
        getData(contactData, "rejected")
      ),
    },
    {
      title: "No Action",
      count: getData(contactData, "select-status"),
      percentage: calculatePercentage(
        contactDataCount,
        getData(contactData, "select-status")
      ),
    },
  ];

  // Prepare status data
  const statusData = [
    {
      label: "Total",
      color: "#2171b5",
      percentage: studentData.length || 0,
    },
    {
      label: "No Action",
      color: "#9E9E9E",
      percentage: getData(studentData, "select-status"),
    },
    {
      label: "Follow Up",
      color: "#A5F3FC",
      percentage: getData(studentData, "follow-up"),
    },
    {
      label: "Second Follow Up",
      color: "#06B6D4",
      percentage: getData(studentData, "second-follow-up"),
    },
    {
      label: "Registered",
      color: "#4ADE80",
      percentage: getData(studentData, "registered"),
    },
    {
      label: "Interested",
      color: "#16A34A",
      percentage: getData(studentData, "interested"),
    },
    {
      label: "DNP",
      color: "#FB923C",
      percentage: getData(studentData, "dnp"),
    },
    {
      label: "Not Interested",
      color: "#EE5D50",
      percentage: getData(studentData, "not-interested"),
    },
  ];

  const handleChangeTab = (tab) => {
    setActiveTab(tab);
  };

  const isLoading =
    studentLoading || contactLoading || (isSuperAdmin && usersDataLoading);

  return (
    <DashboardLayout>
      {isLoading ? (
        <div className="flex justify-center  items-center min-h-[calc(100vh-80px)]">
          <div className="flex flex-col items-center gap-6 text-white">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
            <p className="text-lg font-semibold">Loading, please wait...</p>
          </div>
        </div>
      ) : (
        <div className="w-full h-full container mx-auto">
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-x-5 items-stretch">
            {/* Left Section */}
            <div className="w-full h-full flex flex-col">
              <h1 className="text-white pb-2 font-semibold">
                Contact Requests Overview
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
                {cardsInfo.map((card, index) => (
                  <Cards key={index} card={card} />
                ))}
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full h-full flex flex-col">
              <h4 className="text-white pb-2 font-semibold">
                Students Applied Overview
              </h4>
              <div className="bg-cardColor flex flex-col justify-center items-center p-4 gap-2 rounded-md h-full shadow-md">
                {/* Graph Section */}
                <div className="w-full flex justify-center items-center flex-grow">
                  <Graph statusData={statusData} />
                </div>

                {/* Status Summary */}
                <div className="bg-graphBackground py-4 w-full rounded-md px-4">
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
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full md:h-60 flex flex-col md:flex-row justify-start gap-4 items-center my-4">
            {/* left */}
            {role === "superadmin" && (
              <div className="w-full md:w-3/4 h-60 md:h-full bg-graphBackground flex justify-center items-start shadow-md rounded-md flex-col relative overflow-hidden">
                <div className="w-40 h-44 bg-progressBarColor/30 rounded-full absolute -top-[6.5rem] right-0" />
                <div className="w-40 h-44 bg-progressBarColor/40 rounded-full absolute -bottom-[6.5rem] -left-16" />
                <div className="flex justify-between items-center w-full px-4 py-2 relative z-10">
                  <h1 className="text-lg font-semibold text-white">Users</h1>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 bg-progressBarColor p-2 text-sm rounded-md text-white">
                      Add User <FaPlus />
                    </button>
                    <Link
                      to={"/members"}
                      className="flex items-center gap-1 border border-progressBarColor p-2 text-sm text-white rounded-md"
                    >
                      View All
                    </Link>
                  </div>
                </div>
                <hr className="w-full bg-slate-50/50 relative z-10" />
                <div className="w-full overflow-x-auto relative z-10 no-scrollbar">
                  <table className="w-full shadow-lg">
                    <thead>
                      <tr className="bg-blue-500 text-white text-sm">
                        <th className="text-center p-2">S No.</th>
                        <th className="text-left p-2">Name</th>
                        <th className="text-left p-2">Email</th>
                        <th className="text-left p-2">Role</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allUsersData && allUsersData.length > 0 ? (
                        allUsersData.map((user, i) => (
                          <tr
                            key={user?._id || i}
                            className="w-full h-full text-white text-sm font-light"
                          >
                            <td className="p-2 text-center">{i + 1}.</td>
                            <td className="p-2 capitalize">
                              {user?.name || "N/A"}
                            </td>
                            <td className="p-2">{user?.email || "N/A"}</td>
                            <td className="p-2">{user?.role || "N/A"}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td
                            colSpan="4"
                            className="p-4 text-center text-white"
                          >
                            No users available
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* right */}
            {/* <div className="w-full md:w-1/4 h-60 md:h-full bg-white/10 flex justify-start items-start shadow-md rounded-md flex-col overflow-x-auto">
              <div className="pt-3 w-full bg-graphBackground flex justify-start items-end px-4 gap-4 rounded-t-md ">
                <button
                  className={`${activeTab === "blogs"
                    ? "bg-progressBarColor"
                    : "bg-transparent"
                    } px-4 py-3 text-sm rounded-t-md text-white`}
                  onClick={() => handleChangeTab("blogs")}
                >
                  All Blogs
                </button>
                <button
                  className={`${activeTab === "categories"
                    ? "bg-progressBarColor"
                    : "bg-transparent"
                    } px-4 py-3 text-sm rounded-t-md text-white `}
                  onClick={() => handleChangeTab("categories")}
                >
                  Categories
                </button>
              </div>
              <div className="w-full h-full p-5">
                {activeTab === "blogs" ? (
                  <div className="flex justify-between items-start flex-col gap-2 w-full h-full">
                    <h2 className="text-base text-white">Total Blogs Added</h2>
                    <h3 className="text-4xl text-white font-semibold"></h3>
                    <button className="flex items-center gap-1 border border-progressBarColor p-2 text-sm text-white rounded-md">
                      View All
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-between items-start flex-col gap-2 w-full h-full">
                    <h2 className="text-base text-white">
                      Total Categories Added
                    </h2>
                    <h3 className="text-4xl text-white font-semibold">4</h3>
                    <button className="flex items-center gap-1 border border-progressBarColor p-2 text-sm text-white rounded-md">
                      View All
                    </button>
                  </div>
                )}
              </div>
            </div> */}
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

const Cards = ({ card }) => {
  const { title, count, percentage } = card;
  return (
    <div className="w-full h-full min-h-36 bg-cardColor rounded-lg flex justify-start items-start flex-col gap-2 shadow-md relative group cursor-pointer">
      <div className="flex justify-start items-start flex-col gap-2 p-5">
        <h2 className="text-base text-white">{title}</h2>
        <h3 className="text-3xl text-white font-semibold">{count}</h3>
      </div>
      <span className="w-full h-px bg-white/50 rounded-full" />

      {/* Progress bar */}
      <div className="w-full flex justify-center items-center p-5 relative">
        <div className="bg-white rounded-full w-full h-2 relative">
          <span
            style={{
              width: `${percentage}%`,
            }}
            className="bg-progressBarColor rounded-full h-full absolute inset-0"
          />

          <ToolTip
            toolTipHeadClass={`absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            percentage={percentage}
          />
        </div>
      </div>
    </div>
  );
};

const ToolTip = ({ toolTipHeadClass, percentage }) => {
  return (
    <div
      style={{
        left: `calc(${percentage}% - 20px)`,
      }}
      className={`${toolTipHeadClass}`}
    >
      {/* Create a square */}
      <div className="relative inline-block">
        <div className="h-8 w-10 bg-darkBackground/80 rounded-md flex justify-center items-center text-white shadow-md">
          {percentage}%
        </div>
        {/* Triangle */}
        <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-darkBackground/80 mx-auto shadow-md"></div>
      </div>
    </div>
  );
};

const Graph = ({ statusData }) => {
  // Prevent errors if statusData is undefined or empty
  if (!statusData || !Array.isArray(statusData) || statusData.length === 0) {
    return (
      <div className="w-full h-full max-h-[190px] flex justify-center items-center text-white">
        No data available
      </div>
    );
  }

  // Extract data safely
  const percentages = statusData.map((status) => status?.percentage || 0);
  const labels = statusData.map((status) => status?.label || "Unknown");
  const colors = statusData.map((status) => status?.color || "#CCCCCC");

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Value",
        data: percentages,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="w-full h-full max-h-[190px] flex justify-center items-center">
      <Pie
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "none",
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return `${context.label}: ${context.raw}`;
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default DashboardHome;
