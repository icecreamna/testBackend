import React, { use, useState } from "react";
import { View, Text, StyleSheet, Alert } from 'react-native'


import CustomButtom from "../component/CustomButton";
import SearchBox from "../component/SearchBox";
import { registerUser } from "../services/api.js";

const RegisterScreen = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        try {
            await registerUser(username, password)
            Alert.alert("Registration Successfull")
            navigation.navigate("Login")

        } catch (error) {
            Alert.alert('Register failed', error.message)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Registration: {username} {password}</Text>
            <SearchBox placeholder='Username' onChangeText={setUsername} />
            <SearchBox placeholder='Password' secure={true} onChangeText={setPassword} />
            <CustomButtom
                title='Register'
                backgroundColor='purple'
                onPress={handleRegister}
            />
            <CustomButtom
                title='Back to Log in'
                backgroundColor='grey'
                onPress={() => navigation.navigate("Login")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1877F2',
        // alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }

});

export default RegisterScreen;