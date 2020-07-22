import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../App/Home';
import SubjectList from '../App/SubjectList';
import ColourPicker from '../Auth/ColourPicker';
import ExamType from '../App/ExamType';
import TakeExam from '../App/TakeExam';

const AuthStack = createStackNavigator();

export default function AppNavigator() {
  return (
    <AuthStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="Home" component={Home} />
      <AuthStack.Screen name="SubjectList" component={SubjectList} />
      <AuthStack.Screen name="ExamType" component={ExamType} />
      <AuthStack.Screen name="TakeExam" component={TakeExam} />
      <AuthStack.Screen name="ColourPicker" component={ColourPicker} />
    </AuthStack.Navigator>
  );
}
