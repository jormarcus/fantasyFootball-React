import React from 'react';
import { connect } from 'react-redux';

const CheatSheat = (props) => {
  return (
    <div>
      <h3>Cheat Sheat</h3>
      <ol type="1">
        {props.players && props.players.length > 0 ?
          props.players.map((player) => (
            <li>{player.name}</li>
          ))
          : 'No players available'
        }
      </ol>
    </div>
  )
}

// store by players or players by position?
const mapStateToProps = (state) => ({
  players: state.playersReducer.playerList
});

export default connect(mapStateToProps)(CheatSheat);