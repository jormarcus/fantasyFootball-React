import axios from "axios";
import { serviceContext } from "../services/serviceContext";
import { setLoadingStatus } from "./commonActions";

export const SET_PLAYER_LISTS = "SET_PLAYER_LISTS";
export const SET_DEFENSE_LIST = "SET_DEFENSE_LIST";
export const SET_PLAYERS_BY_POSITION = "SET_PLAYERS_BY_POSITION";
export const SET_QUARTERBACKS = "SET_QUARTERBACKS";
export const SET_RUNNINGBACKS = "SET_RUNNINGBACKS";
export const SET_WIDERECEIVERS = "SET_WIDERECEIVERS";
export const SET_TIGHTENDS = "SET_TIGHTENDS";
export const SET_KICKERS = "SET_KICKERS";
export const SET_DEFENSE = "SET_DEFENSE";

function setQuarterbackList(quarterbacks) {
  return {
    type: SET_QUARTERBACKS,
    quarterbacks,
  };
}
const setRunningbacks = (runningbacks) => ({
  type: SET_RUNNINGBACKS,
  runningbacks,
});

function setWidereceivers(wideReceivers) {
  return {
    type: SET_QUARTERBACKS,
    wideReceivers,
  };
}
function setTightends(tightends) {
  return {
    type: SET_QUARTERBACKS,
    tightends,
  };
}
function setKickers(kickers) {
  return {
    type: SET_QUARTERBACKS,
    kickers,
  };
}
function setDEFENSE(defense) {
  return {
    type: SET_QUARTERBACKS,
    defense,
  };
}

const setPlayerList = (
  playerList,
  overall,
  quarterbacks,
  runningbacks,
  widereceivers,
  tightends,
  kickers
) => ({
  type: SET_PLAYER_LISTS,
  playerList,
  overall,
  quarterbacks,
  runningbacks,
  widereceivers,
  tightends,
  kickers,
});

const setDefenseList = (defense) => ({
  type: SET_DEFENSE_LIST,
  defense,
});

const setPlayersByPos = (playersByPos, position) => ({
  type: SET_PLAYERS_BY_POSITION,
  playersByPos,
  position,
});

export function getPlayers() {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    console.log(token);
    try {
      const res = await axios.get(`${serviceContext}/player/`, {
        headers: {
          Authorization: `token ${token}`,
        },
      });
      if (res.data) {
        const players = res.data;
        const overall = [];
        const quarterbacks = [];
        const runningbacks = [];
        const widereceivers = [];
        const tightends = [];
        const kickers = [];
        for (const player of players) {
          switch (player.position) {
            case "QB":
              if (quarterbacks.length < 25) {
                quarterbacks.push(player);
              }
              if (overall.length < 25) {
                // only should push the top 25 ranked
                overall.push(player);
              }
              break;
            case "RB":
              if (runningbacks.length < 25) {
                runningbacks.push(player);
              }
              break;
            case "WR":
              if (widereceivers.length < 25) {
                widereceivers.push(player);
              }
              break;
            case "TE":
              if (tightends.length < 25) {
                tightends.push(player);
              }
              break;
            case "K":
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
            widereceivers,
            tightends,
            kickers
          )
        );
        dispatch(setLoadingStatus(false));
      }
    } catch (err) {
      console.error(err);
    }
  };
}

export function getPlayersByPos(position, startIndex = 0, chunkSize = 25) {
  return async (dispatch, getState) => {
    position = position.toLowerCase();
    const token = localStorage.getItem("token");
    const playerState = getState().playersReducer;
    startIndex =
      playerState[position] && Array.isArray(playerState[position])
        ? playerState[position].length
        : 0;
    try {
      const res = await axios.get(
        `${serviceContext}/player/${position}?startIndex=${startIndex}?chunkSize=${chunkSize}`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );

      if (res.data) {
        dispatch(setPlayersByPos(res.data, position));
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function getDefenseList() {
  return async (dispatch) => {
    try {
      const token = sessionStorage.getItem("token");
      const res = await axios.get(`${serviceContext}/defense`, {
        headers: {
          Authorization: `token ${token}`,
        },
      });

      if (res.data) {
        dispatch(setDefenseList(res.data));
      }
    } catch (error) {
      console.log(error);
    }
  };
}
