import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {scale, useStyles} from '../styles';

export default function ArrowNextSvg({size = 1}) {
  const {textColor} = useStyles();
  return (
    <Svg
      width={scale(size * 20)}
      height={scale(size * 20)}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M2.5 10.8333L14.3083 10.8333L11.325 13.825L12.5 15L17.5 10L12.5 5L11.325 6.175L14.3083 9.16667L2.5 9.16667V10.8333Z"
        fill={textColor || 'black'}
      />
    </Svg>
  );
}
