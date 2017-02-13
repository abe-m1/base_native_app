import React, { Component } from 'react'
import { View, Text, ListView } from 'react-native'
import { connect } from 'react-redux'
import { getTickets } from '../actions';

class TicketList extends Component {
    componentWillMount(){
        this.props.getTickets()
        // this.createDataSource(this.props)
        console.log('render tickets1',this.props)
    }

     componentWillReceiveProps (props) {
        
        console.log('reciev', props)
        

     }

    createDataSource({ tickets}){
         //destructure this.props
         const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) =>r1 !== r2
        })

        this.dataSource = ds.cloneWithRows(tickets)
         
    }

    renderRow(ticket){
        return <ListItem tick={tick} />
       
    }
    
    render(){
        
        return(
            <View>
                <Text>hello</Text>
            </View>
        )
    }
}

const mapStateToProps = state =>{

    console.log('state', state)
    return {
        tick: state.tickets.tickets
    }
}


export default connect(mapStateToProps, { getTickets })(TicketList)