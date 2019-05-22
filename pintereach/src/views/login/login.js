// react imports
import React, { Component } from 'react';
// redux imports
import { connect } from 'react-redux';
// react router imports
import { NavLink } from 'react-router-dom';
// action imports
import { login } from '../../store/actions/index';
// styled components imports
import styled from 'styled-components';

// styled components
const LoginContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
`

const LoginForm = styled.form`
  background-color: #8D99AE;
  width: 100%;
  height: 25rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 1px 1px #141618;
`

const LoginInput = styled.input`
  width: 80%;
  height: 3rem;
  margin: 0.25rem;
`

const LoginButton = styled.button`
  width: 50%;
  height: 3rem;
  margin: 1rem;
`

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
      <LoginContainer>
        <LoginForm onSubmit={this.login}>
        <h1>Pintereach</h1>
        <LoginInput name='username' value={this.state.credentials.username} onChange={this.handleChanges} placeholder="Username" />
        <LoginInput name='password' value={this.state.credentials.password} onChange={this.handleChanges}  placeholder="Password" />
          <LoginButton>Login</LoginButton>
          <p>Need an account? <NavLink to='/register'>Register here.</NavLink></p>
        </LoginForm>
      </LoginContainer>
    );
  }
};

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn
    }
};

export default connect(mapStateToProps, { login })(Login);