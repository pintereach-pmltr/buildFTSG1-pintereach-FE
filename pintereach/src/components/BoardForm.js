// react imports
import React, { Component } from 'react';
// redux imports
import { connect } from 'react-redux';
// action imports
import { addBoard } from '../store/actions/index'
// styled components imports
import styled from 'styled-components';

// styled components
const FormContainer = styled.div`
    width: 100%;
    margin: 5rem 0;
`

const FormContent = styled.div`
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`

const FormBoards = styled.form`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`

const FormInput = styled.input`
    width: 20rem;
    height: 2.5rem;
    margin: 0 1rem;
    text-align: center;
    background-color: #EDF2F4;
`

const FormSubmit = styled.input`
    width: 100px;
    height: 2.75rem;
    border-radius: 10px 10px 10px 0;
    background-color: #EF233C;
    font-weight: bold;
    color: #2B2D42;
`

class BoardForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boards: {
                id: '',
                board_title: '',
                user_id: localStorage.getItem('userId')
            }
        }
    }
    

    changeHandler = event => {
        this.setState({
            boards: {
              ...this.state.boards,
              [event.target.name]: event.target.value
            }
          });
    };

    addBoard = event => {
        const user_id = localStorage.getItem('user id')
        event.preventDefault();
        if (!this.state.boards) return;
        this.props.addBoard(this.state.boards);
        this.setState({
          boards: {
            board_title: "",
            user_id: user_id
          }
        });
      };
    
    render() {
        return (
            <FormContainer>
                <FormContent>
                    <FormBoards onSubmit={this.addBoard}>
                        <FormInput name="id" 
                        type="id"
                        placeholder="board id" 
                        value={this.state.id} 
                        onChange={this.changeHandler} />

                        <FormInput name="board_title"
                        type="title" 
                        placeholder="board title" 
                        value={this.state.board_title}
                        onChange={this.changeHandler} />

                        {/* <FormInput name="user_id" 
                        type="id"
                        placeholder="user id" 
                        value={this.state.user_id} 
                        onChange={this.changeHandler} /> */}

                        <FormSubmit type="submit" value="submit" />
                    </FormBoards>
                </FormContent>
            </FormContainer>
        );
    }
};

export default connect(null, { addBoard })(BoardForm);