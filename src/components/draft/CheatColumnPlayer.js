import React from 'react';
import { Link } from 'react-router-dom';
import {
  DetailsList,
  HoverCard,
  initializeIcons,
  mergeStyleSets
} from '@fluentui/react';

initializeIcons();

const classNames = mergeStyleSets({
  compactCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  expandedCard: {
    padding: '16px 24px'
  },
  item: {
    selectors: {
      '&:hover': {
        textDecoration: 'underline',
        cursor: 'pointer'
      }
    }
  }
});

// const buildColumn = (players) => {
//   return buildColumns(players).filter(
//     (player) => player.name === 'location'
//   );
// };

// const columns = buildColumn();

const onRenderCompactCard = (player) => {
  return (
    <div className={classNames.compactCard}>{player.name + ' hover card'}</div>
  );
};

const onRenderExpandedCard = (player) => {
  return (
    <div className={classNames.expandedCard}>
      {player.name}
      <DetailsList setKey="expandedCardSet" items={player} />
    </div>
  );
};

const CheatColumnPlayer = ({ player }) => {
  const rootStyle = { width: '400px' }; //set custom width
  const expandingCardProps = {
    onRenderCompactCard: onRenderCompactCard,
    onRenderExpandedCard: onRenderExpandedCard,
    renderData: player.name,
    styles: { root: rootStyle }
  };
  return (
    <Link to={`player/${player.id}`} className="cheat-col-item">
      <HoverCard
        expandingCardProps={expandingCardProps}
        instantOpenOnClick={true}
      >
        <a href="#0" className="cheat-col-player">
          {player.name}
        </a>
      </HoverCard>
      <div>{player.team}</div>
    </Link>
  );
};

export default CheatColumnPlayer;
