// react imports
import React, { Component } from 'react';
// redux imports
import { connect } from 'react-redux';
// action imports
import { addArticle } from '../store/actions/index'

class ArticleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            article_label: '',
            url: '',
            board_id: ''
        }
    }
    

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value })
    };

    addArticle = e => {
        e.preventDefault();
        const { id, article_label, url, board_id } = this.state;
        let newArticle = {id, article_label, url, board_id};
        this.props.addArticle(newArticle)
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.addArticle}>
                    <input name="id" 
                    type="id"
                    placeholder="article id" 
                    value={this.state.id} 
                    onChange={this.changeHandler} />

                    <input name="article_label"
                    type="article_label" 
                    placeholder="article label" 
                    value={this.state.article_label}
                    onChange={this.changeHandler} />

                    <input name="url" 
                    type="text"
                    placeholder="url" 
                    value={this.state.url} 
                    onChange={this.changeHandler} />

                    <input name="board_id" 
                    type="board_id"
                    placeholder="board id" 
                    value={this.state.board_id} 
                    onChange={this.changeHandler} />

                    <input type="submit" value="submit" />
                </form>
            </div>
        );
    }
};

export default connect(null, { addArticle })(ArticleForm);