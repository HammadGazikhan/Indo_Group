import axios from "axios";
import Cookies from "js-cookie";
import { generateCorrelationId } from "./correlationId";
console.log("API Base URL →", process.env.REACT_APP_API_URL);

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use((config) => {
  const token = typeof window !== "undefined" ? Cookies.get("token") : null;

  // ✅ Add correlation ID
  config.headers["X-Correlation-ID"] = generateCorrelationId();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
