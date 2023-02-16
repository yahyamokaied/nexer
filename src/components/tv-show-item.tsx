import { TvShow } from "@/redux/tvShows/tvShowsTypes";
import styles from "@/styles/TvShowItems.module.css";
import React from "react";
import StarRating from "./stars-rating";

interface TVShowItemProps {
  tvShow: TvShow;
  onSelectTvShow: (tvShow: TvShow) => void;
}

const TVShowItem: React.FC<TVShowItemProps> = ({ tvShow, onSelectTvShow }) => {
  const handleTvShowSelect = () => {
    onSelectTvShow(tvShow);
  };

  return (
    <div className={styles.show_item} onClick={handleTvShowSelect}>
      <img
        src={tvShow.image.original}
        alt={tvShow.name}
        className={styles.show_img}
      />
      <div className={styles.show_name}>
        <h2>{tvShow.name}</h2>
      </div>
      <StarRating average={tvShow.rating.average} />
    </div>
  );
};

export default TVShowItem;
