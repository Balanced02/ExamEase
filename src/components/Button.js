import React from 'react';
import {TouchableOpacity, ActivityIndicator} from 'react-native';
import UIText from './UIText';
import {useStyles} from '../assets/styles';

export default function Button({
  onPress,
  text,
  loading,
  inverted,
  disabled,
  buttonStyle,
}) {
  const {buttonStyles} = useStyles();
  return (
    <TouchableOpacity
      style={[
        buttonStyles.button,
        inverted && buttonStyles.invertedButton,
        buttonStyle,
      ]}
      onPress={onPress}
      disabled={loading || disabled}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <UIText
          style={[
            buttonStyles.buttonText,
            inverted && buttonStyles.invertedText,
          ]}>
          {text}
        </UIText>
      )}
    </TouchableOpacity>
  );
}
