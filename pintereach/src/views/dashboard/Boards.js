// react imports
import React, { Component } from 'react';
// redux imports
import { connect } from 'react-redux';
// react router imports
import { NavLink } from 'react-router-dom';
// action imports
import { deleteBoard } from '../../store/actions/index';
// component imports
import BoardForm from '../../components/BoardForm';
// styled components imports
import styled from 'styled-components';

// styled components
    // boards structural
const BoardsContainer = styled.div`
    width: 100%;
    margin: 5rem 0;
`

const BoardsContent = styled.div`
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
`

const Board = styled.div`
    width: 250px;
    height: 200px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    border-radius: 10px 10px 10px 0px;
    background-color: #2B2D42;
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.1),
    2px 0px 4px rgba(0, 0, 0, 0.1), -2px 0px 4px rgba(0, 0, 0, 0.1);
`

const BoardTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    color: #fff;
`

const BoardDelete = styled.span`
    color: #D90429;
    font-size: 0.8rem;
`

class Boards extends Component {
    
    componentDidMount() {
        const userId = localStorage.getItem('userId');
    }
    
    deleteBoard = userId => {
        this.props.deleteBoard(userId)
    }
   
    render() {
        return (
            <BoardsContainer>
                <BoardsContent>
                    <BoardForm />
                    {this.props.boards.map(board => {
                        return (
                            <Board key={board.id}>
                                <NavLink to={`/dashboard/board/${board.id}`}>
                                    <BoardTitle>
                                    {board.board_title}
                                    </BoardTitle>
                                </NavLink>

                                <BoardDelete onClick={() => this.deleteBoard(board.id)}>( delete )</BoardDelete>
                            </Board>
                        );
                    })}
                </BoardsContent>
            </BoardsContainer>
        );
    }
};

const mapStateToProps = state => {
    return {
        boards: state.boards
    }
};

export default connect(mapStateToProps, { deleteBoard })(Boards);