import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { getTickets } from '../actions';

class TicketList extends Component {
    componentWillMount(){
        this.props.getTickets()
    }
    render(){
        console.log(this.props.tickets)
        return(
            <View>
                <Text>hello</Text>
                 <Text>hello</Text>
                  <Text>hello</Text>
                   <Text>hello</Text>
            </View>
        )
    }
}

const mapStateToProps = state =>{

    console.log('state', state.tickets)
    return {
        tickets: state.tickets
    }
}


export default connect(mapStateToProps, { getTickets })(TicketList)