import styles from "./HourlyCard.module.scss";
function HourlyCard({ time, icon, condition, temp }) {
  return (
    <div className={styles.hourlyCard}>
      <p className={styles["hourlyCard__time"]}>{time}</p>
      <div className={styles["hourlyCard__condition"]}>
        <img className={styles["hourlyCard__condition-icon"]} src={icon} alt="" aria-hidden="true" />
        <p className={styles["hourlyCard__condition-text"]}>{condition}</p>
      </div>
      <p className={styles["hourlyCard__temp"]}>{temp}</p>
    </div>
  );
}
export default HourlyCard;
