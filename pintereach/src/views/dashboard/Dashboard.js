// react imports
import React, { Component } from 'react';
// redux imports
import { connect } from 'react-redux';
// react router imports
import { Route } from 'react-router-dom';
// action imports
import { getBoards, getArticles, getAll } from '../../store/actions/index';
// component imports
import DashList from './DashList';
import Navigation from '../../components/Navigation';
import Profile from '../../components/Profile';
import DashNav from '../../components/DashNav';
import BoardForm from '../../components/BoardForm';
import ArticleForm from '../../components/ArticleForm';
import Boards from './Boards';
import Pins from './Pins';
// styled components imports
import styled from 'styled-components';

// styled components
const DataCheck = styled.div`
    width: 1200px;
    margin: 0 auto;
    margin-top: 25rem;
`

class Dashboard extends Component {
    componentDidMount() {
        const userId = localStorage.getItem('userId')
        // const boardId = localStorage.getItem('boardId')
        // this.props.getBoards(userId);
        // this.props.getArticles(userId);
        this.props.getAll(userId);
    }
    
    render() {
        console.log('[DASHBOARD ALL CHECK]', JSON.stringify(this.props.boards));
        return (
            <div>
                <Navigation />
                <Profile />
                <DashNav />
                <Route path='/dashboard/boards' component={Boards} />
                <Route path='/dashboard/pins' component={Pins} />
                
                
                
                
                
                <DataCheck>
                <span>-- DASHBOARD AND DATA FUNCTIONALITY CHECKS --</span>
                <BoardForm />
                {this.props.boards.map(board => {
                     return <div>{board.board_title}</div>
                })}
                <DashList />
                <ArticleForm />
                {this.props.articles.map(article => {
                    return <div key={article.id}>{article.article_label}</div>
                })}
                </DataCheck>
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

export default connect(mapStateToProps, { getBoards, getArticles, getAll })(Dashboard);