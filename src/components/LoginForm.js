import React, { Component } from 'react';
import { Card, CardSection, Input,  Button } from './common';


class LoginForm extends Component{
    onEmailChange(text){

    }
    onPasswordChange(text){

    }
    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        placeholder="email@email.com"
                        onChangeText = {this.onEmailChange.bind(this)}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText = {this.onPasswordChange.bind(this)}
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

export default LoginForm;