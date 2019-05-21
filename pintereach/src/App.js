// react imports
import React, { Component } from 'react';
// react router imports
import { Route } from 'react-router-dom';
// component imports
import Login from './views/login/login';

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
