import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from 'react-native'

import CustomButtom from "../component/CustomButton";
import SearchBox from "../component/SearchBox";
import Homescreen from "./HomeScreen";
import { loginUser } from "../services/api";

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const token = await loginUser(username, password)
            Alert.alert("Login Successfull",token)
            navigation.navigate("Home",{username})
        } catch (error) {
            Alert.alert("Login Failed", error.message)
        }
    }

    return (
        <View style={styles.container}>
            <SearchBox
                placeholder='Username'
                value={username}
                onChangeText={setUsername}
            />
            <SearchBox
                placeholder='Password'
                secure={true}
                value={password}
                onChangeText={setPassword}
            />
            <CustomButtom
                title='Login'
                backgroundColor='purple'
                onPress={handleLogin}
            />
            <CustomButtom
                title='Register'
                backgroundColor='grey'
                onPress={() => navigation.navigate("Register")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default LoginScreen;