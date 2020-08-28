import axios from "axios";
import history from "../history";

/**
 * ACTIONS
 */
export const GET_USER = "GET_USER";
export const REMOVE_USER = "REMOVE_USER";

/**
 * ACTION CREATORS
 */
const getUser = (user) => ({ type: GET_USER, user });
const removeUser = () => ({ type: REMOVE_USER });

function formatUserDTO({ username, first_name, last_name, email }) {
  return {
    userName: username,
    firstName: first_name,
    lastName: last_name,
    email: email,
  };
}

/**
 * THUNK CREATORS
 */
export function auth(username, password, first_name, last_name, email) {
  return async (dispatch) => {
    let res;
    try {
      res = await axios.post("http://127.0.0.1:8000/api/user/", {
        username,
        password,
        first_name,
        last_name,
        email,
      });
    } catch (authError) {
      return dispatch(getUser({ error: authError }));
    }

    try {
      dispatch(getUser(formatUserDTO(res.data)));
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
