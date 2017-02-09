import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Picker, Text } from 'react-native'
import { ticketUpdate, ticketCreate } from '../actions'
import { Card, CardSection, Input, Button } from './common'

class TicketCreate extends Component{
    onButtonPress(){
        console.log(this.props )
        const { title, category, status } = this.props

         this.props.ticketCreate({ title, category, status: status || 'new'})
    }
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

                <CardSection >
                    <Text style={styles.pickerTextStyle} >Status</Text>
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
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Submit
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
}

const mapStateToProps = state =>{
    const { title, category, status } = state.ticketForm

    return{ title, category, status }
}

export default connect(mapStateToProps, { ticketUpdate, ticketCreate })(TicketCreate)