import React from "react";
import { connect } from "react-redux";
import CheatColumn from "./CheatColumn";

const CheatSheat = (props) => {
  const {
    overall,
    quarterbacks,
    runningbacks,
    widereceivers,
    tightends,
    kickers,
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
        playersByPos={widereceivers}
        title="WR"
      />
      <CheatColumn playersByPos={tightends} title="TE" />
      <CheatColumn playersByPos={kickers} title="K" />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  overall: state.playersReducer.overall,
  quarterbacks: state.playersReducer.quarterbacks,
  runningbacks: state.playersReducer.runningbacks,
  widereceivers: state.playersReducer.widereceivers,
  tightends: state.playersReducer.tightends,
  kickers: state.playersReducer.kickers,
});

export default connect(mapStateToProps, null)(CheatSheat);
