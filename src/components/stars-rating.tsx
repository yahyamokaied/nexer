import styles from "@/styles/starsRating.module.css";
import { FC } from "react";

export interface RatingProps {
  average: number;
}

const starsRating: FC<RatingProps> = ({ average = 0 }) => {
  const totalStars = 10;
  const stars = Array(totalStars)
    .fill(null)
    .map((_, index) => {
      const isFilled = index < Math.round(average);
      return (
        <div key={index} className={styles.star}>
          <img
            className={styles.logo}
            src={isFilled ? "/filled_star.svg" : "/outlined_star.svg"}
            alt="star"
          />
        </div>
      );
    });

  return <div className={styles.stars}>{stars}</div>;
};

export default starsRating;
