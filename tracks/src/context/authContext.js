import React, { Component, createContext, useReducer } from 'react';
import { AsyncStorage } from 'react-native';
import trackApi from '../api/trackers';
import { navigate } from '../navigationRef';
const AuthContext = createContext();
export class AuthProvider extends Component {
    state = {
        errorMessage: ""
    }
    tryLocalSignin = async () => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            navigate('trackListFlow')
        }
        else {
            navigate('Signup')
        }
    }
    signIn = async ({ email, password }) => {
        try {
            this.setState({ errorMessage: "" })
            const responce = await trackApi.post('/signin', { email, password });
            await AsyncStorage.setItem('token', responce.data.token);
            this.setState({ token: responce.data.token })
            navigate('trackListFlow');

        } catch (error) {
            this.setState({ errorMessage: "something went wrong with sign up" })
        }
    }
    signUp = async ({ email, password }) => {
        try {
            this.setState({ errorMessage: "" })

            const responce = await trackApi.post('/signup', { email, password });
            await AsyncStorage.setItem('token', responce.data.token);
            this.setState({ token: responce.data.token })
            navigate('mainFlow');

        } catch (error) {

            this.setState({ errorMessage: "something went wrong with sign up" })
        }
    }
    signOut = async () => {
        await AsyncStorage.removeItem('token');
        this.setState({ token: null,errorMessage:"" })
        navigate('Signup');
    }
    render() {
        const { children } = this.props;
        const { signIn, signUp, tryLocalSignin,signOut } = this;
        return (
            <AuthContext.Provider
                value={{
                    data: this.state,
                    actions: { signUp, signIn, tryLocalSignin,signOut }
                }}>
                {children}
            </AuthContext.Provider>
        )
    }
}
export default AuthContext;