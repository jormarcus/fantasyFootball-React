import React from 'react';
import { connect } from 'react-redux';
import { Dropdown } from '@fluentui/react';
import { onRosterTeamChange } from '../../actions/rosterActions';

const dropdownStyles = {
  dropdown: { width: 300 }
};

const DraftRoster = (props) => {
  return (
    <React.Fragment>
      <Dropdown
        placeholder="Select an option"
        label="Roster"
        options={props.fantasyTeams}
        styles={dropdownStyles}
        onChange={props.onRosterTeamChange}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  fantasyTeams: [
    { key: 'jordan', text: 'Jordans Team' },
    { key: 'flurry', text: 'Flurrys Team' }
  ]
});

const mapDispatchToProps = (dispatch) => ({
  onRosterTeamChange: (value) => {
    console.log('Team change val: ', value);
    dispatch(onRosterTeamChange(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DraftRoster);
