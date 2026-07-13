import styles from "./DailyCard.module.scss";
function DailyCard({ day, icon, condition, lowTemp, highTemp }) {
  return (
    <div className={styles.dailyCard}>
      <p className={styles["dailyCard__day"]}>{day}</p>
      <div className={styles["dailyCard__condition"]}>
        <img className={styles["dailyCard__condition-icon"]} src={icon} alt="" aria-hidden="true" />
        <p className={styles["dailyCard__condition-text"]}>{condition}</p>
      </div>
      <div className={styles["dailyCard__temps"]}>
        <span className={styles["dailyCard__temp-low"]}>{lowTemp}</span>
        <span className={styles["dailyCard__temp-range"]}></span>
        <span className={styles["dailyCard__temp-high"]}>{highTemp}</span>
      </div>
    </div>
  );
}
export default DailyCard;
