import axios from "axios";
import {
  LOADING_UI,
  CLEAR_ERRORS,
  SET_ERRORS,
  LOADING_USER,
  SET_USER,
  INCREASE_COUNT,
  DECREASE_COUNT,
  SET_UNAUTHENTICATED,
} from "../types";

//LOGIN USER
export const loginUser = (userData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/login", userData)
    .then((res) => {
      setAuthorizationHeader(res.data.token);

      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      history.push("/");
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

//LOGOUT USER
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("FBIdToken");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHENTICATED });
};

//GET USER DATA
export const getUserData = () => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .get("/user")
    .then((res) => {
      dispatch({
        type: SET_USER,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//INCREMENT COUNT
export const incrementCount = (productId) => (dispatch) => {
  dispatch({
    type: INCREASE_COUNT,
    payload: productId,
  });
};

//DECREMENT COUNT
export const decrementCount = (productId) => (dispatch) => {
  dispatch({
    type: DECREASE_COUNT,
    payload: productId,
  });
};

//FUNCTION THAT SET_AUTHORIZATION_HEADER
const setAuthorizationHeader = (token) => {
  let FBIdToken = `Bearer ${token}`;
  localStorage.setItem("FBIdToken", FBIdToken);

  axios.defaults.headers.common["Authorization"] = FBIdToken;
};
