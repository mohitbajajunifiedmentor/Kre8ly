import { useEffect, useState } from "react";
import NavBar from "../../component/Admin/NavBar";
import Footer from "../../component/Footer";
import { toast } from "react-toastify";
import ApiRequest from "../../Utils/Axios/Axios";
import { useSelector } from "react-redux";

const Listing = () => {
  // const [selectedStatus, setSelectedStatus] = useState({});
  const [allStudentsData, setAllStudentsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedColors, setSelectedColors] = useState({});

  // const { auth_token } = useSelector((state) => state?.token?.token);
  const auth_token = useSelector((state) => state?.auth_token?.auth_token);

  const handleStatusChange = async (id, value) => {
    try {
      // Use the new value directly instead of accessing it from state
      if (!value) {
        toast.error("Please select a status");
        return;
      }

      const selectedOption = options.find((opt) => opt.value === value);
      setSelectedColors((prev) => ({
        ...prev,
        [id]: selectedOption.bgColor,
      }));

      await ApiRequest.put(`/admin/user/status/${id}`, {
        status: value,
      }, {
        headers: {
          "Authorization": `Bearer ${auth_token}`
        }
      });

      toast.success("Status submitted successfully");
      // getStudentsData();
    } catch (error) {
      console.error("Error submitting status:", error);
      toast.error("Failed to submit status. Please try again.");
    }
  };

  const getStudentsData = async () => {
    setIsLoading(true);
    try {
      const response = await ApiRequest.get("/user/users", {
        headers: {
          "Authorization": `Bearer ${auth_token}`
        }
      });
      if (response.status === 200) {
        if (response.status === 200) {
          const sortedData = response.data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          setAllStudentsData(sortedData);
        }
      }
    } catch (error) {
      console.error("Error fetching student data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getStudentsData();
  }, []);

  const structuredDate = (usersDate) => {
    const dateTime = new Date(usersDate);

    // Extract date components
    const year = dateTime.getUTCFullYear();
    const month = dateTime.getUTCMonth() + 1; // Months are zero-indexed
    const day = dateTime.getUTCDate();

    // Extract time components
    const hours = dateTime.getUTCHours();
    const minutes = dateTime.getUTCMinutes();
    const seconds = dateTime.getUTCSeconds();

    if (hours > 12) {
      return `${day}-${month}-${year}  ${hours}:${minutes}:${seconds} PM`;
    } else {
      return `${day}-${month}-${year}  ${hours}:${minutes}:${seconds} AM`;
    }
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

  return (
    <div>
      <NavBar />
      <div className="w-full flex-grow py-4 px-4 md:px-10 h-full min-h-screen">
        <main className="container mx-auto">
          <section className="w-full text-white">
            <h1 className="text-2xl font-bold mb-6 text-center">
              Students Applied For Internship Through Website
            </h1>

            {isLoading ? (
              <div className="flex justify-center items-center h-full w-full">
                <div className="flex flex-col items-center gap-6 text-white w-full">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
                  <p className="text-lg font-semibold">
                    Loading, please wait...
                  </p>
                </div>
              </div>
            ) : (
              <div className="overflow-x-auto ">
                <table className="min-w-full bg-white rounded-lg table-fixed">
                  <thead>
                    <tr className="bg-custom-gradient text-white text-left ">
                      <th className="px-2 py-2">S No.</th>
                      <th className="px-2 py-2">Submitted At</th>
                      <th className="px-2 py-2 w-48 max-w-[200px]">Name</th>
                      <th className="px-2 py-2 w-48 max-w-[200px]">Email</th>
                      <th className="px-2 py-2">Contact</th>
                      <th className="px-2 py-2">Domain</th>
                      <th className="px-14 py-2 ">Status</th>
                      {/* <th className="px-2 py-2">Action</th> */}
                      <th className="px-2 py-2">Feedback</th>
                    </tr>
                  </thead>

                  <tbody>
                    {allStudentsData.length === 0 ? (
                      <tr>
                        <td colSpan="9" className="text-center text-black py-4">
                          No Data Found
                        </td>
                      </tr>
                    ) : (
                      allStudentsData.map((data, index) => (
                        <tr
                          key={data.id || index}
                          className="text-black border-b border-gray-700"
                        >
                          <td className="px-2 py-2">{index + 1}</td>
                          <td className="px-2 py-2">
                            {structuredDate(data?.createdAt)}
                          </td>
                          <td className="px-2 py-2 w-48 max-w-[180px] overflow-hidden text-ellipsis break-words">
                            {data?.name}
                          </td>
                          <td className="px-2 py-2 w-48 max-w-[210px] overflow-hidden text-ellipsis break-words">
                            {data?.email}
                          </td>
                          <td className="px-2 py-2">{data?.contact}</td>
                          <td className="px-2 py-2">{data?.domain}</td>
                          <td className="px-2 py-2">
                            <select
                              className={`w-full border border-gray-700 rounded-lg ${selectedColors[data._id] ||
                                handleChangeColor(data?.status)
                                } transition-colors duration-200`}
                              name="status"
                              id={`status-${data._id}`}
                              onChange={(e) => {
                                handleStatusChange(data._id, e.target.value);
                              }}
                              defaultValue={data?.status}
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
                          {/* <td className="px-2 py-2">
                            <button
                              onClick={() => handleSubmit(data._id)}
                              className="bg-custom-gradient text-white px-2 py-2 rounded-full hover:bg-custom-card-gradient"
                            >
                              Submit
                            </button>
                          </td> */}
                          <td className="px-2 py-2 w-64 max-w-xs">
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
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Listing;
