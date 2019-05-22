import axios from 'axios';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

// endpoints
const eLogin = 'https://pintereach0.herokuapp.com/api/auth/login';
const eRegister = 'https://pintereach0.herokuapp.com/api/auth/register';
// const eGetBoards = 'https://pintereach0.herokuapp.com/api/boards/:id';
const ePostBoards = 'https://pintereach0.herokuapp.com/api/boards/';
// const eDeleteBoards = 'https://pintereach0.herokuapp.com/api/boards/:id';
// const eGetArticles = 'https://pintereach0.herokuapp.com/api/articles/:id';
// const ePostArticles = 'https://pintereach0.herokuapp.com/api/articles/';
// const eDeleteArticles = 'https://pintereach0.herokuapp.com/api/articles/:id';

// const userId = localStorage.getItem('userId');

// login actions
export const LOG_START = 'LOG_START'
export const LOG_SUCCESS = 'LOG_SUCCESS'
export const LOG_FAIL = 'LOG_FAIL'
// export const SET_ID = 'SET_ID'
// register actions
export const REG_START = 'REG_START'
export const REG_SUCCESS = 'REG_SUCCESS'
export const REG_FAIL = 'REG_FAIL'
// board actions
export const BOARD_FETCHING = 'BOARD_FETCHING';
export const BOARD_FETCHED = 'BOARD_FETCHED';
export const BOARD_ADD = 'BOARD_ADD';
export const BOARD_UPDATE = 'BOARD_UPDATE';
export const BOARD_ERROR = 'BOARD_ERROR';
// article actions
export const ARTICLE_FETCHING = 'ARTICLE_FETCHING';
export const ARTICLE_FETCHED = 'ARTICLE_FETCHED';
export const ARTICLE_ADD = 'ARTICLE_ADD';
export const ARTICLE_UPDATE = 'ARTICLE_UPDATE';
export const ARTICLE_ERROR = 'ARTICLE_ERROR';

// login
export const login = creds => dispatch => {
    dispatch({ type: LOG_START });
    return axios
    .post(eLogin, creds)
    .then(res => {
        // debugger;
        console.log(res)
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userId', res.data.id);
        dispatch({ type: LOG_SUCCESS, payload: res.data.payload })
        // dispatch({ type: SET_ID, userId: res.data.id })
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: LOG_FAIL})
    })
}

// register
export const register = creds => dispatch => {
    dispatch({ type: REG_START })
    return axios
    .post(eRegister, creds)
    .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('userId', res.data.id);
        dispatch({ type: LOG_SUCCESS, payload: res.data.payload })
    })
    .catch(err => {
        console.log(err) 
        dispatch({ type: REG_FAIL })
    })
}

// boards
export const fetchBoards = (userId) => dispatch => {
    dispatch({ type: BOARD_FETCHING });
    axiosWithAuth()
        .get(`https://pintereach0.herokuapp.com/api/boards/${userId}`)
        .then(res => {
            console.log('[BOARDS RES]', res.data);
            dispatch({ type: BOARD_FETCHED, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: BOARD_ERROR, payload: err });
        });
};

export const addBoard = (newBoard) => dispatch => {
    axiosWithAuth()
        .post(ePostBoards, newBoard)
        .then(res => {
            localStorage.setItem('boardId', res.data.board_id)
            dispatch({ type: BOARD_ADD, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: BOARD_ERROR, payload: err });
        });
};

// articles
export const fetchArticles = (boardId) => dispatch => {
    dispatch({ type: ARTICLE_FETCHING });
    axiosWithAuth()
        .get(`https://pintereach0.herokuapp.com/api/articles/${boardId}`)
        .then(res => {
            console.log('[FETCH ARTICLE RESPONSE]', res)
            dispatch({ type: ARTICLE_FETCHED, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: ARTICLE_ERROR, payload: err });
        });
};

export const addArticle = (newArticle) => dispatch => {
    axiosWithAuth()
        .post('https://pintereach0.herokuapp.com/api/articles/', newArticle)
        .then(res => {
            console.log('[ADD ARTICLE RES]', res)
            dispatch({ type: ARTICLE_ADD, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: ARTICLE_ERROR, payload: err });
        });
};

