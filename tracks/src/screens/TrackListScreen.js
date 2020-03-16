import React, { useContext } from 'react';
import { Text, StyleSheet, Button, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import LocationContext from '../context/locationContext';
import { NavigationEvents } from 'react-navigation';
const TrackListScreen = ({ navigation }) => {
    const { data: { tracks }, actions: { fetchTracks } } = useContext(LocationContext);
    return (
        <>
            <NavigationEvents onWillFocus={fetchTracks} />
            <FlatList
                data={tracks}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={
                            () => navigation.navigate('TrackDetail', { _id: item._id })
                        }>
                            <ListItem chevron title={item.name} />
                        </TouchableOpacity>
                    )
                }}
            />

        </>
    )
}
TrackListScreen.navigationOptions = {
    title: "Tracks"
}

const style = StyleSheet.create({

});
export default TrackListScreen;