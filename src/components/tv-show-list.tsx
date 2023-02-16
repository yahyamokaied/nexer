import { useAppDispatch, useAppSelector } from "@/redux/store";
import { searchTvShows } from "@/redux/tvShows/tvShowsApi";
import { TvShow } from "@/redux/tvShows/tvShowsTypes";
import styles from "@/styles/TvShowList.module.css";
import { FC, useEffect } from "react";
import TVShowItems from "./tv-show-items";

interface TvShowsListProps {
  searchQuery: string;
  onSelectTvShow: (tvShow: TvShow) => void;
}

const TvShowsList: FC<TvShowsListProps> = ({ searchQuery, onSelectTvShow }) => {
  const dispatch = useAppDispatch();
  const tvShows = useAppSelector((state) => state.tvShows.tvShows);
  const searchResults = useAppSelector((state) => state.tvShows.tvShows);
  const status = useAppSelector((state) => state.tvShows.status);
  const error = useAppSelector((state) => state.tvShows.error);

  useEffect(() => {
    if (searchQuery) {
      dispatch(searchTvShows(searchQuery));
    }
  }, [dispatch, searchQuery]);

  if (status === "loading") {
    return <div className={styles.tvShowListContainer}>Loading...</div>;
  }

  if (status === "failed") {
    return <div className={styles.tvShowListContainer}>Error: {error}</div>;
  }

  const tvShowsToDisplay: TvShow[] = searchQuery ? searchResults : tvShows;

  return (
    <div className={styles.tvShowListContainer}>
      {tvShowsToDisplay.length === 0 ? (
        <div>No TV shows found.</div>
      ) : (
        <TVShowItems
          tvShows={tvShowsToDisplay}
          onSelectTvShow={onSelectTvShow}
        />
      )}
    </div>
  );
};

export default TvShowsList;
