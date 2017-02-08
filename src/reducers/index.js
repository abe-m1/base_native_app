import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import TicketFormReducer from './TicketFormReducer'

export default combineReducers({
    auth: AuthReducer,
    ticketForm: TicketFormReducer
})