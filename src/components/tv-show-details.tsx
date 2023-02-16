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

  console.log("yahyaa ", tvShow);

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

          <div className={styles.show_name}>{tvShow.summary}</div>

          {tvShow.cast && tvShow.cast.length > 0 && (
            <>
              <div className={styles.show_text_info}>
                <h2>Cast</h2>
              </div>
              <div className={styles.cast_container}>
                {tvShow.cast.map((item) => (
                  <div className={styles.cast_item} key={item.id}>
                    <div className={styles.cast_img_container}>
                      {item.image && (
                        <img
                          src={item.image.original}
                          className={styles.cast_img}
                        />
                      )}
                    </div>

                    <div className={styles.cast_names_container}>
                      {item.name && <h4>{item.name}</h4>}
                      {item.character && <h6>as {item.character}</h6>}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TVShowDetails;
