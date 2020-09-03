import {
  DRAFT_PLAYER,
  ROSTER_TEAM_CHANGE,
  SET_FANTASY_TEAMS
} from '../actions/rosterActions';

const initialState = {
  fantasyTeams: [],
  selectedTeam: null,
  QB: { name: 'Lamar Jackson', team: 'Ravens', bye: 'BYE 8' },
  RB1: { name: 'Todd Gurley', team: 'Falcons', bye: 'BYE 5' },
  RB2: null,
  WR1: null,
  WR2: null,
  TE: null,
  FLEX1: null,
  FLEX2: null,
  BN: null,
  BN2: null,
  BN3: null,
  BN4: null,
  BN5: null,
  K: null,
  DEF: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_FANTASY_TEAMS:
      return {
        ...state,
        fantasyTeams: action.fantasyTeams,
        selectedTeam: action.fantasyTeams[0]
      };
    case ROSTER_TEAM_CHANGE:
      return {
        ...state,
        selectedTeam: action.team,
        QB: action.qb,
        RB1: action.rb1,
        RB2: action.rb2,
        WR1: action.wr1,
        WR2: action.wr2,
        TE: action.te,
        FLEX1: action.flex1,
        FLEX2: action.flex2,
        DEF: action.defense,
        K: action.kicker,
        BN1: action.BN1,
        BN2: action.BN2,
        BN3: action.BN3,
        BN4: action.BN4,
        BN5: action.BN5
      };
    case DRAFT_PLAYER:
      const newState = { ...state };
      newState[action.position] = action.player;
      return newState;
    default:
      return state;
  }
}
