// react imports
import React, { Component } from 'react';
// redux imports
import { connect } from 'react-redux';
// react router imports
import { NavLink } from 'react-router-dom';
// action imports
import { logout } from '../store/actions/index';
// styled components imports
import styled from 'styled-components';

// styled components
const NavFullWidth = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-color: #EF233C;
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.1),
    2px 0px 4px rgba(0, 0, 0, 0.1), -2px 0px 4px rgba(0, 0, 0, 0.1);
`

const NavContainer = styled.div`
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.span`
    font-size: 3rem;
    margin: 0 1rem;
`

const LogoContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
`

const MenuItem = styled.div`
    color: #2B2D42;
    background-color: #2B2D42;
    width: 10rem;
    height: 3rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    color: #EF233C;
    font-size: 1rem;
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.1),
    2px 0px 4px rgba(0, 0, 0, 0.1), -2px 0px 4px rgba(0, 0, 0, 0.1);
`

class Navigation extends Component {
    render() {
        return (
            <NavFullWidth>
                <NavContainer>
                    <LogoContainer>
                    <Logo><i className="fas fa-bookmark"></i></Logo>
                    <h1>Pintereach</h1>
                    </LogoContainer>
                    <NavLink onClick={this.logout} exact to='/'><MenuItem>Logout</MenuItem></NavLink>
                </NavContainer>
            </NavFullWidth>
        );
    }
};

export default connect(null, { logout })(Navigation);