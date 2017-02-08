import React from 'react'
import { Scene , Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import TicketList from './components/TicketList'
import TicketCreate from './components/TicketCreate'

const RouterComponent = () =>{
    return(
        <Router sceneStyle={{ paddingTop: 65}}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="please login" initial/>
            </Scene>

            <Scene key="main">
                <Scene key="ticketList" 
                       component={TicketList} 
                       onRight={()=> Actions.ticketCreate()}
                       rightTitle="add"
                       title="list" />
                <Scene key="ticketCreate"
                       component={TicketCreate}
                       title="Create Ticket"                           
                />
            </Scene>
        </Router>
    )
}

export default RouterComponent



//sceneStyle over here is like a global style object