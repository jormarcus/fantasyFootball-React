import axios from 'axios';
import { serviceContext } from '../services/serviceContext';

export const ROSTER_TEAM_CHANGE = 'ROSTER_TEAM_CHANGE';
export const DRAFT_PLAYER = 'DRAFT_PLAYER';
export const SET_FANTASY_TEAMS = 'SET_FANTASY_TEAMS';

const setRosterTeamChange = (team) => ({
  type: ROSTER_TEAM_CHANGE,
  team
});

export const draftPlayer = (player) => ({
  type: DRAFT_PLAYER,
  player
});

export const setFantasyTeams = (fantasyTeams) => ({
  type: SET_FANTASY_TEAMS,
  fantasyTeams
});

export function onRosterTeamChange(team) {
  return async (dispatch) => {
    const token = localStorage.getItem('token');
    const teamRoster = await axios.get(
      `${serviceContext}/player/?user=${team.id}`,
      {
        headers: {
          Authorization: `token ${token}`
        }
      }
    );

    console.log(teamRoster);
    dispatch(setRosterTeamChange(teamRoster));
  };
}
