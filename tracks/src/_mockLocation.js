import * as location from 'expo-location';
const tenMetersWithDegree = 0.0001;
const getLocation = increment => {
    return {
        timesstamp: 10000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 0,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: 73.077124 +Number(`0.00${Math.ceil(Math.random()*10)}`),
            latitude: 31.409749+Number(`0.00${Math.ceil(Math.random()*10)}`)
        }
    }
}

let counter=0;

setInterval(()=>{
    location.EventEmitter.emit('Expo.locationChanged',{
        watchId:location._getCurrentWatchId(),
        location:getLocation(counter)
    });
    counter++;
},3000)
