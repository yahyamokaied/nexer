import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TvShow } from "./tvShowsTypes";

const mainPath = "https://api.tvmaze.com";

export const searchTvShows = createAsyncThunk(
  "tvShows/searchTvShows",
  async (searchQuery: string) => {
    try {
      const response = await axios.get(
        `${mainPath}/search/shows?q=${searchQuery}`
      );
      const tvShows = response.data.map((result: any) => result.show);

      // Fetch the cast for each TV show
      const tvShowsWithCast = await Promise.all(
        tvShows.map(async (tvShow: TvShow) => {
          const castResponse = await axios.get(
            `${mainPath}/shows/${tvShow.id}/cast`
          );
          const cast = castResponse.data.map((castResult: any) => ({
            id: castResult.person.id,
            name: castResult.person.name,
            character: castResult.character.name,
            image: castResult.person.image,
          }));
          return {
            ...tvShow,
            cast,
          };
        })
      );

      return tvShowsWithCast;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to search for TV shows");
    }
  }
);
