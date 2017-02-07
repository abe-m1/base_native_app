import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input,  Button } from './common';


class LoginForm extends Component{
    onEmailChange(text){
        this.props.emailChanged(text)
    }
    onPasswordChange(text){
        this.props.passwordChanged(text)
    }

    onButtonPress(){
        const {email, password } = this.props
        this.props.loginUser({email, password})
        //expecting an object to be passed in
    }
    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        placeholder="email@email.com"
                        onChangeText = {this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText = {this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = state =>{
    //only return the property from global state that we care about
    console.log(state)
    return {
        email: state.auth.email,
        password: state.auth.password
    }
}
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser})(LoginForm);

//because we are going to reference this in the callback  we need to bind the 'this'
