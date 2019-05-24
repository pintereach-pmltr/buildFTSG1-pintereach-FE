//react imports
import React, { Component } from 'react';
// redux imports
import { connect } from 'react-redux';
// react router imports
// import { NavLink } from 'react-router-dom';
// actions imports
import { deleteArticle } from '../../store/actions/index'
// component imports
import ArticleForm from '../../components/ArticleForm';
// styled components imports
import styled from 'styled-components';

// styled components
const ArticleContainer = styled.div`
    width: 100%;
`

const ArticleContent = styled.div`
    width: 1200px;
    margin: 0 auto;
`

const ArticlePin = styled.div`
    background-color: green;
    font-size: 1.25rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    margin: 1rem 0;
    padding: 0.5rem;
    border-radius: 10px;
    background-color: #2B2D42;
    color: #fff;
`

class BoardView extends Component {

  state = {
      myBoard: ''
  }

  componentDidMount() {
    // const userId = localStorage.getItem('userId');
    let pathname = this.props.location.pathname;
    let myBoardId = pathname.replace(/\D/g, "");
    this.setState({ myBoard: myBoardId })
  }

  deleteArticle = userId => {
      this.props.deleteArticle(userId);
  }
    
  render() {
    console.log('CHECK STATE', this.state.myBoard)
    return (
      <ArticleContainer>
        <ArticleContent>
            <ArticleForm />
            <div>
            {this.props.boards.map(board => {
            if (board.articles) {
                return (
                <div>
                    {board.articles.map((article, articleIndex) => {
                    if (article.board_id === parseInt(this.state.myBoard)) {
                    return (
                        <ArticlePin key={`article = ${articleIndex}`}>
                            <span>{article.article_label}</span>
                            <a target="_blank" href={article.url.toString()}>{article.url}</a>
                            <span>{article.board_id}</span>
                            <button onClick={() =>this.deleteArticle(article.id)}>Delete</button>
                        </ArticlePin>
                    );
                    }
                    })}
                </div>
                );
            }
            })}
            </div>
        </ArticleContent>
      </ArticleContainer>
    );
  }
};

const mapStateToProps = state => {
    return {
        boards: state.boards
    }
};

export default connect(mapStateToProps, { deleteArticle })(BoardView);