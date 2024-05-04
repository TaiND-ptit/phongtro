import axiosInstance from "@/libs/axios";

export const apiGetPosts = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosInstance({
        method: "get",
        url: "post",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetPostsLimit = (page) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosInstance({
        method: "get",
        url: `post/limit?page=${page}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
