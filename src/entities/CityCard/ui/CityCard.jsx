import styles from "./CityCard.module.scss";
function CityCard({ country, city, condition, conditionIcon, temp }) {
  return (
    <div className={styles.cityCard}>
      <div className={styles["cityCard__location"]}>
        <span className={styles["cityCard__location-country"]}>{country}</span>
        <p className={styles["cityCard__location-city"]}>{city}</p>
        <p className={styles["cityCard__location-city-condition"]}>{condition}</p>
      </div>
      <div className={styles["cityCard__condition"]}>
        <img className={styles["cityCard__condition-icon"]} src={conditionIcon} alt="" aria-hidden="true"></img>
        <p className={styles["cityCard__condition-temp"]}>{temp}</p>
      </div>
    </div>
  );
}
export default CityCard;
