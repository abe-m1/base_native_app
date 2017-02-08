import React, { Component } from 'react'
import { Card, CardSection, Input, Button } from './common'

class TicketCreate extends Component{
    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                        label="Title"
                        placeholder="Title"                   
                    />
                </CardSection>

                <CardSection>
                     <Input 
                        label="Category"
                        placeholder="Category"                   
                    />
                </CardSection>

                <CardSection>
                </CardSection>

                <CardSection>
                    <Button>
                        Submit
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

export default TicketCreate