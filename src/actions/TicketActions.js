import { TICKET_UPDATE, GET_TICKETS } from './types'
import axios from 'axios'
import { Actions } from 'react-native-router-flux'
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
            AsyncStorage.getItem('token', (err, token) => {
                                console.log('inside token', token)
                                axios.post(`${ROOT_URL}/ticket`, 
                    { title, category, status }, 
                    { headers: {'token':  token
                            }})
                            .then(response =>{ 
                                console.log('this is the response',response)
                                Actions.ticketList({ type: 'reset'})
                                console.log('action shold be called')
            })
             .catch(response => console.log(response))
                            }) 
         
        
    
    }

}



 export function getTickets(){
     return function(dispatch){
        
        AsyncStorage.getItem('token', (err, token) => {
                       axios.get(`${ ROOT_URL}/ticket`, { headers: {'token':  token }})
                            .then(response => {
                                console.log(response.data.obj)
                                dispatch({
                    type: GET_TICKETS,
                    payload: response.data.obj
                })
                
             })
             .catch(response => console.log(response))
         }) 
     }
 }


