import { SET_USER, REMOVE_USER } from '../actions/userActions';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return action.user;
    case REMOVE_USER:
      return initialState;
    default:
      return state;
  }
}
