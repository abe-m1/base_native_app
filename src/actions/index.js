import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types'
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
    
}