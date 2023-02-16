import { TvShow } from "@/redux/tvShows/tvShowsTypes";
import styles from "@/styles/TvShowDetails.module.css";
import React from "react";
import StarRating from "./stars-rating";

interface TVShowDetailsProps {
  tvShow: TvShow;
  onSelectTvShow: (tvShow: TvShow | null) => void;
}

const TVShowDetails: React.FC<TVShowDetailsProps> = ({
  tvShow,
  onSelectTvShow,
}) => {
  const handleBackArrow = () => {
    onSelectTvShow(null);
  };

  return (
    <div className={styles.show_details}>
      <div className={styles.back_container}>
        <div className={styles.back_arrow_container} onClick={handleBackArrow}>
          <img src="/arrow.svg" className={styles.arrow} />
        </div>
        <div className={styles.back_text_container}>
          <h2>Back to search results</h2>
        </div>
      </div>

      <div className={styles.show_container}>
        <div className={styles.photo_container}>
          <img
            src={tvShow.image.original}
            alt={tvShow.name}
            className={styles.show_img}
          />
        </div>

        <div className={styles.details_container}>
          <div className={styles.show_name}>
            <h2>{tvShow.name}</h2>
          </div>
          <StarRating average={tvShow.rating.average} />
        </div>
      </div>
    </div>
  );
};

export default TVShowDetails;
