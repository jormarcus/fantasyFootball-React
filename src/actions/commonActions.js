import axios from 'axios';
import { serviceContext } from '../services/serviceContext';
import { getPlayers } from './playerActions';
import { setFantasyTeams } from './rosterActions';

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
      if (res.data && res.data.length > 0) {
        res.data.forEach((team) => {
          team.key = team.id;
          team.text = team.username;
        });
      }
      dispatch(setFantasyTeams(res.data));
    } catch (err) {
      console.error(err);
    }
    dispatch(getPlayers(dispatch));
  };
}
