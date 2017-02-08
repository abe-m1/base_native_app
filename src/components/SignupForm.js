import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native'
import { Card, CardSection, Input,  Button, Spinner } from './common';


class SignupForm extends Component{
    

    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        placeholder="email@email.com"
                        
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        
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


export default connect(mapStateToProps)(SignupForm);
