import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native'
import { Card, CardSection, Input,  Button, Spinner } from './common';
import { emailChanged, passwordChanged, signupUser } from '../actions';


class SignupForm extends Component{
    onEmailChange(text){
        this.props.emailChanged(text)
    }
    onPasswordChange(text){
        this.props.passwordChanged(text)
    }

    onButtonPress(){
        const {email, password } = this.props
        this.props.signupUser({email, password})
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

                

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}



const mapStateToProps = ({auth}) =>{
    const { email, password, error, loading } = auth
    return {     
         email: email,
         password: password,
         error: error,
         loading: loading
     }
 }

 const styles = {
    errorTextStyle :{
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}


export default connect(mapStateToProps, {emailChanged, passwordChanged, signupUser})(SignupForm);
