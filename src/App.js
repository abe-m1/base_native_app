import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import { createStore } from 'redux';

class App extends Component {
    render(){
        return(
            <Provider store={createStore()}>
                <View>
                    <Text>
                        hello
                    </Text>
                </View>
            </Provider>
        )
    }
}


export default App;


//need to give provider instance of redux store
//provider tag makes sure each connect has access to the store