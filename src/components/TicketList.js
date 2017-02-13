import React, { Component } from 'react'
import { View, Text, ListView } from 'react-native'
import { connect } from 'react-redux'
import { getTickets } from '../actions';

class TicketList extends Component {
    componentWillMount(){
        this.props.getTickets()
        this.createDataSource(this.props)
    }

    componentWillReceiveProps(nextProps){
        this.createDataSource(nextProps)
    }

    createDataSource({ tickets}){
         //destructure this.props
         const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) =>r1 !== r2
        })

        this.dataSource = ds.cloneWithRows(tickets)
         
    }

    renderRow(ticket){
        return <ListItem ticket={ticket} />
       
    }
    
    render(){
        console.log('render tickets',this.props.tickets)
        return(
            <View>
                <Text>{2+2}</Text>
            </View>
        )
    }
}

const mapStateToProps = state =>{

    console.log('state', state)
    return {
        tickets: state.tickets
    }
}


export default connect(mapStateToProps, { getTickets })(TicketList)