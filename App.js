import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//funtion
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
//screens
import Fb from './Screens/Fb'
import Insta from './Screens/Insta'

export default class App extends React.Component {
  render(){ 
  return (
   
   <AppContainer/>

    
  );
}
}
const tabNavigator = createBottomTabNavigator ({
  Fb:{screen:Fb},
  Insta:{screen:Insta}
})
const AppContainer = createAppContainer(tabNavigator)
