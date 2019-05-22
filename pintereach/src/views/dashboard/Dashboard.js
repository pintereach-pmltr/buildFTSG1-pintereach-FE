// react imports
import React, { Component } from 'react';
// redux imports
import { connect } from 'react-redux';
// action imports
import { fetchBoards, fetchArticles } from '../../store/actions/index';
// component imports
import DashList from './DashList';
import BoardForm from '../../components/BoardForm';
import ArticleForm from '../../components/ArticleForm';

class Dashboard extends Component {
    componentDidMount() {
        const userId = localStorage.getItem('userId')
        const boardId = localStorage.getItem('boardId')
        this.props.fetchBoards(userId);
        this.props.fetchArticles(boardId);
    }
    
    render() {
        return (
            <div>
                <span>hello from dashboard</span>
                <BoardForm />
                {this.props.boards.map(board => {
                    return <div key={board.id}>{board.board_title}</div>
                })}
                <DashList />
                <ArticleForm />
                {this.props.articles.map(article => {
                    return <div key={article.id}>{article.article_label}</div>
                })}
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