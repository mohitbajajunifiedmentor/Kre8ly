import ApiRequest from "../../Utils/Axios/Axios";
import {
  fetchLinksStart,
  fetchLinksSuccess,
  fetchLinksFailure,
  addLinkSuccess,
} from "../slice";

// ✅ Get referral links
export const fetchLinks = () => async (dispatch) => {
  try {
    dispatch(fetchLinksStart());
    const res = await ApiRequest.get("/affiliate", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("affiliateToken")}`,
      },
    });
    dispatch(fetchLinksSuccess(res.data.links));
  } catch (err) {
    dispatch(fetchLinksFailure(err.response?.data?.message || err.message));
  }
};



// ✅ Create referral link
export const createLink = (courseId) => async (dispatch) => {
  try {
    const res = await ApiRequest.post(
      "/affiliate",
      { courseId },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("affiliateToken")}`,
        },
      }
    );
    dispatch(addLinkSuccess(res.data.link));
  } catch (err) {
    console.error("Error creating link:", err);
  }
};
