import React from 'react'
import { Scene , Router } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'

const RouterComponent = () =>{
    return(
        <Router sceneStyle={{ paddingTop: 65}}>
            <Scene key="login" component={LoginForm} title="please login" />
        </Router>
    )
}

export default RouterComponent



//sceneStyle over here is like a global style object