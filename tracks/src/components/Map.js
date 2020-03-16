import React, { useContext } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { } from 'react-native-elements';
import MapView, { Polyline, Circle } from 'react-native-maps';
import LocationContext from '../context/locationContext';
const Map = () => {
    const { data: { currentLocation,locations } } = useContext(LocationContext);
    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
    }
    return <MapView style={style.map} initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    }}
    region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    }}
    >
        <Circle
            radius={25}
            center={currentLocation.coords}
            strokeColor="rgba(158,158,255,1.0)"
            fillColor="rgba(158,158,255,1.0)"
        />
        <Polyline
            coordinates={locations.map(l=>l.coords)}
        />
    </MapView>
}
const style = StyleSheet.create({
    map: {
        height: 200
    }
});
export default Map;