import React, { useEffect, useState } from "react";
import { Link } from "@/lib/router-compat";
import { toast } from "react-toastify";
import { MdDelete, MdEdit } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import DashboardLayout from "../../component/DashboardLayout/DashboardLayout";
import {
  useDeleteUserByIdMutation,
  useGetAllUsersQuery,
} from "../../Redux-setup/api";
import { setUsersData } from "../../Redux-setup/slice";

const SuperAdmin = () => {
  const [showDelete, setShowDelete] = useState(false);
  const [getUserId, setGetUserId] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [finalData, setFinalData] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);

  const dispatch = useDispatch();
  const usersData = useSelector((state) => state?.fetchedData?.usersData);

  const {
    data: allUsersData,
    isLoading,
    isError,
    refetch: refetchData,
  } = useGetAllUsersQuery();

  const [deleteUserById] = useDeleteUserByIdMutation();

  // Filter data based on search value
  useEffect(() => {
    if (usersData) {
      let data = usersData;
      if (searchValue) {
        data = usersData.filter(
          (item) =>
            (item?.name || "")
              .toLowerCase()
              .includes(searchValue.toLowerCase()) ||
            (item?.email || "")
              .toLowerCase()
              .includes(searchValue.toLowerCase())
        );
      }
      setFinalData(data);
    } else {
      setFinalData([]);
    }
  }, [usersData, searchValue]);

  // Initialize users data in Redux store
  useEffect(() => {
    if (
      allUsersData &&
      Array.isArray(allUsersData) &&
      (!usersData || usersData?.length === 0)
    ) {
      try {
        const sortedUsersData = [...allUsersData].sort(
          (a, b) => new Date(b?.createdAt || 0) - new Date(a?.createdAt || 0)
        );
        dispatch(setUsersData(sortedUsersData));
      } catch (error) {
        console.error("Error sorting users data:", error);
        dispatch(setUsersData(allUsersData));
      }
    }
  }, [allUsersData, usersData, dispatch]);

  // Refetch data if needed
  useEffect(() => {
    if (!usersData || isError) {
      refetchData();
    }
  }, [usersData, isError, refetchData]);

  const handleDelete = (id) => {
    if (id) {
      setGetUserId(id);
      setShowDelete(true);
    } else {
      toast.error("Invalid user ID");
    }
  };

  const handleFinalDelete = async () => {
    if (!getUserId) {
      toast.error("Invalid user ID");
      return false;
    }

    try {
      setIsDeleting(true);
      await deleteUserById(getUserId)
        .unwrap()
        .then(() => {
          // Update local state
          if (usersData && Array.isArray(usersData)) {
            const updatedUsersData = usersData.filter(
              (item) => item?._id !== getUserId
            );
            dispatch(setUsersData(updatedUsersData));
          }
          toast.success("User deleted successfully!");
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
          toast.error(error?.data?.message || "Failed to delete user");
        });
    } catch (error) {
      console.error("Error in deletion process:", error);
      toast.error("Something went wrong");
    } finally {
      setIsDeleting(false);
      setShowDelete(false);
    }
  };

  const handleCancel = () => {
    setShowDelete(false);
    toast.info("Delete cancelled");
  };

  // Display error message if data fetching fails
  if (isError) {
    return (
      <DashboardLayout>
        <div className="container mx-auto min-h-[calc(100vh-64px)]">
          <div className="flex justify-center items-center h-40 w-full text-white">
            <p className="text-lg">
              Failed to load users. Please try again later.
            </p>
            <button
              className="ml-4 bg-progressBarColor px-4 py-2 rounded-md"
              onClick={() => refetchData()}
            >
              Retry
            </button>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="container mx-auto min-h-[calc(100vh-64px)]">
        <section className="w-full text-white">
          <div className="my-4 flex md:justify-between flex-col md:flex-row gap-y-5">
            <SearchBar
              className="w-full md:w-2/4"
              inputStyles="bg-darkInput text-white"
              placeholder="Search by name or email..."
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
              iconSize={25}
              iconStyles="text-white/70"
            />
            <Link to="/addmembers">
              <button className="bg-progressBarColor text-white py-2 px-4 rounded-md hover:bg-progressBarColor/80 border-none w-full md:w-48 flex justify-center items-center gap-4">
                Add Members <FaPlus />
              </button>
            </Link>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-40 w-full">
              <div className="flex flex-col items-center gap-6 text-white">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
                <p className="text-lg font-semibold">Loading, please wait...</p>
              </div>
            </div>
          ) : !finalData || finalData.length === 0 ? (
            <div className="flex justify-center items-center h-40 w-full text-white">
              <p className="text-lg">
                {searchValue ? "No matching users found" : "No users available"}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg">
                <thead>
                  <tr className="bg-darktableOddRows text-white text-left">
                    <th className="px-4 py-4">S No.</th>
                    <th className="px-4 py-4">Name</th>
                    <th className="px-4 py-4">Email</th>
                    <th className="px-4 py-4">Role</th>
                    <th className="px-4 py-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {finalData.map((data, index) => (
                    <tr
                      key={data?._id || index}
                      className="text-white even:bg-darktableOddRows bg-darktableEvenRows"
                    >
                      <td className="px-4 py-4">{index + 1}</td>
                      <td className="px-4 py-4 capitalize">
                        {data?.name || "N/A"}
                      </td>
                      <td className="px-4 py-4">{data?.email || "N/A"}</td>
                      <td className="px-4 py-4">{data?.role || "N/A"}</td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-4">
                          <Link
                            to={`/addmembers/${data?._id}`}
                            aria-label={`Edit ${data?.name || "user"}`}
                          >
                            <MdEdit className="text-[#7a78e8] text-2xl cursor-pointer hover:text-[#3432a0c8]" />
                          </Link>

                          <button
                            onClick={() => handleDelete(data?._id)}
                            aria-label={`Delete ${data?.name || "user"}`}
                            disabled={isDeleting}
                          >
                            <MdDelete className="text-red-500 text-2xl cursor-pointer hover:text-red-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>

      {showDelete && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={handleCancel}
          ></div>
          <div className="bg-white text-black rounded-xl p-6 z-10 max-w-md w-full mx-4">
            <p className="text-lg md:text-xl mb-4 text-center">
              Are you sure you want to delete this user?
            </p>
            <div className="flex justify-center gap-4">
              <button
                className="bg-white border-2 border-green-500 w-24 py-2 rounded-full font-semibold hover:bg-green-600 text-green-700 hover:text-white transition-colors"
                onClick={handleCancel}
                disabled={isDeleting}
              >
                No
              </button>
              <button
                className="bg-white border-2 border-red-500 w-24 py-2 rounded-full font-semibold hover:bg-red-600 text-red-700 hover:text-white transition-colors"
                onClick={handleFinalDelete}
                disabled={isDeleting}
              >
                {isDeleting ? "Deleting..." : "Yes"}
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default SuperAdmin;

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
      <CiSearch
        size={iconSize}
        className={`absolute left-2 top-2 text-gray-800 ${iconStyles}`}
      />
      <input
        type="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`pl-10 pr-5 py-2 w-full outline-none border-none rounded-md text-black ${inputStyles}`}
        {...props}
      />
    </div>
  );
};
