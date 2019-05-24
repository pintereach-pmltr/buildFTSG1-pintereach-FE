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
  background-color: #2B2D42;
  width: 100%;
  max-width: 30rem;
  height: 30rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 1px 1px #141618;
`

const RegInput = styled.input`
  width: 60%;
  height: 3rem;
  margin: 0.5rem;
  text-align: center;
`

const RegButton = styled.button`
  width: 50%;
  height: 3rem;
  margin: 2rem;
  background-color: #EF233C;
  border-radius: 10px;
  border: none;
  color: #EDF2F4;
  font-weight: bold;
  font-size: 1rem;
`

const RegHeader = styled.h1`
  color: #EF233C;
  margin-bottom: 1rem;
`

const RegSpan = styled.span`
  color: #EDF2F4;
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
        console.log('[REGISTER PROPS CHECK]', this.props.register)
        this.props.register(this.state.credentials)
        this.props.history.push('/dashboard')
        alert('Welcome! You have been successfully registered. Please login.');
    }
    
    render() {
        return (
            <RegContainer>
                <RegForm onSubmit={this.register}>
                    <RegHeader>Pintereach</RegHeader>
                    <RegInput name="username" placeholder="username" value={this.state.credentials.username} onChange={this.handleChanges}></RegInput>
                    <RegInput name="password" placeholder="password" value={this.state.credentials.password} onChange={this.handleChanges}></RegInput>
                    <RegButton>Register</RegButton>
                    <p><RegSpan>Already have an account?</RegSpan></p> <NavLink to='/'>Login here</NavLink>
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
