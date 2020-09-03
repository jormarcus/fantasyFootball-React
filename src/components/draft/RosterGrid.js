import React from 'react';
import { connect } from 'react-redux';

const RosterGridItem = ({ player, posLabel }) => (
  <tr className="roster-grid-row">
    <td className="pos">{posLabel}</td>
    {player ? (
      <React.Fragment>
        <td className="name">{player.name}</td>
        <td className="team">{player.team}</td>
        <td className="bye">{player.bye}</td>
      </React.Fragment>
    ) : null}
  </tr>
);

const RosterGrid = (props) => {
  return (
    <table className="roster-grid">
      <tbody>
        <RosterGridItem posLabel={'QB'} player={props.QB} />
        <RosterGridItem posLabel={'RB1'} player={props.RB1} />
        <RosterGridItem posLabel={'RB2'} player={props.RB2} />
        <RosterGridItem posLabel={'WR1'} player={props.WR1} />
        <RosterGridItem posLabel={'WR2'} player={props.WR2} />
        <RosterGridItem posLabel={'TE'} player={props.TE} />
        <RosterGridItem posLabel={'FLEX1'} player={props.FLEX1} />
        <RosterGridItem posLabel={'FLEX2'} player={props.FLEX2} />
        <RosterGridItem posLabel={'K'} player={props.K} />
        <RosterGridItem posLabel={'DEF'} player={props.DEF} />
        <RosterGridItem posLabel={'BN1'} player={props.BN1} />
        <RosterGridItem posLabel={'BN2'} player={props.BN2} />
        <RosterGridItem posLabel={'BN3'} player={props.BN3} />
        <RosterGridItem posLabel={'BN4'} player={props.BN4} />
        <RosterGridItem posLabel={'BN5'} player={props.BN5} />
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({
  QB: state.rosterReducer.QB,
  RB1: state.rosterReducer.RB1,
  RB2: state.rosterReducer.RB2,
  WR1: state.rosterReducer.WR1,
  WR2: state.rosterReducer.WR2,
  TE: state.rosterReducer.TE,
  FLEX1: state.rosterReducer.FLEX1,
  FLEX2: state.rosterReducer.FLEX2,
  BN1: state.rosterReducer.BN1,
  BN2: state.rosterReducer.BN2,
  BN3: state.rosterReducer.BN3,
  BN4: state.rosterReducer.BN4,
  BN5: state.rosterReducer.BN5
});

export default connect(mapStateToProps, null)(RosterGrid);
