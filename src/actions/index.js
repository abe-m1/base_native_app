import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS } from './types'
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
            .then(user => {
                dispatch({ type: LOGIN_USER_SUCCESS, payload: user})
            })
            .catch(error => console.log('returning error' ,error))
    }           
}