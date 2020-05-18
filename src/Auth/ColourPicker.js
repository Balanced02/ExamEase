/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useStyles} from '../assets/styles';
import colours from '../assets/colours';
import AppContext from '../../AppContext';

function ColourPicker() {
  const {colourPickerStyle, buttonStyles} = useStyles();
  const {dispatch, appBackground} = useContext(AppContext);
  return (
    <View style={colourPickerStyle.container}>
      <Text style={colourPickerStyle.heading}>
        Personalize your app background colour
      </Text>
      <View style={colourPickerStyle.colourContainer}>
        <TouchableOpacity
          onPress={() =>
            dispatch({
              appBackground: colours.lilac,
              textColor: colours.black,
            })
          }
          style={[
            colourPickerStyle.selectColor,
            {
              backgroundColor: colours.lilac,
            },
            appBackground === colours.lilac && {borderColor: colours.success},
          ]}></TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            dispatch({
              appBackground: colours.black,
              textColor: colours.lilac,
            })
          }
          style={[
            colourPickerStyle.selectColor,
            {
              alignSelf: 'flex-end',
              backgroundColor: colours.black,
            },
            appBackground === colours.black && {borderColor: colours.success},
          ]}></TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            dispatch({
              appBackground: colours.darkLilac,
              textColor: colours.white,
            })
          }
          style={[
            colourPickerStyle.selectColor,
            {
              backgroundColor: colours.darkLilac,
            },
            appBackground === colours.darkLilac && {
              borderColor: colours.success,
            },
          ]}></TouchableOpacity>
      </View>
      <TouchableOpacity style={buttonStyles.button}>
        <Text style={buttonStyles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ColourPicker;
