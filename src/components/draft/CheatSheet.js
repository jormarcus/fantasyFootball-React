import React from 'react';
import { connect } from 'react-redux';
import CheatColumn from './CheatColumn';

const CheatSheat = (props) => {
  const {
    overall,
    quarterbacks,
    runningbacks,
    wideReceivers,
    tightEnds,
    kickers
  } = props;
  return (
    <React.Fragment>
      <CheatColumn
        className="margin-left-10"
        playersByPos={overall}
        title="Overall"
      />
      <CheatColumn playersByPos={quarterbacks} title="QB" />
      <CheatColumn playersByPos={runningbacks} title="RB" />
      <CheatColumn
        className="margin-left-10"
        playersByPos={wideReceivers}
        title="WR"
      />
      <CheatColumn playersByPos={tightEnds} title="TE" />
      <CheatColumn playersByPos={kickers} title="K" />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  overall: state.playersReducer.overall,
  quarterbacks: state.playersReducer.quarterbacks,
  runningbacks: state.playersReducer.runningbacks,
  wideReceivers: state.playersReducer.wideReceivers,
  tightEnds: state.playersReducer.tightEnds,
  kickers: state.playersReducer.kickers
});

export default connect(mapStateToProps, null)(CheatSheat);
