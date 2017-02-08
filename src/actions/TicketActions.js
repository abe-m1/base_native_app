import { TICKET_UPDATE } from './types'

//action creator to update the entire form
export const ticketUpdate = ({ prop, value}) =>{
    return {
        type: TICKET_UPDATE,
        payload: { prop, value}
    }
}