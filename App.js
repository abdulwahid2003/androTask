/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

  import React from 'react';
  import messaging from '@react-native-firebase/messaging';
  import {
  
    StyleSheet,
    Text,
   
    View,
  } from 'react-native';
  import * as ScreenNames from './screenNames'

  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';
  import Home from './screens/Home/Home';
  import ProfileScreen from './screens/Profile/ProfileScreen';
  import linking from './linking';
import Settings from './screens/Settings/Settings';
  function App() {
    
    const Stack = createStackNavigator();
 
  

    async function requestUserPermission() {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    
      if (enabled) {
        console.log('Authorization status:', authStatus);
      }
    }
    const getToken=async()=>{

      try {
        const token = await messaging().getToken();
        console.log("token-----",token)
      } catch (error) {
        console.log("getToken======",error)
      }
    }
    React.useEffect(()=>{
      getToken()
    },[])
    return (
    
      <NavigationContainer linking={linking}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
     
      >
        <Stack.Screen name={ScreenNames.HOME_SCREEN} component={Home} />
        <Stack.Screen name={ScreenNames.PROFILE_SCREEN} component={ProfileScreen} />
        <Stack.Screen name={ScreenNames.SETTING_SCREEN} component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
    
    );
  }
export default App;
