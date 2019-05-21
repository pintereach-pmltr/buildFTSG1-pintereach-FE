import axios from 'axios';
import { axiosWithAuth }from '../../utils/axiosWithAuth';

// endpoints
const eLogin = 'https://pintereach0.herokuapp.com/api/auth/login';
const eRegister = 'https://pintereach0.herokuapp.com/api/auth/register';
const eGetBoards = 'https://pintereach0.herokuapp.com/api/boards/:id';
const ePostBoards = 'https://pintereach0.herokuapp.com/api/boards/';
const eDeleteBoards = 'https://pintereach0.herokuapp.com/api/boards/:id';
const eGetArticles = 'https://pintereach0.herokuapp.com/api/articles/:id';
const ePostArticles = 'https://pintereach0.herokuapp.com/api/articles/';
const eDeleteArticles = 'https://pintereach0.herokuapp.com/api/articles/:id';

// login actions
export const LOG_START = 'LOG_START'
export const LOG_SUCCESS = 'LOG_SUCCESS'
export const LOG_FAIL = 'LOG_FAIL'
// register actions
export const REG_START = 'REG_START'
export const REG_SUCCESS = 'REG_SUCCESS'
export const REG_FAIL = 'REG_FAIL'
// board actions
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ADD = 'ADD';
export const UPDATE = 'UPDATE';
export const ERROR = 'ERROR';

// login
export const login = creds => dispatch => {
    dispatch({ type: LOG_START });
    return axios
    .post(eLogin, creds)
    .then(res => {
        // debugger;
        console.log(res)
        localStorage.setItem('token', res.data.payload);
        dispatch({ type: LOG_SUCCESS, payload: res.data.payload })
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
        localStorage.setItem('token', res.data.payload)
        dispatch({ type: LOG_SUCCESS, payload: res.data.payload })
    })
    .catch(err => {
        console.log(err) 
        dispatch({ type: REG_FAIL })
    })
}

export const fetchBoards = () => dispatch => {
    dispatch({ type: FETCHING });
    axios
        .get(eGetBoards)
        .then(res => {
            dispatch({ type: FETCHED, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: ERROR, payload: err });
        });
};

