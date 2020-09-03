import { SET_LOADING_STATUS } from '../actions/commonActions';

const initialState = {
  isLoading: true
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LOADING_STATUS:
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
}
