import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import colours from './src/assets/colours';

const getLocalState = () => {
  return AsyncStorage.getItem('examEase');
};

export let initialState = {
  userData: {},
  appTheme: 'white',
  appBackground: colours.white,
  textColor: colours.black,
  alert: null,
  isAppHome: false,
  points: 0,
};

const useController = () => {
  const persistState = (newState) => {
    AsyncStorage.setItem('examEase', JSON.stringify(newState)).then((data) => {
      console.log('stored');
    });
  };

  const [state, dispatch] = React.useReducer((state, value) => {
    let newState = {
      ...state,
      ...value,
    };
    persistState(newState);
    return newState;
  }, initialState);

  useEffect(() => {
    getLocalState().then((data) => {
      if (data) {
        dispatch({...JSON.parse(data), alert: null});
      }
    });
  }, []);

  return {state, dispatch};
};

export default useController;
