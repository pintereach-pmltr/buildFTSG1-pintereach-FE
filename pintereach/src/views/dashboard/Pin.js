// react imports
import React, { Component } from 'react';
// redux imports
import { connect } from 'react-redux';
// action imports
 
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

const DeleteButton = styled.button`
    justify-self: flex-end;
`

class Pin extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    deleteArticle = event => {    
        // let id = this.props.id;
        const userId = localStorage.getItem('userId');
        this.props.deleteArticle(userId)
    }
    
    render() {
        return (
            <PinContainer>
                <PinContent>
                    <span>{this.props.name}</span>
                    <span>{this.props.url}</span>
                    <span>{this.props.boardId}</span>
                    <DeleteButton>Delete</DeleteButton>
                </PinContent>
            </PinContainer>
        );
    }
};

export default connect(null, { })(Pin);