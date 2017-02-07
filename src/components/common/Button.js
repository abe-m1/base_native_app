import React from 'react'
import { Text, TouchableOpacity } from 'react-native'


const Button = ({onPress, children}) => {
    const { buttonStyle, textStyle } = styles
    return(
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={textStyle} >{children}</Text>
        </TouchableOpacity>
        //{props.children} allows for more dynamic content
    )
}

const styles = {
    textStyle:{
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
}

export {Button}
//export {Button: Button}

//flex 1   - means expand to fill entire content
//align items - is to position children in some fashion
//alignSelf - is when we want an element to position itself


//by passing in children to this button, we have made this a reusable component
//whose text can be customized