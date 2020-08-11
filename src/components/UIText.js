import React from 'react';
import {Text} from 'react-native';
import {useStyles} from '../assets/styles';

export default function UIText({style, children, type, ...props}) {
  const {uiTextStyles} = useStyles();
  return (
    <Text
      style={[
        uiTextStyles.text,
        style,
        type === 'bold' ? uiTextStyles.textBold : null,
        type === 'small' ? uiTextStyles.textSmall : null,
        type === 'light' ? uiTextStyles.textLight : null,
      ]}
      {...props}>
      {children}
    </Text>
  );
}
