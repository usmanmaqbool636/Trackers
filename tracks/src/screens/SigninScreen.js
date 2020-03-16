import React, { useState, useContext } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from "react-native-elements";
import Spacer from '../components/Spacer';
import AuthContext from '../context/authContext';
import AuthForm from '../components/authForm';
import NavLink from '../components/navLink';
const SignupScreen = ({ navigation }) => {
    const { data, actions } = useContext(AuthContext);
    return (
        <View style={style.container}>
            <AuthForm
                headerText="Sign In to your account"
                errorMessage={data.errorMessage}
                onSubmit={actions.signIn}
                submitButtonText="Sign In"
            />
            <NavLink
                text="Don't have an account? Sign Up instead"
                routeName="Signup"
            />
        </View >
    )
}

SignupScreen.navigationOptions = () => {
    return {
        header: null
    }
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent:"center"
        marginTop: 100,
    },
    center: {
        textAlign: "center"
    }
    
});
export default SignupScreen;