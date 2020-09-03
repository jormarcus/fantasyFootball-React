import {
  SET_DEFENSE_LIST,
  SET_PLAYER_LISTS,
  SET_PLAYERS_BY_POSITION
} from '../actions/playerActions';

const initialState = {
  playersList: [],
  overall: [],
  quarterbacks: [],
  runningbacks: [],
  widereceivers: [],
  tightends: [],
  kickers: [],
  defense: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PLAYER_LISTS:
      return {
        ...state,
        playersList: action.playerList,
        overall: action.overall,
        quarterbacks: action.quarterbacks,
        runningbacks: action.runningbacks,
        widereceivers: action.wideReceivers,
        tightends: action.tightEnds,
        kickers: action.kickers
      };
    case SET_PLAYERS_BY_POSITION:
      const newState = { ...state };
      newState[action.position] = action.playersByPos;
      return newState;
    case SET_DEFENSE_LIST:
      return {
        ...state,
        defense: action.defense
      };
    default:
      return state;
  }
}
