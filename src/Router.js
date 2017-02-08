import React from 'react'
import { Scene , Router } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import TicketList from './components/TicketList'

const RouterComponent = () =>{
    return(
        <Router sceneStyle={{ paddingTop: 65}}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="please login" initial/>
            </Scene>

            <Scene key="main">
                <Scene key="ticketList" 
                       component={TicketList} 
                       onRight={()=> console.log('right')}
                       rightTitle="add"
                       title="list" />
            </Scene>
        </Router>
    )
}

export default RouterComponent



//sceneStyle over here is like a global style object