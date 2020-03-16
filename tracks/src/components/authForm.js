import React, { useState } from 'react';
import { StyleSheet } from 'react-native'
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer'
const authForm = ({headerText,submitButtonText,errorMessage,onSubmit}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
            <Text style={style.center} h3>{headerText}</Text>
            {/* </Spacer> */}
            <Spacer />
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />

            <Spacer />
            <Input
                secureTextEntry
                label="Password"
                value={password}
                onChangeText={(newPassword) => setPassword(newPassword)}
                autoCapitalize="none"
                autoCorrect={false}
            />
            {errorMessage ? <Text style={style.errorMessage}>{errorMessage}</Text> : null}
            <Spacer>
                <Button title={submitButtonText} onPress={() => onSubmit({ email, password })} />
            </Spacer>
        </>
    )
}
const style = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: "red",
        margin: 15
    },
});
export default authForm;