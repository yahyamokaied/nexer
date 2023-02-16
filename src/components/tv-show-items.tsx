import { TvShow } from "@/redux/tvShows/tvShowsTypes";
import styles from "@/styles/TvShowItems.module.css";
import React from "react";
import TVShowItem from "./tv-show-item";

interface TVShowItemsProps {
  tvShows: TvShow[];
  onSelectTvShow: (tvShow: TvShow) => void;
}

const TVShowItems: React.FC<TVShowItemsProps> = ({
  tvShows,
  onSelectTvShow,
}) => {
  return (
    <div className={styles.tv_show_grid_container}>
      {tvShows.map((tvShow) => (
        <TVShowItem
          key={tvShow.id}
          tvShow={tvShow}
          onSelectTvShow={onSelectTvShow}
        />
      ))}
    </div>
  );
};

export default TVShowItems;
