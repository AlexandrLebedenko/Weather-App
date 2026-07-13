import styles from "./CurrentCard.module.scss";
import windIcon from "@/assets/icons/wind.png";
function CurrentCard({ currentTemp, currentCity, currentTime, conditionIcon, condition, windSpeed, feelLikeTemp, lowTemp, highTemp }) {
  return (
    <div className={styles.currentCard}>
      <div className={styles["currentCard__header"]}>
        <span className={styles["currentCard__temp"]}>{currentTemp}</span>
        <div className={styles["currentCard__location"]}>
          <h1 className={styles["currentCard__city"]}>{currentCity}</h1>
          <span className={styles["currentCard__time"]}>{currentTime}</span>
        </div>
      </div>
      <div className={styles["currentCard__body"]}>
        <div className={styles["currentCard__body-item"]}>
          <img className={styles["currentCard__condition-icon"]} src={conditionIcon} alt="" aria-hidden="true" />
          <span className={styles["currentCard__condition-text"]}>{condition}</span>
        </div>
        <div className={styles["currentCard__body-item"]}>
          <img className={styles["currentCard__wind-icon"]} src={windIcon} alt="" aria-hidden="true" />
          <span className={styles["currentCard__wind-speed"]}>{windSpeed}</span>
        </div>
      </div>
      <div className={styles["currentCard__detail"]}>
        <p className={styles["currentCard__detail-feels-like"]}>
          Feel like: <span>{feelLikeTemp}</span>
        </p>
        <p className={styles["currentCard__detail-range"]}>
          {lowTemp}
          <span> to </span>
          {highTemp}
        </p>
      </div>
    </div>
  );
}
export default CurrentCard;
