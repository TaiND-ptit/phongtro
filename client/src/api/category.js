import axiosInstance from "@/libs/axios";

export const getCategories = () => axiosInstance.get(`/category`);
