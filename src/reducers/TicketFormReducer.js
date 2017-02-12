import { TICKET_UPDATE, GET_TICKETS } from '../actions/types'

const INITIAL_STATE = {title: '', category: '', status: ''}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case TICKET_UPDATE:
            //action.payload === {prop: 'name', value: 'jane'}
           return { ...state, [action.payload.prop]: action.payload.value}

        case GET_TICKETS:
            return { ...state, tickets: action.payload}
        default:
            return state
    }
}


//square brackets are not an array , it is key interpolation

//in es5 you would need to do the following:
//const newState = {}
//newState[action.payload.prop] = action.payload.value