import React from 'react';
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom';
import { HomePage, MergedAuth } from './components';

class AppRouter extends React.Component {
  render() {
    // const { isLoggedIn } = this.props
    return (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={MergedAuth} />
      </Switch>
    );
  }
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(null)(AppRouter))
