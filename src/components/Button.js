import React from 'react';
import {TouchableOpacity, ActivityIndicator} from 'react-native';
import UIText from './UIText';
import {useStyles} from '../assets/styles';

export default function Button({onPress, text, loading}) {
  const {buttonStyles} = useStyles();
  return (
    <TouchableOpacity
      style={buttonStyles.button}
      onPress={onPress}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <UIText style={buttonStyles.buttonText}>{text}</UIText>
      )}
    </TouchableOpacity>
  );
}
