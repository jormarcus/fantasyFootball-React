import { DRAFT_PLAYER, ROSTER_TEAM_CHANGE } from '../actions/rosterActions';

const initialState = {
  selectedTeam: null,
  qb: null,
  rb1: null,
  rb2: null,
  wr1: null,
  wr2: null,
  te: null,
  flex1: null,
  flex2: null,
  bench1: null,
  bench2: null,
  bench3: null,
  bench4: null,
  bench5: null,
  kicker: null,
  defense: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ROSTER_TEAM_CHANGE:
      return {
        ...state,
        selectedTeam: action.team,
        qb: action.qb,
        rb1: action.rb1,
        rb2: action.rb2,
        wr1: action.wr1,
        wr2: action.wr2,
        te: action.te,
        flex1: action.flex1,
        flex2: action.flex2,
        bench1: action.bench1,
        bench2: action.bench2,
        bench3: action.bench3,
        bench4: action.bench4,
        bench5: action.bench5,
        kicker: action.kicker,
        defense: action.defense
      };
    case DRAFT_PLAYER:
      return {
        ...state,
        playersList: action.player
      };
    default:
      return state;
  }
}
