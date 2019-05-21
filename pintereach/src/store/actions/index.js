import axios from 'axios';
import { axiosWithAuth }from '../../utils/axiosWithAuth';

// login actions
export const LOG_START = 'LOG_START'
export const LOG_SUCCESS = 'LOG_SUCCESS'
export const LOG_FAIL = 'LOG_FAIL'
// register actions
export const REG_START = 'REG_START'
export const REG_SUCCESS = 'REG_SUCCESS'
export const REG_FAIL = 'REG_FAIL'
// board actions


// login
export const login = creds => dispatch => {
    dispatch({ type: LOG_START });
    return axios
    .post(`https://pintereach0.herokuapp.com/api/auth/login`, creds)
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
    .post(`https://pintereach0.herokuapp.com/api/auth/register`, creds)
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

