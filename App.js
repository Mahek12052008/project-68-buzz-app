import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FacebookScreen from './screens/facebookScreen';
import InstagramScreen from './screens/InstagramScreen';
import { createAppContainer  } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default function App() {
  return (
    <AppContainer/>

  );
}
const TabNavigator = createBottomTabNavigator({
  FaceBook: {screen: FacebookScreen},
  Instagram:{screen: InstagramScreen}
})

const AppContainer = createAppContainer(TabNavigator);
