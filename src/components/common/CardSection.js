import React from 'react'
import { View } from 'react-native'

const CardSection = (props) =>{
    return(
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    )
}


const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
}

export {CardSection}


//what we want to do here is take the {syles.containerStyle} and then override it
//with any addional styles that were passed in on the props object

//little trick from styling with reactNative , the style can take in an array 
//if we pass in an array of styles , the style most to the right will OVERWRITE any styles
//on the left