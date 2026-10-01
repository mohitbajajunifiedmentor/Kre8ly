import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "@/lib/config";

const baseUrl = API_BASE_URL;

const selectToken = (state) => state.auth_token.auth_token;

export const fetchApis = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = selectToken(getState()); // Get the token from the store

      // // Debugging logs
      // console.log("Token from Redux store:", token);

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["HiringData"],
  endpoints: (builder) => ({
    getAllStudents: builder.query({
      query: () => "/user/users",
    }),
    getAllContacts: builder.query({
      query: () => "/contact/all-contacts",
    }),
    getAllUsers: builder.query({
      query: () => "/admin/admins",
    }),
    updateStudentStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/admin/user/status/${id}`,
        method: "PUT",
        body: { status },
      }),
    }),
    updateContactStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/contact/contact/${id}`,
        method: "PUT",
        body: { status },
      }),
    }),
    deleteUserById: builder.mutation({
      query: (id) => ({
        url: `/admin/delete/${id}`,
        method: "DELETE",
      }),
    }),
    addMembers: builder.mutation({
      query: (formData) => ({
        url: "/admin/createAdmin",
        method: "POST",
        body: formData,
      }),
    }),
    getMembersById: builder.query({
      query: (id) => ({
        url: `/admin/admin/${id}`,
        method: "GET",
      }),
    }),
    updateMembers: builder.mutation({
      query: ({ id, ...formData }) => ({
        url: `/admin/user/${id}`,
        method: "PUT",
        body: formData,
      }),
    }),
    createHiringData: builder.mutation({
      query: (formData) => ({
        url: "/hiring",
        method: "POST",
        body: formData,
      }),
    }),
    getHiringData: builder.query({
      query: () => "/hiring",
      providesTags: ["HiringData"],
    }),
    updateHiringData: builder.mutation({
      query: ({ id, ...formData }) => ({
        url: `/hiring/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["HiringData"],
    }),
    createTracker: builder.mutation({
      query: (formData) => ({
        url: "/footfall/track",
        method: "POST",
        body: formData,
      }),
    }),
    getFootfallTracker: builder.query({
      query: ({
        page = 1,
        limit = 10,
        startDate,
        endDate,
        location,
        search,
      } = {}) => ({
        url: "/footfall/total",
        method: "GET",
        params: {
          page,
          limit,
          ...(startDate && { startDate }),
          ...(endDate && { endDate }),
          ...(location && { location }),
          ...(search && { search }),
        },
      }),
    }),
    getFootfallTrackerByType: builder.query({
      query: (type) => ({
        url: `/footfall/aggregate/${type}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllStudentsQuery,
  useGetAllContactsQuery,
  useGetAllUsersQuery,
  useUpdateStudentStatusMutation,
  useUpdateContactStatusMutation,
  useDeleteUserByIdMutation,
  useAddMembersMutation,
  useGetMembersByIdQuery,
  useUpdateMembersMutation,
  useGetHiringDataQuery,
  useUpdateHiringDataMutation,
  useCreateHiringDataMutation,
  useCreateTrackerMutation,
  useGetFootfallTrackerQuery,
  useGetFootfallTrackerByTypeQuery,
} = fetchApis;
