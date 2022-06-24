import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3001/covid19";

export const getCovid19 = createAsyncThunk(
  "Covid19Slice/getCovid19",
  async (payload, { rejectWithValue }) => {
    let result = null;

    try {
      result = await axios.get(API_URL, {
        params: {
          date_gte: payload.date,
          date_lte: payload.date,
        },
      });

      if (result.data.faultInfo !== undefined) {
        const err = new Error();
        err.response = {
          status: 500,
          statusText: result.data.faultInfo.message,
        };
        throw err;
      }
    } catch (err) {
      result = rejectWithValue(err.response);
    }

    return result;
  }
);

const Covid19Slice = createSlice({
  name: "covid19",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getCovid19.pending]: (state, { payload }) => {
      return { ...state, loading: true };
    },
    [getCovid19.fulfilled]: (state, { payload }) => {
      return {
        data: payload?.data,
        loading: false,
        error: null,
      };
    },
    [getCovid19.rejected]: (state, { payload }) => {
      return {
        data: payload?.data,
        loading: false,
        error: {
          code: payload?.status ? payload.status : 500,
          message: payload?.statusText ? payload.statusText : "ServerError",
        },
      };
    },
  },
});

export default Covid19Slice.reducer;
