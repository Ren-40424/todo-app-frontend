import axios from "axios";
import { useAuthStore } from "@/stores/auth";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const authStore = useAuthStore();
  if (authStore.idToken) {
    config.headers.Authorization = `Bearer ${authStore.idToken}`;
  }
  return config;
});

export default api;
