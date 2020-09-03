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
    <div className='roster-content'>
      <Dropdown
        placeholder='Select an option'
        label='Roster'
        options={props.fantasyTeams}
        styles={dropdownStyles}
        onChange={props.onRosterTeamChange}
        defaultSelectedKey={props.selectedTeam}
      />
      <RosterGrid />
    </div>
  );
};

const mapStateToProps = (state) => ({
  fantasyTeams: state.rosterReducer.fantasyTeams,
  selectedTeam: state.rosterReducer.selectedTeam
});

const mapDispatchToProps = (dispatch) => ({
  onRosterTeamChange: (evt, fanTeam) => {
    console.log(evt);
    console.log('Team change val: ', fanTeam);
    dispatch(onRosterTeamChange(fanTeam));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DraftRoster);
