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
  type: string;
  genres: string[];
  cast: {
    person: {
      id: number;
      url: string;
      name: string;
      country: {
        name: string;
        code: string;
        timezone: string;
      };
      birthday: string;
      deathday: string | null;
      gender: string;
      image: {
        medium: string;
        original: string;
      };
      updated: number;
      _links: {
        self: {
          href: string;
        };
      };
    };
    character: {
      id: number;
      url: string;
      name: string;
      image: {
        medium: string;
        original: string;
      };
      _links: {
        self: {
          href: string;
        };
      };
    };
    self: boolean;
    voice: boolean;
  }[];
}

export interface TvShowsState {
  tvShows: TvShow[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
