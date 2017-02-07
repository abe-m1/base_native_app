import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers'
import LoginForm from './components/LoginForm'

class App extends Component {
    render(){
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
        //apply middleware is the third argument
        //2nd argument is for any initial state
        //3rd argument is for store enhancers 
        return(
            <Provider store={store}>
                <View>
                    <LoginForm />
                </View>
            </Provider>
        )
    }
}


export default App;


//need to give provider instance of redux store
//provider tag makes sure each connect has access to the store