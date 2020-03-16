import React, {  useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import Spacer from '../components/Spacer';
import AuthContext from '../context/authContext';
import AuthForm from '../components/authForm';
import NavLink from '../components/navLink';
const SignupScreen = ({ navigation }) => {
    const { data, actions } = useContext(AuthContext);
    return (
        <View style={style.container}>
            {/* <Spacer> */}
            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={data.errorMessage}
                onSubmit={actions.signUp}
                submitButtonText="Sign Up"
            />
            <NavLink
                text="already have an account? Sign in instead"
                routeName="Signin"
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
    },
    errorMessage: {
        fontSize: 16,
        color: "red",
        margin: 15
    }
});
export default SignupScreen;