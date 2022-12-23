import {
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_REGISTER_FAILURE,
  AUTH_REGISTER_REQUEST,
  AUTH_REGISTER_SUCCESS,
} from "./actionTypes";

import axios from "axios";

export const authRegister = (data) => async (dispatch) => {
  // console.log("data:", data);
  try {
    dispatch({ type: AUTH_REGISTER_REQUEST });

    const res = await axios.post(
      "https://techhubbackend-production.up.railway.app/user/signup",
      // "https://trendy-vibes-backend-production.up.railway.app/user/register",
      {
        email: data.email,
        username: data.name,
        password: data.password,
      }
    );
    // console.log("res: ", res);

    dispatch({
      type: AUTH_REGISTER_SUCCESS,
      payload: {
        message: res.data.response,
      },
    });
  } catch (error) {
    dispatch({
      type: AUTH_REGISTER_FAILURE,
      payload: {
        message: error.response.data.response,
      },
    });
  }
};

export const authLogin = (data) => async (dispatch) => {
  // console.log("data: ", data);
  try {
    dispatch({ type: AUTH_LOGIN_REQUEST });

    const res = await axios.post(
      "https://techhubbackend-production.up.railway.app/user/login",
      // "https://trendy-vibes-backend-production.up.railway.app/user/login",
      data
    );
    // console.log("res: ", res);
    localStorage.setItem("user_name", res.data.userName);

    dispatch({
      type: AUTH_LOGIN_SUCCESS,
      payload: {
        token: res.data.token,
        message: res.data.token,
        user: res.data.user,
      },
    });
  } catch (error) {
    // console.log("error: ", error);

    dispatch({
      type: AUTH_LOGIN_FAILURE,
      payload: {
        message: error.response.data.response,
      },
    });
  }
};
