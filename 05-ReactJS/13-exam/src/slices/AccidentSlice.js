import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAccidentList = createAsyncThunk(
  "AccidentSlice/getAccidentList",
  async (payload, { rejectWithValue }) => {
    let result = null;

    try {
      result = await axios.get("http://localhost:3001/traffic_acc", {
        params: {
          year: payload,
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

const AccidentSlice = createSlice({
  name: "accident",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getAccidentList.pending]: (state, { payload }) => {
      return { ...state, loading: true };
    },
    [getAccidentList.fulfilled]: (state, { payload }) => {
      return {
        data: payload?.data,
        loading: false,
        error: null,
      };
    },
    [getAccidentList.rejected]: (state, { payload }) => {
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

export default AccidentSlice.reducer;
