import React from 'react';
import { View, StyleSheet } from 'react-native';

const Spacer = ({ children }) => {
    return (
        <View style={style.spacer}>
            {children}
        </View>
    )
}
const style = StyleSheet.create({
    spacer: {
margin:15
    }
})
export default Spacer;