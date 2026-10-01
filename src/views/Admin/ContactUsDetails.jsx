import React, { useEffect, useState, useCallback } from "react";
import NavBar from "../../component/Admin/NavBar";
import Footer from "../../component/Footer";
import ApiRequest from "../../Utils/Axios/Axios";
import { toast } from "react-toastify";
import { MdDelete } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import ContactUsPieGraph from "../../component/Graphs/ContactUsPieGraph";
import DashboardLayout from "../../component/DashboardLayout/DashboardLayout";
import {
  useGetAllContactsQuery,
  useUpdateContactStatusMutation,
} from "../../Redux-setup/api";
import { useDispatch, useSelector } from "react-redux";
import { setContactData } from "../../Redux-setup/slice";
import ToggleComponent from "../../component/MicroComponents/ToggleComponent";
const ContactUsDetails = () => {
  const {
    data: contactData,
    isLoading,
    error: contactError,
  } = useGetAllContactsQuery();
  const dispatch = useDispatch();
  const contactFromRedux = useSelector(
    (state) => state.fetchedData.contactData
  );

  // const [isLoading, setIsLoading] = useState(true);
  // const [contactData, setContactData] = useState([]);
  const [deletingId, setDeletingId] = useState(null);
  const [selectedColors, setSelectedColors] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [finalStudentData, setFinalStudentData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 20;
  const [toggle, setToggle] = useState(true);
  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;
  const currentRecords = finalStudentData?.slice(startIndex, endIndex);
  const totalPages = Math.ceil(
    (finalStudentData?.length || 0) / recordsPerPage
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  useEffect(() => {
    if (contactData && (!contactFromRedux || contactFromRedux.length === 0)) {
      const sortedContactData = [...contactData].sort(
        (a, b) => new Date(b?.createdAt) - new Date(a?.createdAt)
      );
      dispatch(setContactData(sortedContactData));
    }
  }, [contactData, dispatch, contactFromRedux]);

  // const totalCount = contactData?.length || 0;
  // console.log(totalCount);

  // const fetchData = useCallback(async () => {
  //   try {
  //     setIsLoading(true);
  //     const response = await ApiRequest.get("/contact/all-contacts");
  //     if (response.status === 200) {
  //       // sort data by time
  //       const sortedData = response?.data.sort(
  //         (a, b) => new Date(b?.createdAt) - new Date(a?.createdAt)
  //       );
  //       // console.log(sortedData);
  //       setContactData(sortedData);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching contact data:", error);
  //     toast.error("Failed to fetch contact data. Please try again.");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }, []);

  // const handleDelete = async (id) => {
  //   try {
  //     setDeletingId(id);
  //     const response = await ApiRequest.delete(`/contact/contact/${id}`);
  //     if (response.status === 200) {
  //       toast.success("Contact deleted successfully!");
  //       await fetchData();
  //     }
  //   } catch (error) {
  //     console.error("Error deleting contact:", error);
  //     toast.error("Failed to delete contact. Please try again.");
  //   } finally {
  //     setDeletingId(null);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

  const [updateContactStatus] = useUpdateContactStatusMutation();

  const handleStatusChange = async (id, value) => {
    try {
      // Use the new value directly instead of accessing it from state
      // if (!value) {
      //   toast.error("Please select a status");
      //   return;
      // }

      // console.log(id, value);

      if (!value) {
        toast.error("Please select a status");
        return;
      }

      const selectedOption = options.find((opt) => opt.value === value);
      setSelectedColors((prev) => ({
        ...prev,
        [id]: selectedOption.bgColor,
      }));

      // const response = await ApiRequest.put(`/contact/contact/${id}`, {
      //   status: value,
      // });
      await updateContactStatus({ id, status: value }).unwrap();

      setContactData((prevData) =>
        prevData.map((student) =>
          student._id === id ? { ...student, status: value } : student
        )
      );

      const updatedContactData = contactFromRedux?.map((contact) =>
        contact?._id === id ? { ...contact, status: value } : contact
      );
      dispatch(setContactData(updatedContactData));

      toast.success("Status submitted successfully");
    } catch (error) {
      console.error("Error submitting status:", error);
      toast.error("Failed to submit status. Please try again.");
    }
  };

  const options = [
    {
      value: "select-status",
      label: "Select Status",
      bgColor: "bg-gray-50",
      textColor: "black",
    },
    {
      value: "pending",
      label: "Pending",
      bgColor: "bg-yellow-500",
      textColor: "white",
    },
    {
      value: "resolved",
      label: "Resolved",
      bgColor: "bg-green-500",
      textColor: "white",
    },
    {
      value: "rejected",
      label: "Rejected",
      bgColor: "bg-red-500",
      textColor: "white",
    },
  ];

  const handleChangeColor = (value) => {
    const selectedColor = options.find((opts) => opts.value === value);
    if (selectedColor) {
      return selectedColor?.bgColor;
    }
  };

  function filterData(allStudentsData, searchValue) {
    if (!searchValue) return allStudentsData;

    const searchValueLower = searchValue.toLowerCase();

    return allStudentsData.filter((data) => {
      return [data?.name, data?.email]
        .filter(Boolean) // Removes undefined/null values
        .some((field) => field.toLowerCase().includes(searchValueLower));
    });
  }

  function filterByStatus(arr, selectedStatus) {
    return selectedStatus
      ? arr.filter((field) => field.status === selectedStatus)
      : arr;
  }

  useEffect(() => {
    let processedData = filterData(contactFromRedux, searchValue);
    processedData = filterByStatus(processedData, selectedStatus);
    setFinalStudentData(processedData);
  }, [searchValue, selectedStatus, contactFromRedux]);

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

  const toggleComponent = () => {
    setToggle(!toggle);
  };

  return (
    <DashboardLayout>
      <main className="container mx-auto flex flex-col gap-4">
        {/* <h1 className="text-3xl font-bold text-white mb-8 text-center">
            Contact Details
          </h1> */}
        <ToggleComponent toggleComponent={toggleComponent} toggle={toggle} />

        {toggle && <ContactUsPieGraph data={contactFromRedux} />}

        <div className="my-4 flex md:justify-between flex-col md:flex-row gap-y-5 ">
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
            <option value="select-status">Select Status</option>
            <option value="pending">Pending</option>
            <option value="resolved">Resolved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <div className="flex flex-col items-center gap-6 text-white">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
              <p className="text-lg font-semibold">Loading, please wait...</p>
            </div>
          </div>
        ) : !currentRecords ? (
          <p className="text-center text-xl text-primary py-10">
            No contact data found.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full rounded-lg">
              <thead className="bg-darktableOddRows text-white text-left text-sm border-b ">
                <tr>
                  <th className="px-5 py-4">S No.</th>
                  <th className="px-5 py-4">Name</th>
                  <th className="px-5 py-4">Email</th>
                  <th className="px-5 py-4">Created At</th>
                  <th className="px-5 py-4">Description</th>
                  <th className="px-5 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {currentRecords.map((data, index) => (
                  <tr
                    key={data._id}
                    className="border-b border-gray-300  bg-darktableOddRows even:bg-darktableEvenRows text-white"
                  >
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{data.name}</td>
                    <td className="px-4 py-2">{data.email}</td>
                    <td className="px-4 py-2">{formatDate(data.createdAt)}</td>
                    <td className="px-2 py-2 w-64 max-w-xs">
                      <div className="max-h-20 overflow-y-auto  overflow-x-hidden text-sm">
                        {data.description}
                      </div>
                    </td>
                    <td className="px-4 py-2">
                      <div className="flex items-center gap-2">
                        {/* <button
                          onClick={() => handleDelete(data._id)}
                          disabled={deletingId === data._id}
                          className=" text-red-600 hover:text-red-400 px-4 py-2 rounded-full disabled:opacity-50"
                        >
                        
                          <MdDelete size={20} className="text-inherit" />
                        </button> */}

                        <select
                          name="status"
                          id="status"
                          onChange={(e) =>
                            handleStatusChange(data._id, e.target.value)
                          }
                          defaultValue={data?.status}
                          className={`border border-gray-700 rounded-sm w-32 outline-none border-none text-black ${selectedColors[data._id] ||
                            handleChangeColor(data?.status)
                            } transition-colors duration-200`}
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
                      </div>
                    </td>
                  </tr>
                ))}
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
                    typeof pageNum === "number" ? setCurrentPage(pageNum) : null
                  }
                  disabled={typeof pageNum !== "number"}
                  className={`px-3 py-1 rounded-sm ${currentPage === pageNum
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
      </main>
    </DashboardLayout>
  );
};

export default ContactUsDetails;

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
        className={`pl-10 pr-5 py-2 w-full outline-none border-none  rounded-md text-black ${inputStyles}`}
        {...props}
      />
    </div>
  );
};
