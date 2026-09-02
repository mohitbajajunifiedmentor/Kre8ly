import ApiRequest from "../../Utils/Axios/Axios";
import {
  fetchCoursesFailure,
  fetchCoursesStart,
  fetchCoursesSuccess,
} from "../slice";

// ✅ Thunk for fetching courses
export const fetchCourses = () => async (dispatch) => {
  try {
    dispatch(fetchCoursesStart());
    const res = await ApiRequest.get("/courses", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("affiliateToken")}`,
      },
    });
    dispatch(fetchCoursesSuccess(res.data.courses));
  } catch (err) {
    dispatch(fetchCoursesFailure(err.response?.data?.message || err.message));
  }
};
