import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const SearchBox = ({ placeholder, value, onChangeText ,secure}) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secure}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        // borderRadius: 12,
        paddingHorizontal: 12,
        height: 45,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3
    },
    input: {
        flex: 1,
        fontSize: 18,
        color: '#333'
    }
})

export default SearchBox;