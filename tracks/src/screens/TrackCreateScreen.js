// import '../_mockLocation';
import React, { useState, useCallback, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import Map from '../components/Map';
import LocationContext from '../context/locationContext';
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";
import {FontAwesome} from '@expo/vector-icons'
const TrackCreateScreen = ({ isFocused }) => {
    const [points, setPoints] = useState([]);
    const { data: { recording }, actions: { addLocation } } = useContext(LocationContext)
    const callback = useCallback(
        (location) => addLocation(location),
        [recording]
    )
    const [err] = useLocation(isFocused || recording, callback)
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2>
                TrackCreateScreen
            </Text>
            <Map points={points.map(p => p.coords)} />
            {err ? <Text>please enable location</Text> : null}
            <TrackForm />
        </SafeAreaView>
    )
}
TrackCreateScreen.navigationOptions={
    title:"Add Track",
    tabBarIcon:<FontAwesome name="plus" size={20} />
}
const style = StyleSheet.create({

});
export default withNavigationFocus(TrackCreateScreen);