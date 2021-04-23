import axios from "axios";
import { SET_PRODUCTS, LOADING_DATA } from "../types";

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
