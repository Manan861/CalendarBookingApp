import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import MyHeader from './components/MyHeader';
import LoginScreen from './screens/LoginScreen';
import ScheduleScreen from './screens/ScheduleScreen';

export default class  App extends React.Component() {
  render(){
    return(
      <View>
        <AppContainer/>
      </View>
    )
  }
}

var AppNavigator=createSwitchNavigator({
  LoginScreen: LoginScreen,
  ScheduleScreen: ScheduleScreen
})

const AppContainer=createAppContainer(AppNavigator)