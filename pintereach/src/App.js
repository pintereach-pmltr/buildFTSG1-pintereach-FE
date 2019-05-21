// react imports
import React, { Component } from 'react';
// react router imports
import { Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
// component imports
import Login from './views/login/Login';
import Register from './views/register/Register';
import Dashboard from './views/dashboard/Dashboard';

class App extends Component {
  render() {
    return(
      <div>
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
        <PrivateRoute path='/dashboard' component={Dashboard} />
      </div>
    );
  }
};

export default App;
