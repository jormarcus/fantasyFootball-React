import React from 'react';
import CheatColumnPlayer from './CheatColumnPlayer';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CheatColumn = ({ className, playersByPos, title }) => {
  return (
    <div className={`cheat-col ${className}`}>
      <h5 className="cheat-col-title">{title}</h5>
      <hr className="cheat-col-hr" />
      <div>
        <ol>
          {playersByPos.map((player) => (
            <CheatColumnPlayer key={player.id} player={player} />
          ))}
        </ol>
      </div>
      <div className="load-more-icon">
        <FontAwesomeIcon icon={faAngleDoubleDown} />
      </div>
    </div>
  );
};

export default CheatColumn;
