import React from 'react'
import { View, Text, TextInput } from 'react-native'

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry}) => {
     const { inputStyle, labelStyle, containerStyle } = styles
    return(
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>

            <TextInput 
                        secureTextEntry ={secureTextEntry}
                        style={inputStyle}
                        value = {value}
                        onChangeText={onChangeText}
                        autoCorrect={false}
                        placeholder={placeholder}
                         />
        </View>
    )
}
//with jsx just by listing propery of 'secureTextEntry' is enough if the boolean is true
//you don't have to actually write 'true'

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input }

//our login form is responsible for figuring out what the state.text is , what the value is
//so anytime text changes, when the user types anything in, we want to invoke the FAT ARROW function inside of onChangeText

//so we are passing that FAT ARROW function as a PROP down into INPUT component we created

//now in THIS FILE we are recieving that prop, onChangeText , and we are just passing it
//right along to the onChangeText , 
