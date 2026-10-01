import React, { useState, useEffect, useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  LabelList,
} from "recharts";
import { Filter, ChevronLeft, ChevronRight, X } from "lucide-react";
import DashboardLayout from "../../component/DashboardLayout/DashboardLayout";
import {
  useGetFootfallTrackerQuery,
  useGetFootfallTrackerByTypeQuery,
} from "../../Redux-setup/api";

const ClicksAdmin = () => {
  const [filters, setFilters] = useState({
    aggregationType: "daily", // Default aggregation type
    location: "",
    startDate: "",
    endDate: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCurrentPage(1); // Reset to first page on filter/search change
  }, [filters, searchTerm]);

  const {
    data: getFootfallTracker,
    isLoading: loadingFootfall,
    refetch: refetchFootfall,
  } = useGetFootfallTrackerQuery({
    page: currentPage,
    limit: itemsPerPage,
    startDate: filters.startDate,
    endDate: filters.endDate,
    location: filters.location,
    search: searchTerm,
  });

  // console.log("Footfall Tracker Data:", getFootfallTracker);

  // Fetch aggregated data by type
  const {
    data: getFootfallTrackerByType,
    isLoading: loadingAggregated,
    refetch: refetchAggregated,
  } = useGetFootfallTrackerByTypeQuery(filters.aggregationType);

  // Apply client-side filtering
  // const filteredData = useMemo(() => {
  //   if (!getFootfallTracker?.data) return [];

  //   let filtered = [...getFootfallTracker.data];

  //   // Apply location filter (case-insensitive partial match)
  //   if (filters.location) {
  //     filtered = filtered.filter((item) =>
  //       item.location?.toLowerCase().includes(filters.location.toLowerCase())
  //     );
  //   }

  //   // Apply date range filter
  //   if (filters.startDate) {
  //     filtered = filtered.filter(
  //       (item) => new Date(item.timestamp) >= new Date(filters.startDate)
  //     );
  //   }
  //   if (filters.endDate) {
  //     filtered = filtered.filter(
  //       (item) =>
  //         new Date(item.timestamp) <= new Date(filters.endDate + "T23:59:59")
  //     );
  //   }

  //   // Apply search filter
  //   if (searchTerm) {
  //     const search = searchTerm.toLowerCase();
  //     filtered = filtered.filter(
  //       (item) =>
  //         item.page?.toLowerCase().includes(search) ||
  //         item.location?.toLowerCase().includes(search) ||
  //         item.userAgent?.toLowerCase().includes(search)
  //     );
  //   }

  //   // Sort by timestamp
  //   filtered = filtered.sort(
  //     (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
  //   );

  //   return filtered;
  // }, [getFootfallTracker, filters, searchTerm]);

  // Get aggregated data for charts
  const aggregatedData = useMemo(() => {
    return getFootfallTrackerByType?.data || [];
  }, [getFootfallTrackerByType]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page when filters change
  };

  const clearFilters = () => {
    setFilters({
      aggregationType: "daily",
      location: "",
      startDate: "",
      endDate: "",
    });
    setSearchTerm("");
    setCurrentPage(1);
  };

  // Refetch aggregated data when aggregation type changes
  useEffect(() => {
    refetchAggregated();
  }, [filters.aggregationType, refetchAggregated]);

  const currentItems = getFootfallTracker?.data || [];
  const totalPages = getFootfallTracker?.pagination?.totalPages || 1;
  const uniquePages = getFootfallTracker?.uniquePagesSlugs || [];
  // console.log("Unique Pages Slugs:", uniquePages);

  const handlePageChange = (e) => {
    // const slug = e.target.value;
    setSearchTerm(e.target.value);
    setCurrentPage(1);

    // if (slug) navigate(`/pages/${slug}`);
  };

  if (loadingFootfall || loadingAggregated) {
    return (
      <DashboardLayout>
        <div className="flex flex-col justify-center items-center h-screen gap-3">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-t-transparent border-white"></div>
          <p className="text-white font-semibold text-xl">
            Loading please wait...
          </p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Footfall Analytics
                </h1>
              </div>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Bar Chart */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Footfall Trends ({filters.aggregationType})
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={aggregatedData.slice(-15)}
                  margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey={
                      filters.aggregationType === "daily"
                        ? "date"
                        : filters.aggregationType === "weekly"
                        ? "week"
                        : filters.aggregationType === "hourly"
                        ? "hour"
                        : "month"
                    }
                    tick={{ fontSize: 12 }}
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis />
                  <Tooltip
                    formatter={(value, name) => [value, "Visitors"]}
                    labelFormatter={(label) =>
                      `${filters.aggregationType}: ${label}`
                    }
                  />
                  <Bar dataKey="count" fill="#3B82F6" maxBarSize={40}>
                    <LabelList dataKey="count" position="top" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Line Chart */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Growth Pattern
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={aggregatedData.slice(-15)}
                  margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey={
                      filters.aggregationType === "daily"
                        ? "date"
                        : filters.aggregationType === "weekly"
                        ? "week"
                        : filters.aggregationType === "hourly"
                        ? "hour"
                        : "month"
                    }
                    tick={{ fontSize: 12 }}
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis />
                  <Tooltip
                    formatter={(value, name) => [value, "Visitors"]}
                    labelFormatter={(label) =>
                      `${filters.aggregationType}: ${label}`
                    }
                  />
                  <Line
                    type="monotone"
                    dataKey="count"
                    stroke="#10B981"
                    strokeWidth={2}
                    dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Filter size={20} className="text-gray-600" />
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
              </div>
              <button
                onClick={clearFilters}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Clear All Filters
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Date
                </label>
                <input
                  type="date"
                  value={filters.startDate}
                  onChange={(e) =>
                    handleFilterChange({
                      ...filters,
                      startDate: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Date
                </label>
                <input
                  type="date"
                  value={filters.endDate}
                  onChange={(e) =>
                    handleFilterChange({ ...filters, endDate: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Enter location..."
                  value={filters.location}
                  onChange={(e) =>
                    handleFilterChange({ ...filters, location: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Aggregation
                </label>
                <select
                  value={filters.aggregationType}
                  onChange={(e) => {
                    handleFilterChange({
                      ...filters,
                      aggregationType: e.target.value,
                    });
                  }}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="daily">Daily</option>
                  <option value="hourly">Hourly</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
            </div>
          </div>

          {/* Data Table */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="md:flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Footfall Records
                </h3>
                {/* Total Count */}
                <div className="text-sm text-gray-600">
                  Total Records:{" "}
                  {getFootfallTracker?.pagination?.totalCount || 0}
                </div>
              </div>
              <div className="md:flex items-center gap-2">
                {/* <input
                  type="text"
                  placeholder="Search records..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                /> */}
                {/* <select
                  onChange={handlePageChange}
                  defaultValue=""
                  className="p-2 rounded-md border border-gray-300 w-64 md:w-64"
                >
                  <option value="" disabled>
                    Select a page
                  </option>
                  {uniquePages.map((page) => (
                    <option
                      key={page.id}
                      value={page.slug}
                      {...(page.slug.length > 20 ? { title: page.slug } : {})}
                    >
                      {page.slug.length > 20
                        ? `${page.slug.slice(0, 20)}...`
                        : page.slug}
                    </option>
                  ))}
                </select> */}
                <select
                  onChange={handlePageChange}
                  defaultValue=""
                  className="p-2 rounded-md border border-gray-300 w-64 md:w-64"
                >
                  <option value="" disabled>
                    Select a page
                  </option>
                  {uniquePages.map((page) => (
                    <option
                      key={page.id}
                      value={page.slug}
                      {...(page.slug.length > 20 ? { title: page.slug } : {})}
                    >
                      {page.slug.length > 20
                        ? `${page.slug.slice(0, 20)}...`
                        : page.slug}
                    </option>
                  ))}
                </select>
                <button
                  onClick={clearFilters}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  <X size={16} className="inline-block mr-1" />
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      S. No
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Timestamp
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Page
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Location
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Source
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      User Agent
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.length > 0 ? (
                    currentItems.map((item, index) => (
                      <tr
                        key={item.id || index}
                        className="border-b border-gray-100 hover:bg-gray-50"
                      >
                        <td className="py-3 px-4">
                          {(currentPage - 1) * itemsPerPage + index + 1}
                        </td>
                        <td className="py-3 px-4 text-gray-600">
                          {new Date(item.timestamp).toLocaleString()}
                        </td>
                        <td className="py-3 px-4">{item.page || "N/A"}</td>
                        <td className="py-3 px-4">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                            {item.location || "N/A"}
                          </span>
                        </td>
                        <td
                          className="py-3 px-4 text-gray-600 max-w-xs truncate"
                          title={item.referrer}
                        >
                          {item.referrer || "Direct"}
                        </td>
                        <td
                          className="py-3 px-4 text-gray-600 max-w-xs truncate"
                          title={item.userAgent}
                        >
                          {item.userAgent || "N/A"}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="5"
                        className="py-8 text-center text-gray-500"
                      >
                        No records found. Try adjusting your filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-1 px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 disabled:opacity-50"
              >
                <ChevronLeft size={16} />
                Prev
              </button>

              <div className="text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </div>

              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    prev < totalPages ? prev + 1 : prev
                  )
                }
                disabled={currentPage === totalPages}
                className="flex items-center gap-1 px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 disabled:opacity-50"
              >
                Next
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ClicksAdmin;
