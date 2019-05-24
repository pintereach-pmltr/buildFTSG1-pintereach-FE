//react imports
import React, { Component } from 'react';
// redux imports
import { connect } from 'react-redux';

class BoardView extends Component {

  state = {
      myBoard: ''
  }

  componentDidMount() {
    let pathname = this.props.location.pathname;
    let myBoardId = pathname.replace(/\D/g, "");
    this.setState({ myBoard: myBoardId })
  }
    
  render() {
    console.log('CHECK STATE', this.state.myBoard)
    return (
      <div>
        {this.props.boards.map(board => {
          if (board.articles) {
            return (
              <div>
                {board.articles.map((article, articleIndex) => {
                  if (article.board_id === parseInt(this.state.myBoard)) {
                  return (
                    <div key={`article = ${articleIndex}`}>
                      {article.article_label}
                    </div>
                  );
                  }
                })}
              </div>
            );
          }
        })}
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