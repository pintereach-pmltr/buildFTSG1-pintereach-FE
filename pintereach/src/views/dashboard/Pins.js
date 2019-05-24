// react imports
import React, { Component } from 'react';
// redux imports
import { connect } from 'react-redux';
// action imports
import { deleteArticle } from '../../store/actions/index';
// component imports
import Pin from './Pin';
import ArticleForm from '../../components/ArticleForm';
// styled components imports
import styled from 'styled-components';

// styled components
    // pins structure
const PinsContainer = styled.div`
    width: 100%;
    margin: 5rem 0;
`

const PinsContent = styled.div`
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
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.1),
    2px 0px 4px rgba(0, 0, 0, 0.1), -2px 0px 4px rgba(0, 0, 0, 0.1);
`

class Pins extends Component {
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
        console.log('[CHECK PINS STATE]', this.props);
        return (
            <PinsContainer>
                <PinsContent>
                <ArticleForm />
                <div>
            {this.props.boards.map(board => {
            if (board.articles) {
                return (
                <div>
                    {board.articles.map((article, articleIndex) => {
                    if (article.board_id) {
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
                </PinsContent>
            </PinsContainer>
        );
    }
};

const mapStateToProps = state => {
    return {
        boards: state.boards
    }
};

export default connect(mapStateToProps, { deleteArticle })(Pins);