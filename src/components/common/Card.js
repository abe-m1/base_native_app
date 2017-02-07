import React from 'react'
import { View } from 'react-native'

const Card = (props) =>{
    return(
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    )
    //anytime that we passs a component we wrote another component , that component will show
    //up on the props object as props.children 
}

const styles={
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
}

export {Card}
//with regular react it is rare to just make a component that handles only styling
//but with react native because we want to have some reuse of style throughout code base 
//and we don't have the benefit of seperate css files, it is more common


//before we have had nested components but they have always been inside of a view tag

