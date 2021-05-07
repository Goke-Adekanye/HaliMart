import axios from "axios";
import {
  SET_PRODUCTS,
  SET_PRODUCT,
  LOADING_DATA,
  LOADING_UI,
  STOP_LOADING_UI,
  SUBMIT_COMMENT,
  SET_ERRORS,
  CLEAR_ERRORS,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
} from "../types";

//GET PRODUCTS
export const getProducts = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/products")
    .then((res) => {
      dispatch({
        type: SET_PRODUCTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_PRODUCTS,
        payload: [],
      });
    });
};

//GET PRODUCT
export const getProduct = (productId) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get(`/product/${productId}`)
    .then((res) => {
      dispatch({
        type: SET_PRODUCT,
        payload: res.data,
      });
      dispatch({ type: STOP_LOADING_UI });
    })
    .catch((err) => {
      console.log(err);
    });
};

//COMMENT ON PRODUCT
export const submitComment = (productId, commentData) => (dispatch) => {
  axios
    .post(`product/${productId}/comment`, commentData)
    .then((res) => {
      dispatch({
        type: SUBMIT_COMMENT,
        payload: res.data,
      });
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

//ADD PRODUCT
export const addProduct = (productId) => (dispatch) => {
  axios
    .get(`/product/${productId}/add`)
    .then((res) => {
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//REMOVE PRODUCT
export const removeProduct = (productId) => (dispatch) => {
  axios
    .get(`/product/${productId}/remove`)
    .then((res) => {
      dispatch({
        type: REMOVE_PRODUCT,
        payload: productId,
      });
    })
    .catch((err) => console.log(err));
};

//CLEAR ERRORS
export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
