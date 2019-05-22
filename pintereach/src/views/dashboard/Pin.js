// react imports
import React, { Component } from 'react';
// styled components imports
import styled from 'styled-components';

// styled components
const PinContainer = styled.div`
    width: 90%;
    margin: 1rem auto;
`

const PinContent = styled.div`
    width: 100%
    height: 3rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    background-color: #8D99AE;
`

class Pin extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return (
            <PinContainer>
                <PinContent>
                    <span>{this.props.name}</span>
                    <span>{this.props.url}</span>
                    <span>{this.props.boardId}</span>
                </PinContent>
            </PinContainer>
        );
    }
};

export default Pin;