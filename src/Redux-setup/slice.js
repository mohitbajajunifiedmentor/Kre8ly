import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  studentData: [],
  contactData: [],
  usersData: [],
  hiringData: [],
};

const fetchedDataSlice = createSlice({
  name: "fetchedData",
  initialState,
  reducers: {
    setStudentData: (state, action) => {
      state.studentData = action.payload;
    },
    setContactData: (state, action) => {
      state.contactData = action.payload;
    },
    setUsersData: (state, action) => {
      state.usersData = action.payload;
    },
    resetUsersData: (state) => {
      state.usersData = [];
    },
    resetStudentData: (state) => {
      state.studentData = [];
    },
    resetContactData: (state) => {
      state.contactData = [];
    },
  },
});

const roleSlice = createSlice({
  name: "role",
  initialState: {
    role: localStorage.getItem("role") || null,
    userId: localStorage.getItem("userId") || null,
    cookies: localStorage.getItem("auth_token") || null,
  },
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
      try {
        localStorage.setItem("role", action.payload);
      } catch (error) {
        console.error("Error setting role in localStorage:", error);
      }
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
      try {
        localStorage.setItem("userId", action.payload);
      } catch (error) {
        console.error("Error setting userId in localStorage:", error);
      }
    },
    setCookies: (state, action) => {
      state.cookies = action.payload;
      try {
        localStorage.setItem("auth_token", action.payload);
      } catch (error) {
        console.error("Error setting auth_token in localStorage:", error);
      }
    },
    removeRole: (state) => {
      state.role = null;
      localStorage.removeItem("role");
    },
    removeUserId: (state) => {
      state.userId = null;
      localStorage.removeItem("userId");
    },
    removeCookies: (state) => {
      state.cookies = null;
      localStorage.removeItem("auth_token");
    },
  },
});

const fetchHiringSlice = createSlice({
  name: "hiringData",
  initialState,
  reducers: {
    setHiringData: (state, action) => {
      state.hiringData = action.payload;
    },
  },
});

const tokenSlice = createSlice({
  name: "auth_token",
  initialState: {
    auth_token: localStorage.getItem("auth_token") || "",
  },
  reducers: {
    setToken: (state, action) => {
      state.auth_token = action.payload;
      localStorage.setItem("auth_token", state.auth_token);
    },
    resetToken: (state) => {
      state.auth_token = "";
      localStorage.removeItem("auth_token");
    },
  },
});

const affiliateSlice = createSlice({
  name: "affiliate",
  initialState: {
    loading: false,
    dashboard: null,
    referrals: { items: [], page: 1, limit: 20, total: 0 },
    payouts: [],
    error: null,
    payoutRequestStatus: null,
    profile: null,
    bank: null,
    links: [],
    courses: [],
  },
  reducers: {
    // Dashboard
    fetchDashboardStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDashboardSuccess: (state, action) => {
      state.loading = false;
      state.dashboard = action.payload;
    },
    fetchDashboardFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Profile
    fetchProfileStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProfileSuccess: (state, action) => {
      state.loading = false;
      state.profile = action.payload;
    },
    fetchProfileFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Links
    fetchLinksStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchLinksSuccess: (state, action) => {
      state.loading = false;
      state.links = action.payload;
    },
    fetchLinksFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addLinkSuccess: (state, action) => {
      state.links.push(action.payload);
    },

    // courses
    fetchCoursesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCoursesSuccess: (state, action) => {
      state.loading = false;
      state.courses = action.payload;
    },
    fetchCoursesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Bank
    requestStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    requestSuccess: (state, action) => {
      state.loading = false;
      state.bank = action.payload;
    },
    requestFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    updateProfileStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateProfileSuccess: (state, action) => {
      state.loading = false;
      state.profile = action.payload;
    },
    updateProfileFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Referrals
    fetchReferralsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchReferralsSuccess: (state, action) => {
      state.loading = false;
      state.referrals = {
        items: action.payload.items,
        page: action.payload.page,
        limit: action.payload.limit,
        total: action.payload.total,
      };
    },
    fetchReferralsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Payouts
    fetchPayoutsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPayoutsSuccess: (state, action) => {
      state.loading = false;
      state.payouts = action.payload.payouts;
    },
    fetchPayoutsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Request payout
    requestPayoutStart: (state) => {
      state.payoutRequestStatus = "pending";
      state.error = null;
    },
    requestPayoutSuccess: (state) => {
      state.payoutRequestStatus = "success";
    },
    requestPayoutFailure: (state, action) => {
      state.payoutRequestStatus = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  requestStart,
  requestSuccess,
  requestFailure,
  fetchProfileStart,
  fetchProfileSuccess,
  fetchProfileFailure,
  updateProfileStart,
  updateProfileSuccess,
  updateProfileFailure,
  fetchLinksStart,
  fetchLinksSuccess,
  fetchLinksFailure,
  addLinkSuccess,
  fetchCoursesStart,
  fetchCoursesSuccess,
  fetchCoursesFailure,
  fetchDashboardStart,
  fetchDashboardSuccess,
  fetchDashboardFailure,
  fetchReferralsStart,
  fetchReferralsSuccess,
  fetchReferralsFailure,
  fetchPayoutsStart,
  fetchPayoutsSuccess,
  fetchPayoutsFailure,
  requestPayoutStart,
  requestPayoutSuccess,
  requestPayoutFailure,
} = affiliateSlice.actions;

export const {
  setStudentData,
  setContactData,
  setUsersData,
  resetUsersData,
  resetStudentData,
  resetContactData,
} = fetchedDataSlice.actions;

export const {
  setRole,
  setUserId,
  setCookies,
  removeRole,
  removeUserId,
  removeCookies,
} = roleSlice.actions;

export const { setHiringData } = fetchHiringSlice.actions;
export const { setToken, resetToken } = tokenSlice.actions;

export const FetchedDataReducer = fetchedDataSlice.reducer;
export const roleReducer = roleSlice.reducer;
export const tokenReducer = tokenSlice.reducer;
export const hiringReducer = fetchHiringSlice.reducer;
export const affiliateReducer = affiliateSlice.reducer;
