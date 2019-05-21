// react imports
import React, { Component } from 'react';
// redux imports
import { connect } from 'react-redux';
// action imports
import { fetchBoards } from '../../store/actions/index';

class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchBoards()
    }
    
    render() {
        console.log('[DASH CHECK]', this.props);
        return (
            <div>hello from dashboard</div>
        );
    }
};

const mapStateToProps = state => {
    return {
        boards: state.boards,
        fetching: state.fetching
    }
};

export default connect(mapStateToProps, { fetchBoards })(Dashboard);