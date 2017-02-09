import { TICKET_UPDATE } from './types'
import axios from 'axios'
import { AsyncStorage } from 'react-native'
const ROOT_URL = "http://localhost:5000"

//action creator to update the entire form
export const ticketUpdate = ({ prop, value}) =>{
    return {
        type: TICKET_UPDATE,
        payload: { prop, value}
    }
}

export function ticketCreate({ title, category, status}){
    console.log('hello', title, category, status)
    
    return function(dispatch){

         axios.post(`${ROOT_URL}/ticket`, { title, category, status })
             .then(response =>{ console.log(response)})
             .catch(response => console.log(response))
    }

}