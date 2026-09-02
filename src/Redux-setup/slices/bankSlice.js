// src/redux/slices/bankSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// Was "../../utils/axios" — lowercase, and no such file exists. The real
// instance (baseURL + auth interceptors) lives at src/Utils/Axios/Axios.js.
import axios from "../../Utils/Axios/Axios";

// 1. Add/Update Bank
export const saveBankDetails = createAsyncThunk(
  "bank/saveBankDetails",
  async (bankData, { rejectWithValue }) => {
    try {
      const res = await axios.post("/bank", bankData);
      return res.data.bank;
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || err.message);
    }
  }
);

// 2. Fetch Bank Details
export const fetchBankDetails = createAsyncThunk(
  "bank/fetchBankDetails",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("/bank/me");
      return res.data.bank;
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || err.message);
    }
  }
);

const bankSlice = createSlice({
  name: "bank",
  initialState: {
    details: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Save Bank
      .addCase(saveBankDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(saveBankDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.details = action.payload;
      })
      .addCase(saveBankDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch Bank
      .addCase(fetchBankDetails.fulfilled, (state, action) => {
        state.details = action.payload;
      });
  },
});

export default bankSlice.reducer;
