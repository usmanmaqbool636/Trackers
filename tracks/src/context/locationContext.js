import React, { Component, createContext } from 'react';
import trackApi from '../api/trackers';
import { navigate } from '../navigationRef';
const LocationContext = createContext();


export class LocationProvider extends Component {
    state = {
        recording: false,
        locations: [],
        currentLocation: null,
        trackName: '',
        tracks: []
    }
    fetchTracks = async () => {
        const responce = await trackApi.get('/tracks');
        this.setState({ tracks: responce.data });
    }
    createTrack = async () => {
        try {
            const { trackName, locations } = this.state;
            console.log(locations)
            await trackApi.post('/tracks', { name: trackName, locations })
            this.setState({
                locations: [],
                trackName: ''
            });
            navigate('trackListFlow')

        }
        catch (e) {
            console.log(e);
        }
    }
    changeName = (name) => {
        this.setState({
            trackName: name
        })
    }
    startRecording = () => {
        this.setState({ recording: true });
    }
    stopRecording = () => {
        this.setState({ recording: false });
    }
    addLocation = (location) => {
        console.log("hi there")
        this.setState({
            currentLocation: location
        })
        if (this.state.recording) {
            this.setState({ locations: [...this.state.locations, location] })
        }
    }
    render() {
        const { children } = this.props;
        const { fetchTracks, createTrack, startRecording, stopRecording, addLocation, changeName } = this;
        return (
            <LocationContext.Provider
                value={{
                    data: this.state,
                    actions: {
                        fetchTracks,
                        createTrack,
                        startRecording,
                        stopRecording,
                        addLocation,
                        changeName
                    }
                }}>
                {children}
            </LocationContext.Provider>
        )
    }
}
export default LocationContext;