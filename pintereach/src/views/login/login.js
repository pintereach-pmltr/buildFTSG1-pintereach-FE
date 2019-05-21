// react imports
import React, { Component } from 'react';
// redux imports
import { connect } from 'react-redux';
// router imports
import { NavLink } from 'react-router-dom';
// action imports
import { login } from '../../store/actions/index';


class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChanges = event => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    });
  };

  login = event => {
    event.preventDefault();
    this.props.login(this.state.credentials).then(() => {
      this.props.history.push("/dashboard");
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
        <input name='username' value={this.state.credentials.username} onChange={this.handleChanges} placeholder="Username" />
        <input name='password' value={this.state.credentials.password} onChange={this.handleChanges}  placeholder="Password" />
          <button>Login</button>
        </form>
      </div>
    );
  }
};

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn
    }
};

export default connect(mapStateToProps, { login })(Login);