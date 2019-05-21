// react imports
import React, { Component } from 'react';
// react router imports
import { Route } from 'react-router-dom';
// component imports
import Login from './views/login/Login';
import Dashboard from './views/dashboard/Dashboard';

class App extends Component {
  render() {
    return(
      <div>
        <Route path='/' component={Login} />
      </div>
    );
  }
};

export default App;
