import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {scale, useStyles} from '../styles';

export default function SettingsSvg({size = 1}) {
  const {textColor} = useStyles();
  return (
    <Svg
      width={scale(size * 20)}
      height={scale(size * 18)}
      viewBox="0 0 20 18"
      fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 13V15H0L0 13H4ZM20 13H10V12C10 10.8954 9.1046 10 8 10H7C5.89543 10 5 10.8954 5 12V16C5 17.1046 5.89543 18 7 18H8C9.1046 18 10 17.1046 10 16V15L20 15V13ZM20 3H15V2C15 0.8954 14.1046 0 13 0H12C10.8954 0 10 0.8954 10 2L10 6C10 7.1046 10.8954 8 12 8H13C14.1046 8 15 7.1046 15 6V5H20V3ZM9 5L9 3H0L0 5H9ZM7 16H8V12H7V16ZM13 6H12L12 2H13L13 6Z"
        fill={textColor || 'black'}
      />
    </Svg>
  );
}
