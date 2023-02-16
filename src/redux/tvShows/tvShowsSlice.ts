import { createSlice } from "@reduxjs/toolkit";
import { searchTvShows } from "./tvShowsApi";
import { TvShowsState } from "./tvShowsTypes";

const initialState: TvShowsState = {
  tvShows: [],
  status: "idle",
  error: null,
};

export const tvShowsSlice = createSlice({
  name: "tvShows",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchTvShows.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchTvShows.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tvShows = action.payload;
      })
      .addCase(searchTvShows.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export default tvShowsSlice.reducer;
