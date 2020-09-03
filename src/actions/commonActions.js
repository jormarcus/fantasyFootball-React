import axios from 'axios';
import { serviceContext } from '../services/serviceContext';
import { getPlayers } from './playerActions';
import { setUser } from './userActions';

export const SET_LOADING_STATUS = 'SET_LOADING_STATUS';

export const setLoadingStatus = (isLoading) => ({
  type: SET_LOADING_STATUS,
  isLoading
});

export function loadInitialData() {
  console.log('loading initial data');
  return async (dispatch) => {
    try {
      const res = await axios.get(`${serviceContext}/user/`);
      dispatch(setUser(res.data));
    } catch (err) {
      console.error(err);
    }
    dispatch(getPlayers(dispatch));
  };
}
