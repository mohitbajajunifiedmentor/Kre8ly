// src/store/actions/affiliateActions.js
import {
  fetchProfileStart,
  fetchProfileSuccess,
  fetchProfileFailure,
  requestFailure,
  requestStart,
  requestSuccess,
  updateProfileStart,
  updateProfileSuccess,
  updateProfileFailure,
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
} from "../slice";
import ApiRequest from "../../Utils/Axios/Axios";

// Dashboard
export const getDashboard = () => async (dispatch) => {
  try {
    dispatch(fetchDashboardStart());
    const res = await ApiRequest.get("/affiliate-dashboard/dashboard", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("affiliateToken")}`,
      },
    });

    console.log("Response Data:", res.data);

    dispatch(fetchDashboardSuccess(res.data));
  } catch (err) {
    dispatch(
      fetchDashboardFailure(err.response?.data || { message: err.message })
    );
  }
};

// Referrals
export const getReferrals =
  (page = 1, limit = 20) =>
  async (dispatch) => {
    try {
      dispatch(fetchReferralsStart());
      const res = await ApiRequest.get(
        `/affiliate-dashboard/referrals?page=${page}&limit=${limit}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("affiliateToken")}`,
          },
        }
      );
      //   console.log("Response Data:", res.data);

      dispatch(fetchReferralsSuccess(res.data));
    } catch (err) {
      dispatch(
        fetchReferralsFailure(err.response?.data || { message: err.message })
      );
    }
  };

// Payouts
export const getPayouts = () => async (dispatch) => {
  try {
    dispatch(fetchPayoutsStart());
    const res = await ApiRequest.get("/affiliate-dashboard/payouts", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("affiliateToken")}`,
      },
    });
    dispatch(fetchPayoutsSuccess(res.data));
  } catch (err) {
    dispatch(
      fetchPayoutsFailure(err.response?.data || { message: err.message })
    );
  }
};

// Request Payout
export const createPayoutRequest = () => async (dispatch) => {
  try {
    dispatch(requestPayoutStart());
    await ApiRequest.post("/affiliate-dashboard/request-payout", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("affiliateToken")}`,
      },
    });
    dispatch(requestPayoutSuccess());
  } catch (err) {
    dispatch(
      requestPayoutFailure(err.response?.data || { message: err.message })
    );
  }
};

// Fetch Profile
export const fetchProfile = (userId) => async (dispatch) => {
  try {
    dispatch(fetchProfileStart());
    const res = await ApiRequest.get(`/affiliate-auth/profile`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("affiliateToken")}`,
      },
    });
    dispatch(fetchProfileSuccess(res.data));
  } catch (err) {
    dispatch(
      fetchProfileFailure(err.response?.data || { message: err.message })
    );
  }
};

// Update Profile
export const updateProfile = (userId, profileData) => async (dispatch) => {
  try {
    dispatch(updateProfileStart());
    const res = await ApiRequest.put(`/affiliate-auth/profile`, profileData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("affiliateToken")}`,
      },
    });
    dispatch(updateProfileSuccess(res.data));
  } catch (err) {
    dispatch(
      updateProfileFailure(err.response?.data || { message: err.message })
    );
  }
};

export const fetchBankDetails = () => async (dispatch, getState) => {
  // console.log("fetchBankDetails.........");

  try {
    dispatch(requestStart());
    const res = await ApiRequest.get("/bank", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("affiliateToken")}`,
      },
    });
    // console.log("res.data", res.data);

    dispatch(requestSuccess(res.data));
  } catch (err) {
    dispatch(requestFailure(err.response?.data?.message || err.message));
  }
};

export const saveBankDetails = (data) => async (dispatch, getState) => {
  try {
    dispatch(requestStart());

    const res = await ApiRequest.post("/bank", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("affiliateToken")}`,
      },
    });

    dispatch(requestSuccess(res.data));
  } catch (err) {
    dispatch(requestFailure(err.response?.data?.message || err.message));
  }
};
