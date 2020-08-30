import { getUser } from './userActions';

export function loadInitialData() {
  console.log('loading initial data');

  return async (dispatch) => {
    dispatch(getUser());
  };
}
