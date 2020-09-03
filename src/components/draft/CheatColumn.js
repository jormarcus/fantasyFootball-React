import React from "react";
import { connect } from "react-redux";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CheatColumnPlayer from "./CheatColumnPlayer";
import { getPlayersByPos } from "../../actions/playerActions";

const CheatColumn = ({ className, playersByPos, title, onLoadMorePlayers }) => {
  return (
    <div className={`cheat-col ${className}`}>
      <h5 className="cheat-col-title">{title}</h5>
      <hr className="cheat-col-hr" />
      <div>
        <ol>
          {playersByPos && playersByPos.length > 0
            ? playersByPos.map((player) => (
                <CheatColumnPlayer key={player.id} player={player} />
              ))
            : null}
        </ol>
      </div>
      <div
        className="load-more-icon"
        onClick={(title) => onLoadMorePlayers(title)}
      >
        <FontAwesomeIcon icon={faAngleDoubleDown} />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onLoadMorePlayers: (position) => {
    dispatch(getPlayersByPos(position));
  },
});

export default connect(null, mapDispatchToProps)(CheatColumn);
