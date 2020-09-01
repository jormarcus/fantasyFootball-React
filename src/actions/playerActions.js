import axios from 'axios';
import { serviceContext } from '../services/serviceContext';

export const SET_PLAYER_LISTS = 'SET_PLAYER_LISTS';

const setPlayerList = (
  playerList,
  overall,
  quarterbacks,
  runningbacks,
  wideReceivers,
  tightEnds,
  kickers
) => ({
  type: SET_PLAYER_LISTS,
  playerList,
  overall,
  quarterbacks,
  runningbacks,
  wideReceivers,
  tightEnds,
  kickers
});

export function getPlayers() {
  return async (dispatch) => {
    const token = sessionStorage.getItem('token');
    try {
      const res = await axios.get(`${serviceContext}/player/`, {
        Authorization: token
      });
      if (res.data) {
        const players = res.data;
        const overall = [];
        const quarterbacks = [];
        const runningbacks = [];
        const wideReceivers = [];
        const tightEnds = [];
        const kickers = [];
        for (const player of players) {
          switch (player.position) {
            case 'QB':
              if (quarterbacks.length < 25) {
                quarterbacks.push(player);
              }
              if (overall.length < 25) {
                // only should push the top 25 ranked
                overall.push(player);
              }
              break;
            case 'RB':
              if (runningbacks.length < 25) {
                runningbacks.push(player);
              }
              break;
            case 'WR':
              if (wideReceivers.length < 25) {
                wideReceivers.push(player);
              }
              break;
            case 'TE':
              if (tightEnds.length < 25) {
                tightEnds.push(player);
              }
              break;
            case 'K':
              if (kickers.length < 25) {
                kickers.push(player);
              }
              break;
            default:
              break;
          }
        }
        dispatch(
          setPlayerList(
            res.data,
            overall,
            quarterbacks,
            runningbacks,
            wideReceivers,
            tightEnds,
            kickers
          )
        );
      }
    } catch (err) {
      console.error(err);
    }
  };
}
