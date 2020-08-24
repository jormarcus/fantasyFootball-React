import React from 'react';
import './styles/App.scss';
import { Router } from 'react-router-dom';
import createBrowserHistory from './history';
import AppRouter from './AppRouter';

function App() {
  return (
    <div>
      <Router history={createBrowserHistory}>
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
