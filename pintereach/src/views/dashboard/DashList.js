// react imports
import React, { Component } from 'react';
// redux imports
import { connect } from 'react-redux';

class DashList extends Component {
    render() {
        // console.log('[STATE CHECK]',this.props.state)
        return (
            <div>hello from dashlist</div>
        );
    }
};

const mapStateToProps = state => {
    return {
        state: state
    }
};

export default connect(mapStateToProps, {})(DashList);