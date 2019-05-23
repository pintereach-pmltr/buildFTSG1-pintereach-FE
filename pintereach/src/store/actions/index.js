// import axios
import axios from 'axios';
import { axiosWithAuth }from '../../utils/axiosWithAuth';

// action exports

// login exports
export const LOG_START = 'LOG_START'
export const LOG_SUCCESS = 'LOG_SUCCESS'
export const LOG_FAIL = 'LOG_FAIL'
// register exports
export const REG_START = 'REG_START'
export const REG_SUCCESS = 'REG_SUCCESS'
export const REG_FAIL = 'REG_FAIL'
// log out exports
export const LOG_OUT = 'LOG_OUT'
// get boards exports
export const GET_BOARDS_START = 'GET_BOARDS_START'
export const GET_BOARDS_SUCCESS= 'GET_BOARDS_SUCCESS'
export const GET_BOARDS_FAIL= 'GET_BOARDS_FAIL'
// add boards exports
export const ADD_BOARDS_START = 'ADD_BOARDS_START'
export const ADD_BOARDS_SUCCESS = 'ADD_BOARDS_SUCCESS'
export const ADD_BOARDS_FAIL = 'ADD_BOARDS_FAIL'
// get articles exports
export const GET_ARTICLES_START = 'GET_ARTICLES_START'
export const GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS'
export const GET_ARTICLES_FAIL = 'GET_ARTICLES_FAIL'
// add articles exports
export const ADD_ARTICLES_START = 'ADD_ARTICLES_START'
export const ADD_ARTICLES_SUCCESS = 'ADD_ARTICLES_SUCCESS'
export const ADD_ARTICLES_FAIL = 'ADD_ARTICLES_FAIL'
// delete boards exports
export const DELETE_BOARD_START = 'DELETE_BOARD_START'
export const DELETE_BOARD_SUCCESS = 'DELETE_BOARD_SUCCESS'
export const DELETE_BOARD_FAIL = 'DELETE_BOARD_FAIL'


// TEST ERICA GET ALL
export const GET_ALL_START = 'GET_ALL_START'
export const GET_ALL_SUCCESS= 'GET_ALL_SUCCESS'
export const GET_ALL_FAIL= 'GET_ALL_FAIL'

export const getAll = userId => dispatch => {
    dispatch({ type: GET_ALL_START })
    axiosWithAuth()
    .get(`https://pintereach0.herokuapp.com/api/boards/${userId}/all`)
    .then(res => {
        dispatch({ type: GET_ALL_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
    })
}

// END TEST ERICA GET ALL

// login action
export const login = creds => dispatch => {
    dispatch({ type: LOG_START });
    return axios
    .post(`https://pintereach0.herokuapp.com/api/auth/login`, creds)
    .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userId', res.data.id);
        localStorage.setItem('userMsg', res.data.message);
        dispatch({ type: LOG_SUCCESS, payload: res.data.token })
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: LOG_FAIL})
    })
}

// register action
export const register = creds => dispatch => {
    dispatch({ type: REG_START })
    axiosWithAuth()
    .post(`https://pintereach0.herokuapp.com/api/auth/register`, creds)
    .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user id', res.data.id)
        console.log(res.data.id)
        dispatch({ type: LOG_SUCCESS, payload: res.data.token })
    })
    .catch(err => {
        console.log(err) 
        dispatch({ type: REG_FAIL })
    })
}

// logout action
export const logout = () => dispatch => {
    dispatch({ type: LOG_OUT })
    localStorage.removeItem('token');
    localStorage.removeItem('userId')
}

// get boards action
export const getBoards = userId => dispatch => {
    dispatch({ type: GET_BOARDS_START })
    axiosWithAuth()
    .get(`https://pintereach0.herokuapp.com/api/boards/${userId}`)
    .then(res => {
        console.log('[GET BOARDS STATUS]',res)
        dispatch({ type: GET_BOARDS_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
    })
}

// add boards action
export const addBoard = (board) => dispatch => {
    dispatch({ type: ADD_BOARDS_START })
    console.log(board)
    axiosWithAuth()
    .post(`https://pintereach0.herokuapp.com/api/boards/`, board)
    .then (res => {
        // debugger;
        console.log(res)
        dispatch({ type: ADD_BOARDS_SUCCESS, payload: res.data})
        // this.getBoards(id = 1)
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: ADD_BOARDS_FAIL })
    })
}

// get articles action
export const getArticles = userId => dispatch => {
    dispatch({ type: GET_ARTICLES_START })
    axiosWithAuth()
    .get(`https://pintereach0.herokuapp.com/api/articles/${userId}`)
    .then(res => {
        console.log(res)
        dispatch({ type: GET_ARTICLES_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err)
    })
}

// add articles action
export const addArticle = article => dispatch => {
    dispatch({ type: ADD_ARTICLES_START })
    axiosWithAuth()
    .post(`https://pintereach0.herokuapp.com/api/articles/`, article)
    .then(res => {
        console.log(res)
        dispatch({ type: ADD_ARTICLES_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: ADD_ARTICLES_FAIL })
    })
}

// delete boards action
export const deleteBoard = userId => dispatch => {
    dispatch({ type: DELETE_BOARD_START })
    axiosWithAuth()
    .delete(`https://pintereach0.herokuapp.com/api/boards/${userId}`)
    .then(res => {
        console.log(res)
        dispatch({ type: DELETE_BOARD_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: DELETE_BOARD_FAIL })
    })
}