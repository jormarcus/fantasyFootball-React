import React from 'react';
import { connect } from 'react-redux';
import { loadInitialData } from '../actions/commonActions';
import { CheatSheet, DraftRoster } from './index';

class HomePage extends React.Component {
  componentDidMount() {
    // load user info
    // load draft order and current place
    // load player list
    // load roster
    // load draft history
    this.props.loadInitialData();
  }
  render() {
    return (
      <div className="home-container">
        <div className="draft-tracker">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac erat
          at erat euismod faucibus. Donec laoreet turpis massa. Mauris a
          consectetur elit. Cras eu dapibus ante. Aliquam erat volutpat. Cras
          pretium nulla lacus, sit amet placerat sapien maximus in. Quisque
          iaculis hendrerit magna, sed rhoncus leo venenatis eu. Nunc vehicula
          egestas magna, tempor cursus risus blandit ac. Aliquam tincidunt,
          magna in venenatis mattis, mi quam finibus lorem, ac fringilla lectus
          velit id leo. Vestibulum non risus cursus, ultricies velit ut, congue
        </div>
        <div className="draft-suggestions">
          Etiam felis odio, dignissim quis nisl vitae, interdum tincidunt massa.
          In libero lectus, sollicitudin ut orci sagittis, interdum posuere
          nisi. Mauris felis justo, luctus at posuere id, elementum sit amet
          justo. Sed at pulvinar sapien, sed cursus massa. Ut ultricies arcu
          blandit commodo congue. Vivamus non felis id sapien auctor rutrum.
          Mauris nec lectus nec ex ultricies fermentum. Phasellus aliquet velit
          eget justo molestie hendrerit. In fermentum ante turpis, eu lobortis
          sem tempus id. Proin facilisis dolor sed mauris convallis scelerisque.
          Donec non dolor venenatis, hendrerit lectus quis, rutrum purus.
        </div>
        <div className="roster">
          <DraftRoster />
        </div>
        <div className="draft-log">
          Etiam felis odio, dignissim quis nisl vitae, interdum tincidunt massa.
          In libero lectus, sollicitudin ut orci sagittis, interdum posuere
          nisi. Mauris felis justo, luctus at posuere id, elementum sit amet
          justo. Sed at pulvinar sapien, sed cursus massa. Ut ultricies arcu
          blandit commodo congue. Vivamus non felis id sapien auctor rutrum.
          Mauris nec lectus nec ex ultricies fermentum. Phasellus aliquet velit
          eget justo molestie hendrerit. In fermentum ante turpis, eu lobortis
          sem tempus id. Proin facilisis dolor sed mauris convallis scelerisque.
          Donec non dolor venenatis, hendrerit lectus quis, rutrum purus.
        </div>
        <div className="cheat-sheets">
          <CheatSheet />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(loadInitialData());
    }
  };
};

export default connect(null, mapDispatchToProps)(HomePage);
