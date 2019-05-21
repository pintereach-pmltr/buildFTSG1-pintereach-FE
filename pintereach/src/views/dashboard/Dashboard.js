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
        this.props.fetchBoards(this.props.id)
    }
    
    render() {
        return (
            <div>
                <span>hello from dashboard</span>
                <BoardForm />
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        boards: state.boards,
        fetching: state.fetching,
        id: state.id
    }
};

export default connect(mapStateToProps, { fetchBoards })(Dashboard);