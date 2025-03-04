import React from "react";
import { View, Text, StyleSheet } from 'react-native'


import CustomButtom from "../component/CustomButton";
import SearchBox from "../component/SearchBox";

const LoginScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <SearchBox placeholder='Username'/>
            <SearchBox placeholder='Password' secure={true}/>
            <CustomButtom
            title = 'Login' 
            backgroundColor='purple'
            />
             <CustomButtom
            title = 'Register' 
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