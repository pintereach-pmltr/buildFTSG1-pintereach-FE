// react import
import React from 'react';
// styled components imports
import styled from 'styled-components';

// styled components
const DashboardContainer = styled.div`
    width: 100%;
    margin: 5rem 0;
`

const DashboardContent = styled.div`
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
`

const DashboardColumnLeft = styled.div`
    background-color: #EDF2F4;
    width: 48%;
    height: 50rem;
    border-radius: 10px 0px 0px 10px;
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.1),
    2px 0px 4px rgba(0, 0, 0, 0.1), -2px 0px 4px rgba(0, 0, 0, 0.1);
`

const DashboardColumnRight = styled.div`
    background-color: #EDF2F4;
    width: 48%;
    height: 50rem;
    border-radius: 0px 10px 10px 0px;
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.1),
    2px 0px 4px rgba(0, 0, 0, 0.1), -2px 0px 4px rgba(0, 0, 0, 0.1);
`

const Dash = () => {
    return (
        <DashboardContainer>
            <DashboardContent>
                <DashboardColumnLeft>

                </DashboardColumnLeft>

                <DashboardColumnRight>

                </DashboardColumnRight>
            </DashboardContent>
        </DashboardContainer>
    );
};

export default Dash;