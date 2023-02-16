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
            <h1>{tvShow.name}</h1>
          </div>
          <div className={styles.show_stars}>
            <StarRating average={tvShow.rating.average} />
          </div>
          <div className={styles.show_name}>
            <h4>Genres: {tvShow.genres}</h4>
          </div>

          {tvShow.cast && tvShow.cast.length > 0 && (
            <>
              <div className={styles.show_text_info}>
                <h2>Cast</h2>
              </div>
              <div className={styles.cast_container}>
                {tvShow.cast.map((cast) => (
                  <div className={styles.cast_item}>
                    <div className={styles.cast_img_container}>
                      {cast.person && cast.person.image && (
                        <img
                          src={cast.person.image.original}
                          className={styles.arrow}
                        />
                      )}
                    </div>

                    <div className={styles.cast_names_container}>
                      {cast.person && <h4>{cast.person.name}</h4>}
                      {cast.character && <h6>as {cast.character.name}</h6>}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className={styles.show_text_info}>
            <h4>{tvShow.name}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVShowDetails;
