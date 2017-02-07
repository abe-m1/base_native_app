import React from 'react'
import { Scene , Router } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'

const RouterComponent = () =>{
    return(
        <Router sceneStyle={{ paddingTop: 65}}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="please login" initial/>
            </Scene>

            <Scene key="main">
                <Scene key="employeeList" component={EmployeeList} title="list" />
            </Scene>
        </Router>
    )
}

export default RouterComponent



//sceneStyle over here is like a global style object