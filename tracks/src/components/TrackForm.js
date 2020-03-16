import React, { useContext } from 'react';
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import LocationContext from '../context/locationContext';
const TrackForm = () => {
    const { data: {
        trackName,
        recording,
        locations
    },
        actions: {
            changeName,
            startRecording,
            stopRecording,
            createTrack
        } } = useContext(LocationContext);
    return (
        <>
            <Spacer>
                <Input value={trackName} onChangeText={changeName} placeholder="enter name of track" />
            </Spacer>
            <Spacer>
                {recording ?
                    <Button title="stop recording" onPress={stopRecording} style={{ backgroundColor: "red" }} /> :
                    <Button title="start recording" onPress={startRecording} />
                }
            </Spacer>
            <Spacer>
                {
                    (!recording && locations.length) ?
                        (<Button title="Save Recording" onPress={createTrack}/>) : null
                }
            </Spacer>
        </>
    )
}
export default TrackForm;