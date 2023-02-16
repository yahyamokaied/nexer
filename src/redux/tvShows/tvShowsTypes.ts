export interface TvShow {
  id: number;
  name: string;
  summary: string;
  image: {
    medium: string;
    original: string;
  };
  rating: {
    average: number;
  };
}

export interface TvShowsState {
  tvShows: TvShow[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
