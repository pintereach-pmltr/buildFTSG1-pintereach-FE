// react imports
import React, { Component } from 'react';
// redux imports
import { connect } from 'react-redux';
// action imports
import { fetchBoards } from '../../store/actions/index';
// component imports
import BoardForm from '../../components/BoardForm';

class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchBoards(this.props.userId)
    }
    
    render() {
        return (
            <div>
                <span>hello from dashboard</span>
                <BoardForm />
                {this.props.boards.map(board => {
                    return <div>{board.board_title}</div>
                })}
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        boards: state.boards,
        fetching: state.fetching,
        userId: state.userId
    }
};

export default connect(mapStateToProps, { fetchBoards })(Dashboard);