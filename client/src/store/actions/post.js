import actionTypes from "./actionTypes";
import { apiGetPosts, apiGetPostsLimit } from "@/api/post";

export const getPosts = () => async (dispatch) => {
  try {
    const response = await apiGetPosts();
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_POSTS,
        data: response.data.postData,
      });
    } else {
      dispatch({
        type: actionTypes.GET_POSTS,
        data: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_POSTS,
      data: null,
    });
  }
};

export const getPostsLimit = (page) => async (dispatch) => {
  try {
    const response = await apiGetPostsLimit(page);
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_POSTS_LIMIT,
        data: response?.data?.postData?.rows,
        count: response?.data?.postData?.count,
      });
    } else {
      dispatch({
        type: actionTypes.GET_POSTS_LIMIT,
        data: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_POSTS_LIMIT,
      data: null,
    });
  }
};
