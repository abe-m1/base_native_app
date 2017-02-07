import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from './types'
import axios from 'axios'
const ROOT_URL = "http://localhost:5000"

export const emailChanged = (text) =>{
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passwordChanged = (text) =>{
    return{
        type: PASSWORD_CHANGED,
        payload: text
    }
}

export const  loginUser = ({ email, password}) =>{
    //thunk returns a function with 'dispatch' as argument
    return (dispatch) => {
         axios.post(`${ROOT_URL}/user/signin`, {email, password})
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => loginUserFail())
    }           
}

//helper function
const loginUserSuccess = (dispatch, user ) =>{
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    })
} 

const loginUserFail = (dispatch) =>{
    dispatch({
        type: LOGIN_USER_FAIL
    })
} 