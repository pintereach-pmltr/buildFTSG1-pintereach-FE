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
import BoardView from './BoardView';
import Dash from './Dash';
// styled components imports
import styled from 'styled-components';

// styled components
const DataCheck = styled.div`
    width: 1200px;
    margin: 0 auto;
    margin-top: 25rem;
`

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
    border: 1px solid #2B2D42;
    border-radius: 10px 0px 0px 10px;
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.1),
    2px 0px 4px rgba(0, 0, 0, 0.1), -2px 0px 4px rgba(0, 0, 0, 0.1);
`

const DashboardColumnRight = styled.div`
    background-color: #EDF2F4;
    width: 48%;
    height: 50rem;
    border: 1px solid #2B2D42;
    border-radius: 0px 10px 10px 0px;
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.1),
    2px 0px 4px rgba(0, 0, 0, 0.1), -2px 0px 4px rgba(0, 0, 0, 0.1);
`

const Filler = styled.div`
    width: 250px;
    height: 250px;
    background-color: pink;
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
       
        return (
            <div>
                <Navigation />
                <Profile />
                <DashNav />
                <Route exact path='/dashboard' component={Dash} />
                <Route path='/dashboard/boards' component={Boards} />
                <Route path='/dashboard/pins' component={Pins} />
                <Route path={`/dashboard/board/:id`} component={BoardView} />
                
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