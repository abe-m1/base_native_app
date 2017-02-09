import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from './types'
import { Actions } from 'react-native-router-flux'
import { AsyncStorage } from 'react-native'
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
        //show spinner
        dispatch({ type: LOGIN_USER})
         axios.post(`${ROOT_URL}/user/signin`, {email, password})
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => loginUserFail(dispatch))
    }           
}


export const  signupUser = ({ email, password}) =>{
    //thunk returns a function with 'dispatch' as argument
    return (dispatch) => {
        //show spinner
        dispatch({ type: LOGIN_USER})
         axios.post(`${ROOT_URL}/user`, {email, password})
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => loginUserFail(dispatch))
    }           
}

//helper function
const loginUserSuccess = (dispatch, user ) =>{
    console.log('user', user.data.token)
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    })

    Actions.main()
} 

const loginUserFail = (dispatch) =>{
    dispatch({
        type: LOGIN_USER_FAIL
    })
} 