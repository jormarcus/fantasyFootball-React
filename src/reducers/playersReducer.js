import { SET_PLAYERS_LIST } from '../actions/playerActions';

const initialState = {
  playersList: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PLAYERS_LIST:
      return {
        ...state,
        playersList: action.playerList
      }
    default:
      return state
  }
}