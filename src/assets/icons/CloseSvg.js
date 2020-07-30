import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {scale, useStyles} from '../styles';

export default function CloseSvg({size = 1}) {
  const {textColor} = useStyles();
  return (
    <Svg
      width={scale(size * 16)}
      height={scale(size * 16)}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM5.70711 11.7071L8 9.41421L10.2929 11.7071L11.7071 10.2929L9.41421 8L11.7071 5.70711L10.2929 4.29289L8 6.58579L5.70711 4.29289L4.29289 5.70711L6.58579 8L4.29289 10.2929L5.70711 11.7071Z"
        fill={textColor || 'black'}
      />
    </Svg>
  );
}
