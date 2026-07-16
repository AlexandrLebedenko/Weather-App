import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;
const WEATHER_BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL;
const GEO_BASE_URL = import.meta.env.VITE_GEO_BASE_URL;
export const weatherClient = axios.create({
  baseURL: WEATHER_BASE_URL,
  timeout: 10000,
  params: {
    appid: API_KEY,
    units: "metric",
    lang: "en",
  },
});
export const geoClient = axios.create({
  baseURL: GEO_BASE_URL,
  timeout: 10000,
  params: {
    appid: API_KEY,
    limit: 5,
  },
});
const onResponse = (response) => response.data;
const onError = (error) => {
  return Promise.reject(error);
};
weatherClient.interceptors.response.use(onResponse, onError);
geoClient.interceptors.response.use(onResponse, onError);
