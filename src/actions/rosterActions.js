import axios from 'axios';
import { serviceContext } from '../services/serviceContext';

export const ROSTER_TEAM_CHANGE = 'ROSTER_TEAM_CHANGE';
export const DRAFT_PLAYER = 'DRAFT_PLAYER';

const setRosterTeamChange = (team) => ({
  type: ROSTER_TEAM_CHANGE,
  team
});

export const draftPlayer = (player) => ({
  type: DRAFT_PLAYER,
  player
});

export function onRosterTeamChange(team) {
  return async (dispatch) => {
    const teamRoster = await axios.get(`${serviceContext}/roster/team`);
    console.log(teamRoster);
    dispatch(setRosterTeamChange(teamRoster));
  };
}
