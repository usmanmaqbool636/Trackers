import React, { useEffect, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import AuthContext from '../context/authContext';
const ResolveAuthScreen = () => {
    const { data, actions } = useContext(AuthContext);
    useEffect(() => {
        actions.tryLocalSignin();
    }, [])
    return <Text style={style.loading}>Loading</Text>
}
const style = StyleSheet.create({
    loading: {
        color: "black",
        flex:1,
        fontSize:50,
        marginTop:100,
        textAlign:"center"
    }
})
export default ResolveAuthScreen;