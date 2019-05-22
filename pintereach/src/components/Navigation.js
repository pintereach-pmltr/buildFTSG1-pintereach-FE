// react imports
import React from 'react';
// react router imports
import { NavLink } from 'react-router-dom';
// styled components imports
import styled from 'styled-components';

// styled components
const NavFullWidth = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-color: #2B2D42;
`

const NavContainer = styled.div`
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`

const Navigation = () => {
    return (
        <NavFullWidth>
            <NavContainer>
                <h1>Pintereach</h1>
                <NavLink to='/'>Logout</NavLink>
            </NavContainer>
        </NavFullWidth>
    );
};

export default Navigation;