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
  genres: string[];
  cast: {
    id: number;
    name: string;
    image: {
      medium: string;
      original: string;
    };
    character: string;
  }[];
}

export interface TvShowsState {
  tvShows: TvShow[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
