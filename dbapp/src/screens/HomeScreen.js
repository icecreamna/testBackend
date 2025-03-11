import React from "react";
import { View, StyleSheet, Text } from 'react-native'

const Homescreen = ({ route }) => {
    const username = route.params?.username
    return (
        <View style = {styles.ViewStyle}>
            <Text style = {styles.fontstyle}>Welcome to my world!!!({username})</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    ViewStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fontstyle:{
        fontSize:40
    }
})

export default Homescreen