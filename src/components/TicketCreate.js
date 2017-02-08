import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ticketUpdate } from '../actions'
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

const mapStateToProps = state =>{
    const { title, category, status } = state.ticketForm

    return{ name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate })(TicketCreate)