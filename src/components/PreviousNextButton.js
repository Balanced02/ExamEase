import React from 'react';
import {View} from 'react-native';
import ArrowBackSvg from '../assets/icons/ArrowBackSvg';
import ArrowNextSvg from '../assets/icons/ArrowNextSvg';
import {useStyles} from '../assets/styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function PreviousNextButton({prevQuestion, nextQuestion}) {
  const {buttonStyles} = useStyles();
  return (
    <View>
      <View style={buttonStyles.row}>
        <TouchableOpacity
          style={buttonStyles.iconContainer}
          onPress={prevQuestion}>
          <ArrowBackSvg size={1.6} />
        </TouchableOpacity>
        <TouchableOpacity
          style={buttonStyles.iconContainer}
          onPress={nextQuestion}>
          <ArrowNextSvg size={1.6} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
