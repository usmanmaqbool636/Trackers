import React from 'react';
import 'react-native-gesture-handler'
import {
  createAppContainer,
  createSwitchNavigator,
} from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from "react-navigation-stack";
import AccountScreen from './src/screens/AccoutScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import ResolveAuthScreen from './src/screens/resolveauthScreen';
import { AuthProvider } from './src/context/authContext';
import { LocationProvider } from './src/context/locationContext';
import { setNavigator } from './src/navigationRef';
import {FontAwesome} from '@expo/vector-icons';


const trackListFlow=createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen
})
trackListFlow.navigationOptions={
  title:'Tracks',
  tabBarIcon:<FontAwesome name="th-list" size={20} />
}
const SwitchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }, {
    initialRouteName: 'Signup'
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow,
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  })
}, {
  initialRouteName: 'ResolveAuth'
});


const App = createAppContainer(SwitchNavigator)
export default () => {
  return (
    <LocationProvider>
      <AuthProvider>
        <App ref={(navigator) => {
          setNavigator(navigator)
        }} />
      </AuthProvider>
    </LocationProvider>
  )
}