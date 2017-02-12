import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { getTickets } from '../actions';

class TicketList extends Component {
    render(){
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


export default connect(null, { getTickets })(TicketList)