import config from "@/config";
import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: config.API_DOMAIN,
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
    Accept: "application/json; charset=UTF-8",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    Object.assign(config, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    switch (error?.response.status) {
      case 401:
        Cookies.remove("token");
        window.location.href = config.SSO_DOMAIN;
        return Promise.reject(error);
      case 403:
        window.location.replace("/page-not-access");
        return Promise.reject(error);
      case 404:
        window.location.replace("/page-not-found");
        return Promise.reject(error);
      default:
        return Promise.reject(error);
    }
  }
);

instance.interceptors.response.use();

export default instance;
