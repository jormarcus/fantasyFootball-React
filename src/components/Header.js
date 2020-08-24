import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import SearchBar from './SearchBar';

function Header() {
  return (
    <div>
      <div>
        Header
      </div>
    </div>
  );
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {};
};


export default connect(mapStateToProps, null)(Header);
