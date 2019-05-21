// react imports
import React, { Component } from 'react';
// redux imports
import { connect } from 'react-redux';
// action imports
import { addBoard } from '../store/actions/index'

class BoardForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: undefined,
            board_title: '',
            user_id: undefined
        }
    }
    

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value })
    };

    addBoard = e => {
        e.preventDefault();
        const { id, board_title, user_id } = this.state;
        let newBoard = {id, board_title, user_id};
        this.props.addBoard(newBoard)
        this.setState(() => ({
            id: undefined,
            board_title: '',
            user_id: undefined
        }))
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.addBoard}>
                    <input name="id" 
                    type="id"
                    placeholder="board id" 
                    value={this.state.id} 
                    onChange={this.changeHandler} />

                    <input name="board_title"
                    type="title" 
                    placeholder="board title" 
                    value={this.state.board_title}
                    onChange={this.changeHandler} />

                    <input name="user_id" 
                    type="id"
                    placeholder="user id" 
                    value={this.state.user_id} 
                    onChange={this.changeHandler} />

                    <input type="submit" value="submit" />
                </form>
            </div>
        );
    }
};

export default connect(null, { addBoard })(BoardForm);