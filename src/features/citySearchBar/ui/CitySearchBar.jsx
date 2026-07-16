import styles from "./CitySearchBar.module.scss";
import searchIcon from "@/assets/icons/Search.svg";
function CitySearchBar({ value, onChange }) {
  return (
    <label className={styles.searchbar}>
      <img src={searchIcon} alt="search icon" />
      <input type="text" name="searchbar" id="searchbar" placeholder="Search city...." value={value} onChange={(e) => onChange(e.target.value)} />
    </label>
  );
}
export default CitySearchBar;
