//react imports
import React, { Component } from 'react';
// redux imports
import { connect } from 'react-redux';

class BoardView extends Component {

    getArticles = () => {
        this.props.boards.map(board => {
            if(board.articles) {
                board.articles.forEach(function(article) {
                    return <div>{article.article_label}</div>
                })
            } 
        })
    }
    
    render() {
        console.log('[BOARDVIEW PROPS CHECK]', this.props)
        return (
            <div>
                <span>HELLO FROM BOARDVIEW</span>
                {this.getArticles}
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