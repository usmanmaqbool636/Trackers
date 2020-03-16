import React,{useContext} from 'react';
import {  Text, StyleSheet, Button } from 'react-native';
import {SafeAreaView} from 'react-navigation';
import AuthContext from '../context/authContext';
import Spacer from '../components/Spacer';
import {FontAwesome} from '@expo/vector-icons';

const AccountScreen=()=>{
    const {actions}= useContext(AuthContext);
    return (
        <SafeAreaView forceInset={{top:"always"}}>
            <Text style={{fontSize:48}}>
                AccountScreen
            </Text>
            <Spacer>
            <Button title="Sign Out"  onPress={actions.signOut}/>
            </Spacer>
        </SafeAreaView>
    )
}
AccountScreen.navigationOptions={
    title:'Account',
    tabBarIcon:<FontAwesome name="gear" size={20} />
}

const style=StyleSheet.create({
    
});
export default AccountScreen;