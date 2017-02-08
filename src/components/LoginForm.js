import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input,  Button, Spinner } from './common';


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
    onSignupPress(){
            Actions.signup()
            //whenever called , it will pass in 
            //you can pass in additional props 
        }
    renderButton(){
        if ( this.props.loading){
            return <Spinner size="large" />
        }
        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
        )
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

                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
                <TouchableWithoutFeedback onPress={this.onSignupPress.bind(this)}>
                    <Text>Login </Text>
                </TouchableWithoutFeedback>
            </Card>
        )
    }
}

const styles = {
    errorTextStyle :{
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

// const mapStateToProps = state =>{
    const mapStateToProps = ({auth}) =>{
    //only return the property from global state that we care about
    const { email, password, error, loading } = auth
    return {
        
        email: email,
        password: password,
        error: error,
        loading: loading

    }
}
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser})(LoginForm);

//because we are going to reference this in the callback  we need to bind the 'this'
