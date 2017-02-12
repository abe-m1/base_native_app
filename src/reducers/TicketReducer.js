import { GET_TICKETS } from '../actions/types'

const INITIAL_STATE = {tickets: null}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_TICKETS:
           return { ...state, tickets: action.payload}
        
        default:
            return state
    }
}
