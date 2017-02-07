import React from 'react'
import { Text, View } from 'react-native'

//the view tag is a primitive element that we can use to position
//and style elements

//need to provide a reference from the props object that comes from parent
//called with a props object
const Header = (props) =>{
    //use destructuring to reference styles
    const {textStyle, viewStyle} = styles
    //style is a prop

    //we are like entering a contract here, we are saying that our parent component
    //will be providing the headerText as a prop
    return(
    <View style={ viewStyle} >
        <Text style={textStyle} >{props.headerText}</Text>
    </View>
    ) 
 }

 const styles = {
     viewStyle: {
         backgroundColor: '#f8f8f8',
         alignItems: 'center',
         justifyContent: 'center',
         height: 60,
         paddingTop: 15,
         shadowColor: '#000',
         shadowOffset: { width: 0, height: 2 },
         shadowOpacity: 0.2,
         elevation: 2,
         position: 'relative'

     },
     textStyle: {
         fontSize: 20
     }
 }

 //flexbox is a system of positioning elements within a container


 export {Header}