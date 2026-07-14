import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;
export const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  params: {
    appid: API_KEY,
    units: "metric",
    lang: "en",
  },
});
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
);
