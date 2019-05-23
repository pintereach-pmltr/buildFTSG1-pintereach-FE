// react imports
import React from 'react';
// react router imports
import { NavLink } from 'react-router-dom';
// styled components imports
import styled from 'styled-components';

// styled components
// dashnav structure
const DashNavContainer = styled.div`
    width: 100%;
`

const DashNavContent = styled.div`
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
`

const DashNavView = styled.div`
    width: 10rem;
    height: 2.5rem;
    margin: 1rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 1px 1px #141618;
    background-color: #2B2D42;
`

const DashNav = () => {
    return (
        <DashNavContainer>
            <DashNavContent>
                <NavLink to='/dashboard'><DashNavView>Dashboard</DashNavView></NavLink>
                <NavLink to='/dashboard/boards'><DashNavView>Boards</DashNavView></NavLink>
                <NavLink to='/dashboard/pins'><DashNavView>Pins</DashNavView></NavLink>
            </DashNavContent>
        </DashNavContainer>
    );
};

export default DashNav;