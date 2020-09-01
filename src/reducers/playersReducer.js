import { SET_PLAYER_LISTS } from '../actions/playerActions';

const initialState = {
  playersList: [],
  overall: [],
  quarterbacks: [],
  runningbacks: [],
  wideReceivers: [],
  tightEnds: [],
  kickers: []
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
        wideReceivers: action.wideReceivers,
        tightEnds: action.tightEnds,
        kickers: action.kickers
      };
    default:
      return state;
  }
}
