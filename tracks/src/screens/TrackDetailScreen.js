import React, { useContext } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import LocationContext from '../context/locationContext';
import MapView, { Polyline } from 'react-native-maps';
const TrackDetailScreen = ({ navigation }) => {
    const { data: { tracks } } = useContext(LocationContext);
    const _id = navigation.getParam('_id');
    const track = tracks.find(t => t._id === _id)
    const initialcoords = track.locations[0].coords;
    if (!track) {
        return <ActivityIndicator size="large" style={{ marginTop: 100 }} />
    }
    return (
        <View>
            <Text style={{ fontSize: 48 }}>
                {track.name}
            </Text>
            <MapView style={style.map}
                initialRegion={{
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01,
                    ...initialcoords
                }}
            >
                <Polyline coordinates={track.locations.map(loc => loc.coords)} />
            </MapView>
        </View>
    )
}

const style = StyleSheet.create({
    map: {
        height: 300
    }
});
export default TrackDetailScreen;