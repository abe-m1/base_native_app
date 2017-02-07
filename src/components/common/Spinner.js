import React from 'react'
import { View, ActivityIndicator } from 'react-native'


const Spinner = ({size}) => {
    return(
        <View style={styles.spinnerStyle} >
            <ActivityIndicator size={size || 'large'}/>
        </View>
    )
}

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
}


export { Spinner}

//purpose of leaving in the view tag , is so that we can reposition the 
//spinner
//flex 1 to fill up the whole screen