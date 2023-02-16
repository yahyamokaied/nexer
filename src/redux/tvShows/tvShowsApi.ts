import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const mainPath = "https://api.tvmaze.com";

export const searchTvShows = createAsyncThunk(
  "SEARCH_TV_SHOWS",
  async (searchQuery: string) => {
    try {
      const response = await axios.get(
        `${mainPath}/search/shows?q=${searchQuery}`
      );
      return response.data.map((result: any) => result.show);
    } catch (error) {
      console.error(error);
      throw new Error("Failed to search for TV shows");
    }
  }
);
