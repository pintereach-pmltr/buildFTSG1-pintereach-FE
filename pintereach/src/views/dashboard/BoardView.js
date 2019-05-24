//react imports
import React, { Component } from 'react';
// redux imports
import { connect } from 'react-redux';

class BoardView extends Component {
  //     getArticles = () => {
  //     this.props.boards.map(board => {
  //       if (board.articles) {
  //         board.articles.forEach(function(article) {
  //           return <div>{article.article_label}</div>;
  //         });
  //       }
  //     });
  //   };

  render() {
    console.log("[BOARDVIEW PROPS CHECK]", this.props);
    return (
      <div>
        {this.props.boards.map(board => {
          if (board.articles) {
            return (
              <div>
                {board.articles.map((article, articleIndex) => {
                  return (
                    <div key={`article = ${articleIndex}`}>
                      {article.article_label}
                    </div>
                  );
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