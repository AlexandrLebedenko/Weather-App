import { useState, useEffect } from "react";
import styles from "./CityWeather.module.scss";
import CityCard from "@/entities/CityCard/ui/CityCard";
import { citySearch, getCurrentWeather, dataTransform } from "@/shared/api/weather";
import { DEFAULT_CITY_NAMES } from "@/shared/config/cities";

function CityWeather() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCitiesWeather = async () => {
      try {
        setLoading(true);
        setError(null);
        // Получаем координаты городов
        const results = await Promise.all(
          DEFAULT_CITY_NAMES.map(async (cityName) => {
            const searchResults = await citySearch(cityName);
            if (searchResults.length === 0) {
              throw new Error(`City "${cityName}" not found`);
            }
            return searchResults[0];
          }),
        );

        // Получаем погоду для каждого города
        const weatherResults = await Promise.all(
          results.map(async (city) => {
            const data = await getCurrentWeather(city.lat, city.lon);
            const transformed = dataTransform(data, city.name);
            return {
              id: city.id,
              country: city.country,
              city: transformed.currentCity,
              condition: transformed.condition,
              conditionIcon: transformed.conditionIcon,
              temp: `${transformed.currentTemp}°`,
            };
          }),
        );
        setCities(weatherResults);
      } catch (err) {
        setError(err.message || "Failed to load weather data");
      } finally {
        setLoading(false);
      }
    };

    fetchCitiesWeather();
  }, []);

  if (loading) {
    return [];
  }
  if (error) {
    return [];
  }

  return (
    <aside className={styles.cityWeather}>
      <h2 className={styles["cityWeather__title"]}>Other large cities</h2>
      <div className={styles["cityWeather__items"]}>
        {cities.map((city) => (
          <CityCard
            key={city.id}
            country={city.country}
            city={city.city}
            condition={city.condition}
            conditionIcon={city.conditionIcon}
            temp={city.temp}
          />
        ))}
      </div>
    </aside>
  );
}

export default CityWeather;
