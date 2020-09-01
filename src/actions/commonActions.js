import { getUser } from './userActions';
import { getPlayers } from './playerActions';

export function loadInitialData() {
  console.log('loading initial data');
  return async (dispatch) => {
    const user = dispatch(await getUser(dispatch));
    console.log(user);
    dispatch(await getPlayers(dispatch));
  };
}
