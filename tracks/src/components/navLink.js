import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';
const navLink = ({navigation,text,routeName}) => {
    return (
        <TouchableOpacity onPress={()=>navigation.navigate(routeName)}>
                <Spacer>
                    <Text style={style.link}>
                        {text}
                    </Text>
                </Spacer>
            </TouchableOpacity>
    )
}
const style=StyleSheet.create({
    link: {
        color: 'blue'
    }
})
export default withNavigation(navLink);