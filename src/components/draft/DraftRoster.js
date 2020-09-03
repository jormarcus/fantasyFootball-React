import React from 'react';
import { connect } from 'react-redux';
import { Dropdown } from '@fluentui/react';
import { onRosterTeamChange } from '../../actions/rosterActions';
import RosterGrid from './RosterGrid';

const dropdownStyles = {
  dropdown: { width: 250, marginBottom: 20 }
};

const DraftRoster = (props) => {
  return (
    <div className="roster-content">
      <Dropdown
        placeholder="Select an option"
        label="Roster"
        options={props.fantasyTeams}
        styles={dropdownStyles}
        onChange={props.onRosterTeamChange}
      />
      <RosterGrid />
    </div>
  );
};

const mapStateToProps = (state) => ({
  fantasyTeams: [
    { key: 'jordan', text: 'Jordans Team' },
    { key: 'flurry', text: 'Flurrys Team' }
  ]
});

const mapDispatchToProps = (dispatch) => ({
  onRosterTeamChange: (fanTeam) => {
    console.log('Team change val: ', fanTeam);
    dispatch(onRosterTeamChange(fanTeam));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DraftRoster);
