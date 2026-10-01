// src/redux/slices/payoutSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// Was "../../utils/axios" — no such file. See src/Utils/Axios/Axios.js.
import axios from "../../Utils/Axios/Axios";

// Create payout
export const requestPayout = createAsyncThunk(
  "payout/requestPayout",
  async (amount, { rejectWithValue }) => {
    try {
      const res = await axios.post("/payouts", { amount });
      return res.data.payout;
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || err.message);
    }
  }
);

const payoutSlice = createSlice({
  name: "payout",
  initialState: {
    latest: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(requestPayout.pending, (state) => {
        state.loading = true;
      })
      .addCase(requestPayout.fulfilled, (state, action) => {
        state.loading = false;
        state.latest = action.payload;
      })
      .addCase(requestPayout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default payoutSlice.reducer;
