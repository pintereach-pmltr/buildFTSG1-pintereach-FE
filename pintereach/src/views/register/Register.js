// react imports
import React, { Component } from 'react';
// redux imports
import { connect } from 'react-redux';
// router imports
import { NavLink } from 'react-router-dom';
// action imports
import { register } from '../../store/actions/index';
// styled components import
import styled from 'styled-components';

// styled components
const RegContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
`

const RegForm = styled.form`
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

const RegInput = styled.input`
  width: 80%;
  height: 3rem;
  margin: 0.25rem;
`

const RegButton = styled.button`
  width: 50%;
  height: 3rem;
  margin: 1rem;
`

class Register extends Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChanges = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    register = e => {
        e.preventDefault();
        this.props.register(this.state.credentials).then(() => {
            this.props.history.push('/dashboard')
        })
    }
    
    render() {
        return (
            <RegContainer>
                <RegForm onSubmit={this.register}>
                    <h1>Pintereach</h1>
                    <RegInput name="username" placeholder="username" value={this.state.credentials.username} onChange={this.handleChanges}></RegInput>
                    <RegInput name="password" placeholder="password" value={this.state.credentials.password} onChange={this.handleChanges}></RegInput>
                    <RegButton>Register</RegButton>
                    <p>Already have an account? <NavLink to='/'>Login here</NavLink></p>
                </RegForm>
            </RegContainer>
        );
    }
};

const mapStateToProps = state => {
    return {
        registered: state.registered
    }
};

export default connect(mapStateToProps, { register })(Register);
