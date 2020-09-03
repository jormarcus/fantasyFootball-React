import axios from "axios";
import history from "../history";
import { authServiceContext, serviceContext } from "../services/serviceContext";

/**
 * ACTIONS
 */
export const SET_USER = "SET_USER";
export const REMOVE_USER = "REMOVE_USER";

/**
 * ACTION CREATORS
 */
export const setUser = (user) => ({ type: SET_USER, user });
const removeUser = () => ({ type: REMOVE_USER });

function formatUserDTO({ username, first_name, last_name, email }) {
  return {
    userName: username,
    firstName: first_name ? first_name : "",
    lastName: last_name ? last_name : "",
    email: email ? email : "",
  };
}

/**
 * THUNK CREATORS
 */

export function signIn(username, password) {
  return async (dispatch) => {
    let res;
    try {
      res = await axios.post(`${authServiceContext}/auth/`, {
        username,
        password,
      });
    } catch (authError) {
      return dispatch(setUser({ error: authError }));
    }

    try {
      dispatch(setUser(formatUserDTO(res.data)));
      localStorage.setItem("token", res.data["token"]);
      console.log(res.data["token"]);
      history.push("/");
    } catch (dispatchOrHistoryErr) {
      console.error(dispatchOrHistoryErr);
    }
  };
}

export async function getUser(dispatch) {
  try {
    const res = await axios.get(`${serviceContext}/user/`);
    dispatch(setUser(res.data));
  } catch (err) {
    console.error(err);
  }
}

export function signUp(username, password, first_name, last_name, email) {
  return async (dispatch) => {
    let res;
    try {
      res = await axios.post(`${serviceContext}/user/`, {
        username,
        password,
        first_name,
        last_name,
        email,
      });
    } catch (authError) {
      return dispatch(setUser({ error: authError }));
    }

    try {
      dispatch(setUser(formatUserDTO(res.data)));
      history.push("/");
    } catch (dispatchOrHistoryErr) {
      console.error(dispatchOrHistoryErr);
    }
  };
}

export const logout = () => async (dispatch) => {
  try {
    await axios.post("/auth/logout");
    dispatch(removeUser());
    history.push("/login");
  } catch (err) {
    console.error(err);
  }
};
