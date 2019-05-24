// react imports
import React, { Component } from 'react';
// redux imports
import { connect } from 'react-redux';
// action imports
import { addArticle } from '../store/actions/index'
// styled components imports
import styled from 'styled-components';

// styled components
const FormContainer = styled.div`
    width: 100%;
    margin: 5rem 0;
`

const FormContent = styled.div`
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`

const FormArticles = styled.form`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`

const FormInput = styled.input`
    width: 20rem;
    height: 2.5rem;
    margin: 0 1rem;
    text-align: center;
    background-color: #EDF2F4;
`

const FormSubmit = styled.input`
    width: 100px;
    height: 2.75rem;
    border-radius: 10px 10px 10px 0;
    background-color: #EF233C;
    font-weight: bold;
    color: #2B2D42;
`

class ArticleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: {
                article_label: "",
                url: "",
                board_id: ''
              }
        }
    }
    

    changeHandler = event => {
        this.setState({
            articles: {
              ...this.state.articles,
              [event.target.name]: event.target.value
            }
          });
    };

    addArticle = event => {
        event.preventDefault();
        this.props.addArticle(this.state.articles);
        this.setState({
          articles: {
            article_label: "",
            url: "",
            board_id: ''
          }
        });
      };
    
    render() {
        return (
            <FormContainer>
                <FormContent>
                    <FormArticles onSubmit={this.addArticle}>
                        
                        <FormInput name="article_label"
                        type="article_label" 
                        placeholder="Pin Title" 
                        value={this.state.articles.article_label}
                        onChange={this.changeHandler} />

                        <FormInput name="url" 
                        type="text"
                        placeholder="URL - ex. www.medium.com" 
                        value={this.state.articles.url} 
                        onChange={this.changeHandler} />

                        <FormInput name="board_id" 
                        type="text"
                        placeholder="Board ID" 
                        value={this.state.articles.board_id} 
                        onChange={this.changeHandler} />

                        <FormSubmit type="submit" value="SUBMIT" />
                    </FormArticles>
                </FormContent>
            </FormContainer>
        );
    }
};

export default connect(null, { addArticle })(ArticleForm);