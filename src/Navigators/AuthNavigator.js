import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ColourPicker from '../Auth/ColourPicker';
import Walkthrough from '../Auth/Walkthrough';

const AuthStack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator
      initialRouteName="Walkthrough"
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="ColourPicker" component={ColourPicker} />
      <AuthStack.Screen name="Walkthrough" component={Walkthrough} />
    </AuthStack.Navigator>
  );
}
