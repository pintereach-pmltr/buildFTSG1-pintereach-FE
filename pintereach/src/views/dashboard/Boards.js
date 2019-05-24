// react imports
import React, { Component } from 'react';
// redux imports
import { connect } from 'react-redux';
// react router imports
import { NavLink } from 'react-router-dom';
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
    justify-content: space-around;
    align-items: center;
    margin: 2rem;
    border-radius: 10px 10px 10px 0px;
    background-color: #2B2D42;
`

const BoardTitle = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    color: #fff;
`

class Boards extends Component {
    render() {
        return (
            <BoardsContainer>
                <BoardsContent>
                    <BoardForm />
                    {this.props.boards.map(board => {
                        return (
                            <Board key={board.id}>
                                <BoardTitle>
                                <NavLink to={`/dashboard/board/${board.id}`}>{board.board_title}</NavLink>
                                </BoardTitle>
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

export default connect(mapStateToProps, {})(Boards);