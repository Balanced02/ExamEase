/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StatusBar, Animated} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppContext from './AppContext';
import {useStyles} from './src/assets/styles';
import useController from './AppController';
import AuthNavigator from './src/Navigators/AuthNavigator';

import 'react-native-gesture-handler';

const {Provider} = AppContext;

const App = () => {
  const {appStyles, black, white} = useStyles();
  const {state, dispatch} = useController();

  return (
    <Provider
      value={{
        ...state,
        dispatch,
      }}>
      <StatusBar
        barStyle={state.appTheme === 'white' ? 'dark-content' : 'light-content'}
        backgroundColor={state.appTheme === 'white' ? white : black}
      />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: state.appTheme === 'white' ? white : black,
        }}>
        <Animated.View style={appStyles.container}>
          <NavigationContainer>
            <AuthNavigator />
          </NavigationContainer>
        </Animated.View>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
