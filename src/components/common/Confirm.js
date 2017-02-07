import React from 'react'
import { Text, View, Modal } from 'react-native'
//we are in the same folder , so we can't import index back
//otherwise we will end up in loop
//so we have to import individually
import { CardSection } from './CardSection'
import { Button } from './Button'


const Confirm = ({ children, visible, onAccept, onDecline}) =>{

    const { containerStyle, textStyle, cardSectionStyle } = styles
    return(
        <Modal
            visible={visible}
            transparent
            animationType= "slide"
            onRequestClose={()=> {}}
        >
            <View style={containerStyle} >
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle} >{children}</Text>
                </CardSection>

                <CardSection>
                   <Button onPress={onAccept} >Yes</Button>
                   <Button onPress={onDecline}>No</Button>
                </CardSection>

            </View>
        </Modal>
    )
}

//onRequestClose is required for android, so we are just passing in an empty function 
//to satisfy that requirement

//visible is the most important tag

const styles = {
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0 ,0 , 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
}




export { Confirm }
//need to export it as a named export

//for Text, if you open up set of jsx tags  and then pass something in between them
//it will show up inside of that target component as props.children

//onPress we are just calling it without bind or this, and also we are not invoking it , by not
//attaching parenthises we are not invoking it , we are just passing a reference to it 