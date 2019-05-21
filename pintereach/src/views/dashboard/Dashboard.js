// react imports
import React, { Component } from 'react';
// redux imports
import { connect } from 'react-redux';
// action imports
import { fetchBoards, fetchArticles } from '../../store/actions/index';
// component imports
import DashList from './DashList';
import BoardForm from '../../components/BoardForm';

class Dashboard extends Component {
    componentDidMount() {
        console.log(['CDM'])
        const userId = localStorage.getItem('userId')
        this.props.fetchBoards(userId);
        this.props.fetchArticles(userId);
    }
    
    render() {
        console.log('[RENDER]')
        return (
            <div>
                <span>hello from dashboard</span>
                <BoardForm />
                {this.props.boards.map(board => {
                    return <div key={board.id}>{board.board_title}</div>
                })}
                <DashList />
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        boards: state.boards,
        articles: state.articles,
        fetching: state.fetching,
    }
};

export default connect(mapStateToProps, { fetchBoards, fetchArticles })(Dashboard);