import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Picker } from 'react-native'
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
                        value={this.props.title}
                        onChangeText={text => this.props.ticketUpdate({prop:'title', value: text})}                  
                    />
                </CardSection>

                <CardSection>
                     <Input 
                        label="Category"
                        placeholder="Category"
                        value={this.props.category}
                        onChangeText={text => this.props.ticketUpdate({prop:'category', value: text})}                  
                    />
                </CardSection>

                <CardSection>
                    <Picker
                        style={{ flex: 1}}
                        selectedValue={this.props.status}
                        onValueChange={status => this.props.ticketUpdate({prop: 'status', value: status})}
                        >
                        <Picker.Item label="new" value="new" />
                        <Picker.Item label="in_process" value="in_process" />
                        <Picker.Item label="completed" value="completed" />
                    </Picker>
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

    return{ title, category, status }
}

export default connect(mapStateToProps, { ticketUpdate })(TicketCreate)