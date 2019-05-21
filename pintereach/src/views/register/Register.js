// react imports
import React, { Component } from 'react';
// redux imports
import { connect } from 'react-redux';
// router imports
import { NavLink } from 'react-router-dom';
// action imports
import { register } from '../../store/actions/index';

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
            <form onSubmit={this.register}>
                <input name="username" placeholder="username" value={this.state.credentials.username} onChange={this.handleChanges}></input>
                <input name="password" placeholder="password" value={this.state.credentials.password} onChange={this.handleChanges}></input>
                <button>Register</button>
            </form>
        );
    }
};

const mapStateToProps = state => {
    return {
        registered: state.registered
    }
};

export default connect(mapStateToProps, { register })(Register);
