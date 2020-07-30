import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {scale, useStyles} from '../styles';

export default function ArrowBackSvg({size = 1}) {
  const {textColor} = useStyles();
  return (
    <Svg
      width={scale(size * 20)}
      height={scale(size * 20)}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M17.5 9.16667H5.69167L8.675 6.175L7.5 5L2.5 10L7.5 15L8.675 13.825L5.69167 10.8333H17.5V9.16667Z"
        fill={textColor || 'black'}
      />
    </Svg>
  );
}
