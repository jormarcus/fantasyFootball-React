import {
  SET_DEFENSE_LIST,
  SET_PLAYER_LISTS,
  SET_PLAYERS_BY_POSITION,
  SET_QUARTERBACKS,
  SET_WIDERECEIVERS,
  SET_TIGHTENDS,
  SET_KICKERS,
  SET_DEFENSE,
  SET_RUNNINGBACKS,
} from "../actions/playerActions";

const initialState = {
  playersList: [],
  overall: [],
  quarterbacks: [],
  runningbacks: [],
  widereceivers: [],
  tightends: [],
  kickers: [],
  defense: [],
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
        kickers: action.kickers,
        widereceivers: action.widereceivers,
        tightends: action.tightends,
        kickers: action.kickers,
        defense: action.defense,
      };
    case SET_QUARTERBACKS:
      return {
        ...state,
        quarterbacks: action.quarterbacks,
      };
    case SET_RUNNINGBACKS:
      return {
        ...state,
        runningbacks: action.runningbacks,
      };
    case SET_WIDERECEIVERS:
      return {
        ...state,
        widereceivers: action.widereceivers,
      };
    case SET_TIGHTENDS:
      return {
        ...state,
        tightends: action.tightends,
      };
    case SET_KICKERS:
      return {
        ...state,
        kickers: action.kickers,
      };
    case SET_DEFENSE:
      return {
        ...state,
        defense: action.defense,
      };
    case SET_PLAYERS_BY_POSITION:
      const newState = { ...state };
      newState[action.position] = action.playersByPos;
      return newState;
    case SET_DEFENSE_LIST:
      return {
        ...state,
        defense: action.defense,
      };
    default:
      return state;
  }
}
