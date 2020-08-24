import axios from 'axios'
import history from '../history'

/**
 * ACTIONS
 */
export const GET_USER = 'GET_USER';
export const REMOVE_USER = 'REMOVE_USER';

/**
 * ACTION CREATORS
 */
const getUser = user => ({ type: GET_USER, user })
const removeUser = () => ({ type: REMOVE_USER })


/**
 * THUNK CREATORS
 */
export function auth(userName, password) {
  return async (dispatch) => {
    let res
    try {
      res = await axios.post(`/auth`, { userName, password })
    } catch (authError) {
      return dispatch(getUser({ error: authError }))
    }

    try {
      dispatch(getUser(res.data))
      history.push('/home')
    } catch (dispatchOrHistoryErr) {
      console.error(dispatchOrHistoryErr)
    }
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}