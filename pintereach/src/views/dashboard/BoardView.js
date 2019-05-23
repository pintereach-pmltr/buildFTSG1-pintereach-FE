//react imports
import React, { Component } from 'react';
// redux imports
import { connect } from 'react-redux';

class BoardView extends Component {
    
    render() {
        console.log('[BOARDVIEW PROPS CHECK]', this.props)
        return (
            <div>
                HELLO FROM BOARDVIEW
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        boards: state.boards
    }
};

export default connect(mapStateToProps, {})(BoardView);