import React from 'react';
import CheatColumnPlayer from './CheatColumnPlayer';

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
    </div>
  );
};

export default CheatColumn;
